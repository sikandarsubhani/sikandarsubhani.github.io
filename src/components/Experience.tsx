import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Webotist Technologies Ltd",
      period: "2022 - Present",
      description: "Developing responsive web applications using modern technologies like React, Next.js, and TypeScript.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc",
      period: "2021 - 2022",
      description: "Worked on various frontend projects and learned modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "React"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-primary"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="backdrop-blur-lg bg-secondary/30 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-primary mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
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