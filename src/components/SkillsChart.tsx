import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsChartProps {
  skills: Skill[];
  getSkillColor: (category: string) => string;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills, getSkillColor }) => {
  // Agrupar skills por categoría
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryNames = {
    design: 'Diseño',
    dev: 'Desarrollo',
    game: 'Game Development',
    web: 'Tecnologías Web',
    ux: 'UX/UI',
    marketing: 'Marketing',
    management: 'Gestión',
    media: 'Multimedia'
  };

  return (
    <div className="space-y-8">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-300 border-b border-gray-600 pb-2">
            {categoryNames[category as keyof typeof categoryNames] || category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{skill.name}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (index * 0.1) + 0.5 }}
                    className="text-sm text-gray-400 font-medium"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full rounded-full h-2 bg-gray-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: (index * 0.1) + 0.3 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.category)} shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsChart;