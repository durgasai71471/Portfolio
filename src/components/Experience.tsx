import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Technical Hub',
      location: 'Surampalem, AP',
      period: 'June 2024-July 2024',
      description: [
        'Led a team of 5 developers in building a Real time disaster alert platform',
        'Improved application performance by 40% through optimization',
        'Increased component reusability for scalability',
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    },
    // {
    //   title: 'Full Stack Developer',
    //   company: 'Digital Innovations',
    //   location: 'New York, NY',
    //   period: '2020 - 2022',
    //   description: [
    //     'Developed and maintained multiple client-facing web applications',
    //     'Integrated third-party APIs and payment gateways',
    //     'Mentored junior developers and conducted code reviews',
    //   ],
    //   technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
    // },
    // {
    //   title: 'Frontend Developer',
    //   company: 'Creative Web Agency',
    //   location: 'Boston, MA',
    //   period: '2018 - 2020',
    //   description: [
    //     'Built responsive web interfaces for various clients',
    //     'Implemented modern UI/UX design principles',
    //     'Collaborated with designers to create pixel-perfect layouts',
    //   ],
    //   technologies: ['React', 'TypeScript', 'SASS', 'Webpack'],
    // },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-300">My journey in the tech industry</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              )}

              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-3 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};