import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import myImage from "../assets/cover.jpg"; // 👉 replace with your actual image path
import { Download, DownloadIcon } from "lucide-react";

export default function Hero({ darkMode }) {
    const [displayText, setDisplayText] = useState("");
    const [phase, setPhase] = useState("name");
    const fullName = "MD Rakib Biswas";
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
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] bg-black text-white px-6 md:px-16 lg:px-24 overflow-hidden p-10">
            {/* Left Content */}
            <motion.div
                className="w-full md:w-1/2 text-center md:text-left space-y-6"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="glitch-wrapper ">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        Hi, I’m{" "}
                        <span className="glitch-new" data-text={displayText}>
                            {displayText}
                        </span>
                    </h2>
                </div>

                <p className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto md:mx-0">
                    A passionate Frontend Developer crafting beautiful & interactive digital experiences.
                </p>

                <motion.a
                    href="/Sourov_Ahmed_Resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-fit px-4 py-2 ${darkMode ? 'bg-white' : ' bg-indigo-600'} rounded-full ${darkMode ? "text-black" : 'text-white '}   font-bold  hover:bg-indigo-700 transition`}
                >
                    Download Resume
                </motion.a>
            </motion.div>

            <motion.div
                className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <img
                    src={myImage}
                    alt="Profile"
                    className="w-full md:w-[450px] lg:w-[520px] rounded-2xl object-cover shadow-2xl"
                />
            </motion.div>
        </section>
    );
}
