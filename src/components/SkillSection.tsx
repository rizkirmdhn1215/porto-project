import { motion } from 'framer-motion'

export default function SkillSection() {
  const technicalSkills = ['Laravel', 'JavaScript', 'Database', 'Spring Framework', 'Microsoft Office', 'React.js']
  const softSkills = ['Analytics', 'Problem Solving', 'Critical Thinking', 'Decision making']

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
          <ul className="grid grid-cols-2 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.li
                key={skill}
                className="bg-white p-4 rounded-md shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
          <ul className="grid grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <motion.li
                key={skill}
                className="bg-white p-4 rounded-md shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}