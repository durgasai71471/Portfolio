import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

// const resumeUrl = "/public/Durga_CV.pdf";

export const Hero = () => {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/Durga_CV.pdf");
      if (!response.ok) throw new Error("File not found");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Durga_CV.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Durgsai Kota
            </h1>

            <div className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-12">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Java Developer",
                  2000,
                  "ServiceNow System Administrator",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              "Enthusiastic about building user-friendly applications with a
              focus on problem-solving. As a beginner in software development, I
              have worked on cool projects in MERN Stack development."
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={handleDownloadResume}
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl cursor-pointer active:scale-95 relative z-10"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer text-lg font-semibold"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-2xl"></div>
              <img
                src="https://mobile.technicalhub.io:5010/student/23A95A1201.png"
                alt="Profile"
                className="rounded-full w-full h-full object-cover shadow-2xl ring-4 ring-blue-600/20"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
