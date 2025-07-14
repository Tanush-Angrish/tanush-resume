
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const sections = [
  {
    id: "about",
    title: "About Me",
    content: `Aspiring Full-Stack Developer with a passion for technology and a strong aptitude for problem-solving. I am eager to learn and grow in a dynamic environment, continuously enhancing my technical and professional skill set.`,
  },
  {
    id: "education",
    title: "Education",
    content: `\n- BE-CSE: Chitkara University, Punjab (CGPA: 8.52)\n- 12th CBSE: Gurukul Global School (77.4%)\n- 10th CBSE: St. Kabir Public School (93.2%)`,
  },
  {
    id: "experience",
    title: "Experience",
    content: `\nIT Intern, Trident Ltd. (Sept 2024 – Mar 2025)\n- Developed face and body recognition apps using Python\n- Worked with Flask and Django\n- Optimized app efficiency and integrated advanced recognition features`,
  },
  {
    id: "projects",
    title: "Projects",
    content: `\nReal Estate Solutions\n- Auth with JWT, Firebase, Google\n- CRUD with MongoDB\n- Advanced search, UI/UX improvements\n\nExpense Tracker\n- MERN stack\n- Category filtering, graph view of expenses`,
  },
  {
    id: "skills",
    title: "Skills & Technologies",
    content: `\nLanguages: JavaScript, Java, HTML, CSS, SQL\nFrameworks & Tools: React, Node.js, Express.js, MongoDB, Firebase, Flask, Django\nSoft Skills: Problem-solving, Teamwork, Communication, Adaptability`,
  },
];

export default function App() {
  useEffect(() => {
    document.title = "Tanush Angrish | Resume";
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Tanush Angrish</h1>
          <p className="text-sm text-gray-600">Aspiring Full-Stack Developer</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        {sections.map((section, i) => (
          <motion.section
            key={section.id}
            className="my-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b border-blue-200 pb-1">
              {section.title}
            </h2>
            <div className="whitespace-pre-line leading-relaxed">{section.content}</div>
          </motion.section>
        ))}
      </main>

      <footer className="bg-white border-t p-4 text-center text-sm text-gray-500">
        <div className="flex justify-center gap-6 mb-2">
          <a href="mailto:tanushangrish1@gmail.com" className="hover:text-blue-600"><FaEnvelope /></a>
          <a href="tel:+917710341386" className="hover:text-blue-600"><FaPhone /></a>
          <a href="https://www.linkedin.com/in/tanush-angrish32/" target="_blank" className="hover:text-blue-600"><FaLinkedin /></a>
          <a href="https://github.com/Tanush-Angrish" target="_blank" className="hover:text-blue-600"><FaGithub /></a>
        </div>
        © {new Date().getFullYear()} Tanush Angrish. All rights reserved.
      </footer>
    </div>
  );
}
