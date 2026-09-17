import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaReact, FaJava, FaBriefcase, FaGraduationCap, FaTrophy, FaCloud, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpring, SiPostgresql, SiMysql, SiApachekafka } from 'react-icons/si';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Pill Navigation
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

  const projects = [
    {
      title: "NexusHR – HR Management System",
      desc: "Developed an HR management system using Spring Boot microservices architecture. Implemented services for employee management, payroll, performance, recruitment, and notifications. Used Apache Kafka for event-based communication.",
      tech: ["Java 21", "Spring Boot", "PostgreSQL", "Kafka", "Microservices", "Docker"],
    },
    {
      title: "Hotel Management System",
      desc: "Developed REST APIs for hotel booking, room management, and user operations. Implemented authentication and authorization using Spring Security. Tested and debugged APIs using Postman.",
      tech: ["Java", "Spring Boot", "MySQL", "Spring Security", "REST APIs", "AWS"],
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-50 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      
      {/* Background Blobs */}
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] opacity-20"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] opacity-20"></div>

      {/* Floating Navbar */}
      <header className="z-[999] relative">
        <motion.div 
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/10 bg-white/10 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950/75 dark:border-black/40"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
        
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {navItems.map((item, idx) => (
              <motion.li 
                key={item} 
                className="h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`flex w-full items-center justify-center px-3 py-3 hover:text-white transition ${activeSection === item.toLowerCase() ? 'text-white' : ''}`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.span 
                      layoutId="activeSection"
                      className="bg-white/10 rounded-full absolute inset-0 -z-10"
                    ></motion.span>
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center px-4 md:px-12 w-full max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-10 w-full scroll-mt-[100rem]">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-6xl font-bold leading-[1.2]">
                <span className="font-medium text-slate-300">Hello, I'm </span><br/>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">Nitesh Suryavanshi.</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-slate-200">
                I'm a <span className="font-bold underline decoration-purple-500">Software Engineer</span>.
              </h2>
              <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0">
                Java — Spring Boot — REST APIs — Cloud & DevOps<br/>
                Based in Bhopal, India, I specialize in building scalable, reliable, and user-focused backend solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#contact" className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full font-medium hover:scale-105 transition">
                  Contact me here
                  <FaEnvelope className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-white/10 p-4 text-white flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-white hover:bg-white/20 transition">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-white/10 p-4 text-white flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-white hover:bg-white/20 transition">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-[100px]"></div>
              <div className="bg-[#1e1e24] p-8 rounded-2xl border border-white/10 shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-sm font-mono leading-loose">
                  <span className="text-pink-400">const</span> <span className="text-blue-400">engineer</span> <span className="text-white">=</span> {'{'}
                  <br/>
                  {'  '}name: <span className="text-green-300">'Nitesh Suryavanshi'</span>,
                  <br/>
                  {'  '}role: <span className="text-green-300">'Software Engineer'</span>,
                  <br/>
                  {'  '}skills: {'['}
                  <br/>
                  {'    '}<span className="text-green-300">'Java & Python'</span>,
                  <br/>
                  {'    '}<span className="text-green-300">'Spring Boot / Microservices'</span>,
                  <br/>
                  {'    '}<span className="text-green-300">'Docker, Kubernetes & CI/CD'</span>,
                  <br/>
                  {'    '}<span className="text-green-300">'AWS & DevOps'</span>,
                  <br/>
                  {'    '}<span className="text-green-300">'SQL (MySQL, PostgreSQL)'</span>
                  <br/>
                  {'  '}],
                  <br/>
                  {'  '}status: <span className="text-orange-400">'Ready for new challenges'</span>
                  <br/>
                  {'};'}
                </pre>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/20 my-12 h-16 w-1 rounded-full hidden sm:block"
        ></motion.div>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 w-full max-w-[45rem] text-center scroll-mt-28">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold capitalize mb-8 text-center">About me</h2>
            <p className="mb-3 text-lg text-slate-300 leading-relaxed">
              I am an aspiring <span className="font-bold text-white">Software Engineer</span> with strong foundations in Java, Data Structures and Algorithms, REST APIs, SQL, and DevOps.
              <span className="italic"> My passion</span> lies in backend application development and cloud infrastructure.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I have hands-on experience with <span className="font-bold text-white">Spring Boot, Docker, AWS, Kubernetes,</span> and building scalable microservices architectures. 
              I am driven by a strong interest in developing, containerizing, and deploying reliable software solutions.
            </p>
          </motion.div>
        </section>

        {/* EXPERIENCE & EDUCATION TIMELINE */}
        <section id="experience" className="py-20 w-full max-w-4xl scroll-mt-28">
          <h2 className="text-4xl font-bold capitalize mb-12 text-center">Experience & Education</h2>
          <div className="relative border-l border-white/20 ml-3 md:ml-0 md:pl-0">
            
            {/* Experience 1 */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-10 ml-8 relative">
              <span className="absolute -left-[2.4rem] bg-gray-900 border border-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                <FaBriefcase className="text-blue-400" />
              </span>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white">Intern</h3>
                <h4 className="text-blue-400 font-medium mb-4">MPOnline Limited • Oct 2025 – Mar 2026</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Built and enhanced RESTful APIs using ASP.NET for scalable web applications.</li>
                  <li>Worked with SQL databases for data handling and query optimization.</li>
                  <li>Performed software testing, debugging, and troubleshooting to improve reliability.</li>
                  <li>Assisted with API integration, deployment, and backend development activities.</li>
                  <li>Used Git for version control in an agile environment.</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Education 1 */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-10 ml-8 relative">
              <span className="absolute -left-[2.4rem] bg-gray-900 border border-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-purple-400" />
              </span>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white">Bachelor of Technology (CSE)</h3>
                <h4 className="text-purple-400 font-medium mb-2">Barkatullah University • 2021 – 2025</h4>
                <p className="text-slate-300 font-medium">CGPA: 7.72/10.0</p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-10 ml-8 relative">
              <span className="absolute -left-[2.4rem] bg-gray-900 border border-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                <FaTrophy className="text-yellow-400" />
              </span>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">Achievements & Certifications</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Cleared TCS NQT/NPT assessment.</li>
                  <li>Solved 200+ Data Structures and Algorithms problems on LeetCode.</li>
                  <li>AWS Academy Cloud Foundations Certification.</li>
                  <li>YUVA AI For All – TCS iON (IndiaAI).</li>
                  <li>Data Structures and Algorithms Training – Apna College.</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 w-full scroll-mt-28">
          <h2 className="text-4xl font-bold capitalize mb-12 text-center">My Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            
            {projects.map((project, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition flex flex-col h-full">
                <div className="p-8 flex flex-col flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="bg-black/50 text-white/80 px-3 py-1 text-xs rounded-full uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 w-full max-w-7xl scroll-mt-28">
          <h2 className="text-4xl font-bold capitalize mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Backend & Core */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaServer className="text-green-500 text-3xl" />
                <h3 className="text-2xl font-semibold">Backend</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'Java / Python', val: 90 },
                  { name: 'Spring Boot / MVC', val: 85 },
                  { name: 'REST APIs & Microservices', val: 85 },
                  { name: 'Data Structures & OOP', val: 80 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 text-slate-300">
                      <span>{skill.name}</span>
                      <span>{skill.val}%</span>
                    </div>
                    <div className="w-full bg-black/50 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.val}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-green-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaCloud className="text-orange-500 text-3xl" />
                <h3 className="text-2xl font-semibold">Cloud & DevOps</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'AWS & Cloud Computing', val: 85 },
                  { name: 'Docker & Kubernetes', val: 80 },
                  { name: 'CI/CD Pipelines', val: 80 },
                  { name: 'Git & Version Control', val: 90 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 text-slate-300">
                      <span>{skill.name}</span>
                      <span>{skill.val}%</span>
                    </div>
                    <div className="w-full bg-black/50 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.val}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-orange-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Database & Frontend */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaDatabase className="text-blue-500 text-3xl" />
                <h3 className="text-2xl font-semibold">Database & Tools</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'MySQL / PostgreSQL', val: 85 },
                  { name: 'Postman & API Testing', val: 85 },
                  { name: 'React / HTML5 / CSS3', val: 75 },
                  { name: 'JavaScript', val: 80 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 text-slate-300">
                      <span>{skill.name}</span>
                      <span>{skill.val}%</span>
                    </div>
                    <div className="w-full bg-black/50 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.val}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-blue-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 w-full text-center max-w-2xl scroll-mt-28">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-slate-400 text-lg mb-4">
              I am currently looking for new opportunities as a Software Engineer.
            </p>
            <p className="text-slate-400 mb-10">
              📞 +91 9893697613<br/>
              📍 Bhopal, India
            </p>
            <a href="mailto:niteshsuryavanshi989@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:scale-105 transition-transform">
              <FaEnvelope /> niteshsuryavanshi989@gmail.com
            </a>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-white/10 mt-10">
        <p>&copy; {new Date().getFullYear()} Nitesh Suryavanshi. Built with React, Tailwind & Framer Motion.</p>
      </footer>
    </div>
  );
}
