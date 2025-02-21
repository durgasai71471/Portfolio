import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      school: 'Aditya Engineering College',
      year: '2023-2026',
      description: 'Specialized in Information Technology',
      gpa: '7.2/10.0',
    },
    {
      degree: 'Diploma in Web Designing',
      school: 'St. Marys Group of Institutions',
      year: '2020-2023',
      description: 'Focus on Web development and software engineering',
      gpa: '8.2/10.0',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-300">Academic Background</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.school}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.year}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">GPA: {edu.gpa}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};