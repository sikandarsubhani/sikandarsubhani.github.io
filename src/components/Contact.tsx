import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'service_4mklx56',
        'template_biexek7',
        formRef.current,
        '8KDFbxGyQLL6SQsJo'
      );
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center text-primary"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6 backdrop-blur-lg bg-secondary/30 p-6 rounded-lg border border-primary/20">
            <p className="text-lg text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:sikandarsubhani37@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>sikandarsubhani37@gmail.com</span>
              </a>
              <a
                href="tel:+923054090834"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(+92) 3054090834</span>
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/sikandarsubhani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/msikandarsubhani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 backdrop-blur-lg bg-secondary/30 p-6 rounded-lg border border-primary/20"
          >
            <Input
              name="user_name"
              placeholder="Your Name"
              className="bg-background/50 border-primary/20"
              required
            />
            <Input
              name="user_email"
              type="email"
              placeholder="Your Email"
              className="bg-background/50 border-primary/20"
              required
            />
            <Input
              name="subject"
              placeholder="Subject"
              className="bg-background/50 border-primary/20"
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              className="bg-background/50 border-primary/20 min-h-[150px]"
              required
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};