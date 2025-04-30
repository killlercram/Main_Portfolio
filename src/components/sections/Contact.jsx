import emailjs from "emailjs-com";
import { useState } from "react";
import { Footer } from "./Footer";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("message Sent!!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => alert("Oops! Something went Wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center pt-20"
    >
      <div className="px-4 w-150">
        <h2
          className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500
to-cyan-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:border-blue-500/30"
              placeholder="Name...."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:border-blue-500/30"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:border-blue-500/30"
              placeholder="Subject..."
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <textarea
              maxLength={500}
              id="message"
              name="message"
              required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:border-blue-500/30"
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="border border-white/10 rounded-xl mt-16 mb-4 w-full gap-2.5 px-20 ">
        <Footer />

        {/* Copyright */}
        <p className="text-center md:mb-5">
          &copy;Shashwat Tandon.All rights reserved.
        </p>
      </div>
    </section>
  );
};
