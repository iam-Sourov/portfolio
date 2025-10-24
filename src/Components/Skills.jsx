import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Firebase",
        "Git",
        "Node.js",
    ];

    return (
        <section id="skills" className="py-20 px-8 md:px-20">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-10 text-center"
            >
                My Skills
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl shadow-md backdrop-blur-lg border border-dashed hover:shadow-xl hover:bg-slate-500 transition"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
