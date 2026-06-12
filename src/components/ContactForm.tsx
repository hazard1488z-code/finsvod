import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Имя слишком короткое").max(100, "Имя слишком длинное").trim(),
  phone: z.string().min(7, "Введите корректный номер телефона").max(20, "Номер слишком длинный").regex(/^[\d\s\+\-\(\)]+$/, "Некорректный формат телефона").trim(),
  email: z.string().email("Некорректный email").max(200).trim().optional().or(z.literal("")),
  message: z.string().max(2000, "Сообщение слишком длинное").trim().optional(),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const data = result.data;

    try {
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          message: data.message || null,
        });

      if (dbError) {
        console.error('DB error:', dbError);
        throw new Error('Ошибка сохранения');
      }

      await supabase.functions.invoke('notify-contact', {
        body: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        },
      });

      toast.success("Заявка отправлена! Мы свяжемся с вами в течение часа.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error('Submit error:', err);
      toast.error("Ошибка при отправке. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-elevated max-w-lg mx-auto"
    >
      <h3 className="heading-card mb-6">Оставить заявку</h3>
      <div className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            maxLength={100}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Телефон"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            maxLength={20}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email (необязательно)"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={200}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <textarea
            placeholder="Расскажите о вашем бизнесе (необязательно)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={3}
            maxLength={2000}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <button type="submit" disabled={loading} className="btn-primary gap-2 w-full disabled:opacity-50">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          {loading ? "Отправка..." : "Отправить"}
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
