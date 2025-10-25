import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Airnest (Online Ticket)",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            desc: "AirNest is a web application (built with HTML, CSS, JavaScript). An Airplane ticket booking system",
            link: "https://air-nest.netlify.app/",
            GitHub: "https://github.com/iam-Sourov/AirNest"
        },
        {
            id: 2,
            title: "WeatherUI  (Weather APP)",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            desc: "WeatherUI is a clean, user-friendly weather application interface that displays current weather data and forecasts in a visually appealing way. It emphasizes clarity, usability, and real-time meteorological information for users to quickly check the weather at a glance.",
            Tech: "TECH: React · Tailwind-CSS · WeatherAPI",
            link: "https://bucolic-sunburst-1a3853.netlify.app/",
            GitHub: "https://github.com/iam-Sourov/My-Weather"
        },
        {
            id: 3,
            title: "Emergency Service",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            desc: "Emergency Service Directory is a web-based portal providing key government helpline numbers for Bangladesh. It lists national emergency contacts such as police (999), fire service (999), ambulance (1994-999999), women & child helpline, electricity outage, anti-corruption, and more, all at users’ fingertips.",
            Tech: "TECH: React · Tailwind-CSS · DaisyUI",
            link: "https://iam-sourov.github.io/Emergency-Service/",
            GitHub: "https://github.com/iam-Sourov/Emergency-Service"
        },
        {
            id: 4,
            title: "My-AppStore",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            desc: "MyPlayZone is a fun, interactive web experience centered around gaming and play. It offers a colorful, engaging interface that invites users to explore, play, and immerse themselves in a lighthearted digital world.",
            Tech: "TECH: React · Tailwind-CSS · ReactRouter · DaisyUI",
            link: "https://unrivaled-hamster-2786f4.netlify.app/",
            GitHub: "https://github.com/iam-Sourov/My-AppStore"
        },
        {
            id: 5,
            title: "Customer Support",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            desc: "This project is a React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using React-Toastify.",
            Tech: "TECH: React · Tailwind · DaisyUI",
            link: "https://benevolent-crisp-7d37ae.netlify.app/",
            GitHub: "https://github.com/iam-Sourov/Customer-Support"
        }
    ];

    return (
        <section id="projects" className="py-20 px-8 md:px-20 bg-slate-600">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-10 text-center"
            >
                Featured Projects
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <motion.a
                        key={p.id}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="rounded-2xl overflow-hidden shadow-md bg-slate-900 hover:shadow-xl hover:-translate-y-2 transition"
                    >
                        <img src={p.img} alt={p.title} className="h-52 w-full object-cover" />
                        <div className="p-6">
                            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                            <p className="text-slate-400 text-sm">{p.desc}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
