import { motion } from "framer-motion";
import { Mail, Send, Github, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-24 bg-gradient-to-b from-[#f5f4ff] via-[#eef1fb] to-[#fafaff] dark:from-[#0c0b16] dark:via-[#1a152d] dark:to-[#0c0b16] transition-colors duration-500"
    >
      <div className="absolute -top-20 left-0 w-[300px] h-[300px] bg-[#8a2be2]/20 dark:bg-[#ff6ac1]/20 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#ffa07a]/20 dark:bg-[#7f5af0]/20 rounded-full blur-[120px] z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-[#111827] dark:text-white mb-2 tracking-tight">
          Let’s Connect
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-10">
          Have a question, project idea, or collaboration in mind? Drop a message!
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto bg-white/60 dark:bg-white/5 backdrop-blur-3xl border border-white/40 dark:border-white/10 rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-5 py-3 rounded-xl bg-white/80 dark:bg-white/10 placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-white border border-purple-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-5 py-3 rounded-xl bg-white/80 dark:bg-white/10 placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-white border border-purple-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600"
          />
        </div>
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full mt-6 px-5 py-3 rounded-xl bg-white/80 dark:bg-white/10 placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-white border border-purple-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600"
        ></textarea>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-12 text-sm text-gray-700 dark:text-gray-400"
      >
        <p className="flex items-center justify-center gap-2">
          <Mail className="w-4 h-4" /> contact@example.com
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
