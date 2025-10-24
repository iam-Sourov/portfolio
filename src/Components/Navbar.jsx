import { Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-lg sticky top-0 z-50">
            <h1 className="text-2xl font-bold tracking-tight ">
                Sourov<span className="text-indigo-500">.</span>
            </h1>
            <div className="flex items-center gap-6">
                <a href="#projects" className="hover:text-indigo-500 transition">
                    Projects
                </a>
                <a href="#skills" className="hover:text-indigo-500 transition">
                    Skills
                </a>
                <a href="#contact" className="hover:text-indigo-500 transition">
                    Contact
                </a>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full border border-slate-500 hover:bg-slate-700 transition"
                >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>
        </nav>
    );
}
