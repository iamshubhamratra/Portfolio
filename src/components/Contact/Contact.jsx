import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      _captcha: "false",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/ratrashubham129@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
        form.current.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-4 sm:px-[7vw] lg:px-[20vw] font-sans"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Direct Contact Info Card */}
        <div className="bg-[#0d081f] p-8 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(130,69,236,0.15)] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Get in Touch 💬
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Feel free to contact me directly via email or phone, or send me a message through the form.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ratrashubham129@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
              >
                <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm font-semibold text-white">ratrashubham129@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917018147193"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
              >
                <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm font-semibold text-white">+91 7018147193</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 flex gap-4">
            <a
              href="https://www.linkedin.com/in/shubham-ratra-b2b265245/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white flex items-center justify-center gap-2 text-sm font-medium transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/iamshubhamratra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white flex items-center justify-center gap-2 text-sm font-medium transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#0d081f] p-8 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(130,69,236,0.15)]">
          <h3 className="text-xl font-semibold text-white mb-4">
            Send a Message 🚀
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 text-sm"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 text-sm"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 text-sm"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 text-sm resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
