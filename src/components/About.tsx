import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-lg text-muted-foreground"
        >
          <p>
            I'm a Web Developer currently working at Webotist Technologies Ltd in the United Kingdom.
            With a strong foundation in both frontend and backend development, I specialize in
            creating responsive and user-friendly web applications.
          </p>
          <p>
            Currently pursuing my BSCS at the University of Lahore, I combine academic knowledge
            with practical experience in modern web technologies and artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
              <ul className="space-y-2">
                <li>BSCS - University of Lahore (2020-2024)</li>
                <li>CS50X - Harvard University</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Contact</h3>
              <ul className="space-y-2">
                <li>Email: sikandarsubhani37@gmail.com</li>
                <li>Phone: (+92) 3054090834</li>
                <li>Website: webotist.com</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};