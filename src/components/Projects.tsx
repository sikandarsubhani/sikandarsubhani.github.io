import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Skincare Recommendation System",
    description: "Developed a CNN for skin disease classification with 96% training and 97% validation accuracy using Keras, TensorFlow, and Flask.",
    tech: ["Python", "TensorFlow", "Flask", "CNN"],
  },
  {
    title: "LESCO AutoBill Reminder",
    description: "Automated bill retrieval system using Python, Selenium, and OCR for CAPTCHA solving with multi-account tracking.",
    tech: ["Python", "Selenium", "OCR", "Automation"],
  },
  {
    title: "Directory Synchronizer",
    description: "Python desktop application with Tkinter for real-time directory synchronization with progress tracking.",
    tech: ["Python", "Tkinter", "File System"],
  },
  {
    title: "Chess Console Game",
    description: "Interactive console-based chess game with turn-based gameplay and move validation.",
    tech: ["Python", "OOP", "Game Development"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-primary"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-lg bg-secondary/30 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};