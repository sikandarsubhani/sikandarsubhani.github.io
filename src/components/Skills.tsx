import { motion } from "framer-motion";

const skillCategories = {
  "Frontend": {
    "Core": ["HTML", "CSS", "JavaScript", "React"],
    "Styling": ["Tailwind CSS", "Bootstrap"],
    "State Management": ["Redux", "Context API"],
    "Animation": ["Framer Motion"]
  },
  "Backend": {
    "Languages": ["Python", "Node.js"],
    "Frameworks": ["Flask", "Django", "Express"],
    "Database": ["SQLite", "MySQL", "PostgreSQL"],
    "ORM": ["SQLAlchemy", "Prisma"]
  },
  "Tools & Others": {
    "Version Control": ["Git", "GitHub"],
    "Testing": ["Pytest", "Unit Testing"],
    "Deployment": ["Linux", "VPS", "Vercel"],
    "AI/ML": ["TensorFlow", "Scikit-Learn"]
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, sections], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">{category}</h3>
              {Object.entries(sections).map(([section, skills]) => (
                <div key={section} className="space-y-2">
                  <h4 className="text-lg font-medium text-muted-foreground">{section}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary/50 px-3 py-1 rounded-full text-sm hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};