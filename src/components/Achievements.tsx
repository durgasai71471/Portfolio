import { motion } from 'framer-motion';
import { Award, Trophy, Medal } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: 'First Place - Global Hackathon',
      description: 'Won first place for developing an innovative AI-powered solution',
      icon: <Trophy className="w-6 h-6" />,
      date: '2024',
    },
    {
      title: 'Best Technical Innovation Award',
      description: 'Recognized for outstanding technical achievement in web development',
      icon: <Award className="w-6 h-6" />,
      date: '2023',
    },
    {
      title: 'Open Source Contributor',
      description: 'Major contributions to popular open-source projects',
      icon: <Medal className="w-6 h-6" />,
      date: '2023',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-600 dark:text-gray-300">Recognition and accomplishments</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="text-blue-600 dark:text-blue-400 mr-4">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{achievement.description}</p>
                <span className="text-sm text-blue-600 dark:text-blue-400">{achievement.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};