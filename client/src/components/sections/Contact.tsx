import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactMethods = [
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:faishol@mail.ru",
      label: "faishol@mail.ru",
      color: "hover:text-primary hover:border-primary"
    },
    {
      name: "WhatsApp",
      icon: <Phone className="w-6 h-6" />,
      href: "https://wa.me/62818212221",
      label: "+62 818-212-221",
      color: "hover:text-green-500 hover:border-green-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/faishol-jabar",
      label: "Connect on LinkedIn",
      color: "hover:text-blue-500 hover:border-blue-500"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com/fssoul",
      label: "Follow on Instagram",
      color: "hover:text-pink-500 hover:border-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Interested in collaboration or have a project in mind? Connect with me directly through any of the platforms below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex items-center p-6 bg-card border border-border 
                  transition-all duration-300 hover:bg-accent/5 ${method.color}
                `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mr-6 p-4 bg-background border border-border group-hover:border-current transition-colors">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1 group-hover:text-foreground transition-colors">
                    {method.name}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-current transition-colors">
                    {method.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
