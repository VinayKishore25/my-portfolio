"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ContactForm from "@/components/features/ContactForm";
import Circles from "@/components/ui/Circles";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { socialLinks } from "@/data/social-links";

const contactInfo = [
  {
    icon: <HiEnvelope />,
    title: "Email",
    detail: "vinaykishore2512@gmail.com",
    link: "mailto:vinaykishore2512@gmail.com",
  },
  {
    icon: <HiPhone />,
    title: "Phone",
    detail: "+91 8309958747",
    link: "tel:+918309958747",
  },
  {
    icon: <HiMapPin />,
    title: "Location",
    detail: "Andhra Pradesh, India",
    link: null,
  },
];

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-primary/30 py-20 flex items-center">
      <Circles />
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-12">
          {/* Header */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center"
          >
            <h2 className="h2 mb-4">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/70 leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I am always open to discussing new opportunities and ideas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", 0.3 + index * 0.1)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        className="flex items-center gap-4 group"
                      >
                        <div className="text-accent text-3xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/70 text-sm group-hover:text-accent transition-colors">
                            {item.detail}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="text-accent text-3xl">{item.icon}</div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/70 text-sm">{item.detail}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-4">
                  Connect on Social Media
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">Availability</h3>
                <p className="text-white/70 text-sm">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Currently available for freelance projects and full-time
                  opportunities
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
