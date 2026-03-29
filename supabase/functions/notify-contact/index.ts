import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/telegram';
const NOTIFY_EMAIL = 'finsvod@inbox.ru';

const BodySchema = z.object({
  name: z.string().min(1).max(255),
  phone: z.string().min(1).max(50),
  message: z.string().max(2000).optional().default(''),
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { name, phone, message } = parsed.data;
    const results: { telegram?: boolean; email?: boolean } = {};

    // --- Telegram notification ---
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const TELEGRAM_API_KEY = Deno.env.get('TELEGRAM_API_KEY');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (LOVABLE_API_KEY && TELEGRAM_API_KEY && TELEGRAM_CHAT_ID) {
      const text = `📩 <b>Новая заявка с сайта</b>\n\n👤 <b>Имя:</b> ${escapeHtml(name)}\n📞 <b>Телефон:</b> ${escapeHtml(phone)}\n💬 <b>Сообщение:</b> ${escapeHtml(message || '—')}`;

      const tgResponse = await fetch(`${GATEWAY_URL}/sendMessage`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'X-Connection-Api-Key': TELEGRAM_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      });

      const tgData = await tgResponse.json();
      results.telegram = tgResponse.ok;
      if (!tgResponse.ok) {
        console.error('Telegram error:', JSON.stringify(tgData));
      }
    } else {
      console.warn('Telegram not configured: missing LOVABLE_API_KEY, TELEGRAM_API_KEY, or TELEGRAM_CHAT_ID');
    }

    return new Response(JSON.stringify({ success: true, ...results }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error in notify-contact:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
