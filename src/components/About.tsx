import { motion } from 'framer-motion';
import { Code2, Database, Layout } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6" />,
      description: 'Expertise in React, TypeScript, and modern CSS frameworks',
    },
    {
      title: 'Backend Development',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Proficient in Node.js, Express, and RESTful APIs',
    },
    {
      title: 'Database Management',
      icon: <Database className="w-6 h-6" />,
      description: 'Experience with SQL and NoSQL databases',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            I'm a passionate Full Stack Developer with a love for creating beautiful and functional web applications.
            My journey in tech has equipped me with a diverse skill set and a problem-solving mindset.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};