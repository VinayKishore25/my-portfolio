"use client";

import ContactForm from "../../../components/ContactForm";
import Socials from "../../../components/Socials";

const ContactPage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="h1 text-center mb-4">Get In Touch</h1>
        <p className="max-w-2xl mx-auto text-center mb-12 text-gray-300">
          Have a question or want to collaborate? Feel free to reach out to me.
          I'll get back to you as soon as possible.
        </p>
        <ContactForm />
        {/* Socials */}
        <div className="flex justify-center mt-16">
          <Socials className="flex items-center gap-x-6 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
