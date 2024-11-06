import { motion } from 'framer-motion'

const projects = [
  {
    name: "Android Application with Kotlin and Firebase Firestore",
    description: "Developed an Android application using Kotlin that integrates Firebase Firestore for data storage and retrieval. The app features a clean and intuitive user interface, allowing users to easily interact with data.",
    link: "#" // Replace with actual project link
  }
]

export default function ProjectSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Achievements</h3>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-700">
            Achieved Top 5 in a competitive national game design competition held by Indoneris in 2022, showcasing creativity and technical skills in game development.
          </p>
          <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </motion.div>
      </div>
    </div>
  )
}