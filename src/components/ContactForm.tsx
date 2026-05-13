import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim() || null,
          message: form.message.trim() || null,
        });

      if (dbError) {
        console.error('DB error:', dbError);
        throw new Error('Ошибка сохранения');
      }

      // Send notifications (Telegram + email)
      await supabase.functions.invoke('notify-contact', {
        body: {
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
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
        <input
          type="text"
          placeholder="Ваше имя"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
        />
        <input
          type="email"
          placeholder="Email (необязательно)"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
        />
        <textarea
          placeholder="Расскажите о вашем бизнесе (необязательно)"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
        />
        <button type="submit" disabled={loading} className="btn-primary gap-2 w-full disabled:opacity-50">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          {loading ? "Отправка..." : "Отправить"}
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
