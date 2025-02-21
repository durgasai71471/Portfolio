import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      title: 'JavaScript Essentials 1',
      organization: 'Cisco',
      date: 'December 2024',
      credentialUrl: 'https://www.credly.com/badges/cd03e43d-7d2f-4d54-8c63-d88b83c28c57/public_url',
      category: 'Development',
    },
    {
      title: 'JavaScript Essentials 2',
      organization: 'Cisco',
      date: 'December 2024',
      credentialUrl: 'https://www.credly.com/badges/68dbca3a-d813-44d7-b5fc-dbe606326248/public_url',
      category: 'Development',
    },
    {
      title: 'Prompt Engineering and ChatGPT',
      organization: 'ExcelR',
      date: 'August 2024',
      credentialUrl: 'https://github.com/durgasai71471/Certificate',
      category: 'Development',
    },
    {
      title: 'CCNA:Introduction to Networks',
      organization: 'Cisco',
      date: 'August 2024',
      credentialUrl: 'https://www.credly.com/badges/d22af1a2-4126-404d-af92-b1817c8600e1/public_url',
      category: 'Networking',
    },
    {
      title: 'JavaScript (Basic)',
      organization: 'HackerRank',
      date: 'September 2024',
      credentialUrl: 'https://www.hackerrank.com/certificates/364592421981l',
      category: 'Development',
    },
    {
      title: 'Micro-Certification-Welcome to ServiceNow',
      organization: 'ServiceNow',
      date: 'February 2025',
      credentialUrl: 'https://github.com/durgasai71471/Certificate',
      
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-600 dark:text-gray-300">Professional certifications and achievements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.organization}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{cert.date}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm mb-4">
                    {cert.category}
                  </span>
                  <div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Verify Credential
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};