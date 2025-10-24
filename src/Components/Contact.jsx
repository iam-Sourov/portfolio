import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-8 md:px-20 text-center">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6"
            >
                Let’s Connect
            </motion.h3>
            <p className="text-slate-400 mb-6">
                Interested in collaborating or just want to say hi?
            </p>
            <div className="flex justify-center gap-6">
                <a
                    href="mailto:sourov@email.com"
                    className="hover:text-indigo-500 transition"
                >
                    <Mail />
                </a>
                <a
                    href="https://github.com"
                    className="hover:text-indigo-500 transition"
                >
                    <Github />
                </a>
                <a
                    href="https://linkedin.com"
                    className="hover:text-indigo-500 transition"
                >
                    <Linkedin />
                </a>
            </div>
        </section>
    );
}
