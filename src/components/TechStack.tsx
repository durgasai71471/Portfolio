import { motion } from 'framer-motion';

export const TechStack = () => {
  const technologies = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'java', category: 'Programming Language' },
    { name: 'C++', category: 'Programming Language' },
    // { name: 'AWS', category: 'Cloud' },
    // { name: 'Docker', category: 'DevOps' },
    // { name: 'GraphQL', category: 'API' },
    // { name: 'Tailwind CSS', category: 'Styling' },
  ];

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-300">Technologies I work with</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};