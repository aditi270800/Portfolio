
const Skills = () => {
  const skillsData = [
    {
      name: "React JS",
      icon: "⚛️",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "React JSS",
      icon: "💅",
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "Redux",
      icon: "🔄",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "HTML5",
      icon: "🌐",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "CSS3",
      icon: "🎨",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Javascript",
      icon: "📜",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Typescript",
      icon: "📘",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Bootstrap",
      icon: "🅱️",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "TailwindCSS",
      icon: "🌊",
      color: "from-teal-400 to-teal-600",
    },
    {
      name: "Material UI",
      icon: "📦",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      name: "Git",
      icon: "🔧",
      color: "from-red-400 to-red-600",
    },
    {
      name: "npm",
      icon: "📦",
      color: "from-red-500 to-red-700",
    },
    {
      name: "VS Code",
      icon: "💻",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Postman",
      icon: "🚀",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "JIRA",
      icon: "📋",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Jest",
      icon: "🧪",
      color: "from-green-400 to-green-600",
    },
    {
      name: "React Testing Library",
      icon: "🔬",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Netlify",
      icon: "🌐",
      color: "from-teal-400 to-teal-600",
    },
  ];

  return (
    <div name="skills" className="w-full min-h-screen text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-full flex justify-center items-center flex-col">
            <p className="text-4xl font-bold inline border-b-4 text-[#d98b19] border-[#d98b19]">
              Skills
            </p>
          </div>
          <p className="text-xl text-gray-300 font-light">
            Technologies I work with and tools I use
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`skill-card group relative overflow-hidden rounded-2xl border border-gray-700 bg-[#343434] p-6 transition-all duration-500 transform cursor-pointer hover:scale-110 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-400/20`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg group-hover:text-orange-400 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex items-center flex-col p-6 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-400/30">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {skillsData.length}
              </div>
              <div className="text-gray-300">Technologies</div>
            </div>
            <div className="flex items-center flex-col p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="flex items-center flex-col p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-400/30">
              <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
              <div className="text-gray-300">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
