import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const [phase, setPhase] = useState("name");
    const fullName = "Sourov Ahmed";
    const role = "Web Developer";

    useEffect(() => {
        let index = 0;
        let text = "";
        let fullText = phase === "name" ? fullName : role;

        const interval = setInterval(() => {
            text = fullText.slice(0, index);
            setDisplayText(text);
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => setPhase(phase === "name" ? "role" : "name"), 1500);
            }
        }, 140);

        return () => clearInterval(interval);
    }, [phase]);

    return (
        <section className="grid place-content-center text-center min-h-[80vh] bg-black text-white mt-5">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="glitch-wrapper">
                    <h2 className=" text-4xl md:text-6xl font-bold ">
                         Hi, I’m{" "}
                        <span className={`glitch`}
                            data-text={displayText}>
                            {displayText}
                        </span>
                    </h2>
                </div>

                <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-400 mt-6">
                    A passionate Frontend Developer crafting beautiful & interactive digital experiences.
                </p>

                <motion.a
                    href="/Sourov_Ahmed_Resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-block px-6 py-3 bg-indigo-600 rounded-full text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
                >
                    Download Resume
                </motion.a>
            </motion.div>
        </section>
    );
}
