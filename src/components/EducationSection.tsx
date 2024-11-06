import { motion } from 'framer-motion'

export default function EducationSection() {
  const courses = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Software Engineering",
    "Web Programming",
    "Database Management",
    "Computer Networks",
    "Data Analysis"
  ]

  const certifications = [
    { name: "Compentency Certificate Programming Fundamental", provider: "Arutala Lab", link: "#" },
    { name: "Entry Level Fullstack Developer using Laravel", provider: "Arutala Lab", link: "#" },
    { name: "Front End using React JS", provider: "Arutala Lab", link: "#" }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-xl font-semibold">Bachelor's degree in Computer Science</h3>
        <p className="text-gray-600">Sekolah Tinggi Teknologi Payakumbuh</p>
        <p className="text-gray-500">Expected 2025</p>
        <p className="font-semibold mt-2">GPA: 3.54/4.00</p>
        <h4 className="text-lg font-semibold mt-4 mb-2">Relevant Coursework:</h4>
        <ul className="list-disc list-inside grid grid-cols-2 gap-2">
          {courses.map((course, index) => (
            <li key={index} className="text-gray-700">{course}</li>
          ))}
        </ul>
      </motion.div>

      <h3 className="text-xl font-semibold mb-4">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h4 className="font-semibold mb-2">{cert.name}</h4>
            <p className="text-gray-600 mb-2">{cert.provider}</p>
            <a href={cert.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Leadership</h3>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="font-semibold">Head of the Education Division in HIMA INFORMATIKA STTPAYAKUMBUH 2023/2024</h4>
          <p className="text-gray-700 mt-2">
            Responsible for overseeing the development and implementation of educational programs and initiatives aimed at
            enhancing the academic experience of members. Led to increase in soft-skills such as communication, leadership,
            problem-solving, and decision making and technical skills in Microsoft Office such as Microsoft Word, Microsoft
            Excel, and Microsoft PowerPoint.
          </p>
        </motion.div>
      </div>
    </div>
  )
}