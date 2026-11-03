import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaReact, FaJava, FaBriefcase, FaGraduationCap, FaTrophy, FaCloud, FaDocker, FaAws, FaDownload } from 'react-icons/fa';
import { SiSpring, SiPostgresql, SiMysql, SiApachekafka, SiLeetcode } from 'react-icons/si';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Pill Navigation
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

  const projects = [
    {
      title: "Field Service & Network Incident Management",
      subtitle: "Enterprise Telecom & Incident Dispatch Platform",
      image: "/fieldservice-preview.png",
      desc: "Architected a full-stack enterprise incident management system. Implemented a strict lifecycle state machine, real-time SLA breach alerting, technician workload balancing with pessimistic database row locking, on-site service visit logging, and an immutable audit timeline.",
      tech: ["Java 21", "Spring Boot 4", "React 19", "PostgreSQL", "Docker", "Tailwind CSS", "JWT", "Caffeine"],
      github: "https://github.com/Nsurya1/field_service",
      live: "https://field-service-system-beige.vercel.app/",
    },
    {
      title: "PayWallet — Digital Wallet & Ledger Engine",
      subtitle: "High-Throughput Financial Ledger & Saga Engine",
      image: "/paywallet-preview.png",
      desc: "Engineered a high-concurrency digital wallet and append-only double-entry bookkeeping engine ensuring zero balance drift. Built dual-strategy concurrency control (Pessimistic vs. Optimistic with jitter), Redis + PostgreSQL distributed idempotency, and transactional outbox event publishing via Kafka.",
      tech: ["Java 21", "Spring Boot 3.3", "React 18", "PostgreSQL 16", "Redis 7", "Apache Kafka", "Docker", "Tailwind CSS"],
      github: "https://github.com/Nsurya1/paywallet",
      live: "https://paywallet-eosin.vercel.app/",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-50 font-sans selection:bg-purple-500/30 overflow-x-hidden relative w-full">
      
      {/* Background Blobs */}
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-0 sm:right-[11rem] h-[31.25rem] w-full sm:w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] opacity-20 overflow-hidden pointer-events-none"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-0 sm:left-[-35rem] h-[31.25rem] w-full sm:w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] opacity-20 overflow-hidden pointer-events-none"></div>

      {/* Floating Navbar */}
      <header className="z-[999] relative">
        <motion.div 
          className="fixed top-0 left-1/2 h-[4.5rem] sm:h-[3.25rem] w-full sm:w-[38rem] rounded-none sm:rounded-full border border-white/10 bg-white/10 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 dark:bg-gray-950/75 dark:border-black/40"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
        
        <nav className="flex fixed top-[0.15rem] sm:top-[1.7rem] left-1/2 h-[4.5rem] sm:h-[initial] -translate-x-1/2 py-2 sm:py-0 w-full sm:w-[initial] items-center justify-center">
          <ul className="flex w-full max-w-[22rem] sm:w-[initial] flex-wrap items-center justify-center gap-y-1 sm:gap-y-0 gap-x-1 sm:gap-x-5 text-[0.8rem] sm:text-[0.9rem] font-medium text-gray-400 sm:flex-nowrap px-2 sm:px-0">
            {navItems.map((item, idx) => (
              <motion.li 
                key={item} 
                className="h-8 sm:h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`flex w-full items-center justify-center px-2 py-1 sm:px-3 sm:py-3 hover:text-white transition ${activeSection === item.toLowerCase() ? 'text-white' : ''}`}
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

      <main className="flex flex-col items-center px-4 md:px-12 w-full max-w-7xl mx-auto mt-8 sm:mt-0">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-32 pb-10 sm:pt-28 w-full scroll-mt-[100rem]">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 125, delay: 0.2, duration: 0.7 }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Nitesh Suryavanshi Profile" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white/10 shadow-2xl object-cover mb-2 sm:mb-4"
                />
              </motion.div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.3] sm:leading-[1.2]">
                <span className="font-medium text-slate-300">Hello, I'm </span><br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold break-words">Nitesh Suryavanshi.</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200">
                I'm a <span className="font-bold underline decoration-purple-500">Java Full Stack Engineer</span>.
              </h2>
              <p className="text-base sm:text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
                Java — Spring Boot — React — DevOps<br className="hidden sm:block"/>
                Based in Bhopal, India, I specialize in building scalable, reliable, and user-focused enterprise solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                <a href="#contact" className="w-full sm:w-auto group bg-white text-gray-900 px-7 py-3 flex items-center justify-center gap-2 rounded-full font-medium hover:scale-105 transition active:scale-95">
                  Contact me here
                  <FaEnvelope className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
                <a href="/resume.pdf" download="Nitesh_Suryavanshi_Resume.pdf" className="w-full sm:w-auto group bg-white/10 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full font-medium hover:bg-white/20 hover:scale-105 transition active:scale-95 border border-white/10">
                  Download CV
                  <FaDownload className="opacity-70 group-hover:translate-y-1 transition" />
                </a>
                <div className="flex gap-4">
                  <a href="https://github.com/Nsurya1/" target="_blank" rel="noreferrer" className="bg-white/10 p-4 text-white flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-white hover:bg-white/20 transition active:scale-95">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/nitesh-suryavanshi-664b94228/" target="_blank" rel="noreferrer" className="bg-white/10 p-4 text-white flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-white hover:bg-white/20 transition active:scale-95">
                    <FaLinkedin size={20} />
                  </a>
                   <a href="https://leetcode.com/u/Niteshsuryavanshi981/" target="_blank" rel="noreferrer" className="bg-white/10 p-4 text-white flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-white hover:bg-white/20 transition active:scale-95">
                    <SiLeetcode size={20} />
                  </a>
                </div>
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
                  {'  '}role: <span className="text-green-300">'Java Full Stack Engineer'</span>,
                  <br/>
                  {'  '}skills: {'['}
                  <br/>
                  {'    '}<span className="text-green-300">'Java, Python & JavaScript'</span>,
                  <br/>
                  {'    '}<span className="text-green-300">'Spring Boot & React'</span>,
                  <br/>
                  {'    '}<span className="text-green-300">'Docker, Kubernetes & CI/CD'</span>,
                  <br/>
                  {'    '}<span className="text-green-300">'AWS EC2 & DevOps'</span>,
                  <br/>
                  {'    '}<span className="text-green-300">'PostgreSQL, MySQL & Redis'</span>
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
        <section id="about" className="py-16 sm:py-20 w-full max-w-[45rem] text-center scroll-mt-28">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold capitalize mb-8 text-center">About me</h2>
            <p className="mb-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              I am a Computer Science graduate with internship experience in <span className="font-bold text-white">Java Full-Stack</span> and software development. 
              Strong in Java, DSA, REST APIs, SQL, and Object-Oriented Programming.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I have hands-on experience with <span className="font-bold text-white">Spring Boot, Spring Security, React, Docker, and Git.</span> 
              I am highly experienced in backend development, API integration, debugging, and database operations, and I enjoy building scalable, robust software solutions.
            </p>
          </motion.div>
        </section>

        {/* EXPERIENCE & EDUCATION TIMELINE */}
        <section id="experience" className="py-16 sm:py-20 w-full max-w-4xl scroll-mt-28 overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-bold capitalize mb-12 text-center">Experience & Education</h2>
          <div className="relative border-l border-white/20 ml-4 sm:ml-6 md:ml-0 md:pl-0">
            
            {/* Experience 1 */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-10 ml-6 sm:ml-8 relative">
              <span className="absolute -left-[2.4rem] sm:-left-[2.9rem] bg-gray-900 border border-white/20 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-blue-400" />
              </span>
              <div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors">
                <h3 className="text-lg sm:text-xl font-bold text-white">Java Full Stack Intern</h3>
                <h4 className="text-blue-400 text-sm sm:text-base font-medium mb-4">AMDOX Technologies, Bengaluru • Jun 2026 – Aug 2026</h4>
                <ul className="list-disc list-outside ml-4 text-sm sm:text-base text-slate-300 space-y-2">
                  <li>Completed a Java Full Stack internship with practical exposure to software development and application workflows.</li>
                  <li>Worked on assigned Java development tasks and gained practical understanding of application functionality.</li>
                  <li>Collaborated closely with the development team and applied problem-solving skills to assigned tasks.</li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-10 ml-6 sm:ml-8 relative">
              <span className="absolute -left-[2.4rem] sm:-left-[2.9rem] bg-gray-900 border border-white/20 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-blue-400" />
              </span>
              <div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors">
                <h3 className="text-lg sm:text-xl font-bold text-white">Software Development Intern</h3>
                <h4 className="text-blue-400 text-sm sm:text-base font-medium mb-4">MPOnline Limited, Bhopal • Oct 2025 – Mar 2026</h4>
                <ul className="list-disc list-outside ml-4 text-sm sm:text-base text-slate-300 space-y-2">
                  <li>Worked on web applications using ASP.NET and SQL.</li>
                  <li>Worked with backend functionality, database operations, REST API integration, and troubleshooting.</li>
                  <li>Performed debugging and issue analysis to identify and resolve application problems.</li>
                  <li>Assisted with API integration and verified application functionality after fixes.</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Education 1 */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-10 ml-6 sm:ml-8 relative">
              <span className="absolute -left-[2.4rem] sm:-left-[2.9rem] bg-gray-900 border border-white/20 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-purple-400" />
              </span>
              <div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors">
                <h3 className="text-lg sm:text-xl font-bold text-white">Bachelor of Technology (CSE)</h3>
                <h4 className="text-purple-400 text-sm sm:text-base font-medium mb-2">Barkatullah University, Bhopal • 2021 – 2025</h4>
                <p className="text-sm sm:text-base text-slate-300 font-medium">CGPA: 7.72/10.0</p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-10 ml-6 sm:ml-8 relative">
              <span className="absolute -left-[2.4rem] sm:-left-[2.9rem] bg-gray-900 border border-white/20 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <FaTrophy className="text-yellow-400" />
              </span>
              <div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Achievements & Certifications</h3>
                <ul className="list-disc list-outside ml-4 text-sm sm:text-base text-slate-300 space-y-2">
                  <li>Cleared TCS NQT/NPT Assessment.</li>
                  <li>Solved 200+ DSA problems on LeetCode.</li>
                  <li>AWS Academy – Cloud Foundations Certification.</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-16 sm:py-20 w-full scroll-mt-28">
          <h2 className="text-3xl sm:text-4xl font-bold capitalize mb-4 text-center">Featured Projects</h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12 text-sm sm:text-base">
            Enterprise systems engineered with high concurrency, strict consistency, and modern full-stack architectures.
          </p>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            
            {projects.map((project, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex flex-col h-full shadow-2xl"
              >
                {/* Project Image Preview with Live Link */}
                {project.image && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="relative block w-full h-52 sm:h-64 overflow-hidden bg-black/40 border-b border-white/10 group/img"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-slate-300 flex items-center gap-1.5 opacity-90 group-hover/img:text-white transition-colors">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Live App</span>
                    </div>
                  </a>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div>
                    {project.subtitle && (
                      <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase mb-2 inline-block">
                        {project.subtitle}
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="bg-black/40 text-slate-300 border border-white/5 px-3 py-1 text-xs rounded-full uppercase tracking-wider font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions: GitHub & Live Demo */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition active:scale-95 border border-white/10 hover:border-white/20"
                      >
                        <FaGithub size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-medium transition active:scale-95 shadow-lg shadow-purple-500/20"
                      >
                        <FaExternalLinkAlt size={13} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-16 sm:py-20 w-full max-w-7xl scroll-mt-28">
          <h2 className="text-3xl sm:text-4xl font-bold capitalize mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Backend & Core */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaServer className="text-green-500 text-2xl sm:text-3xl" />
                <h3 className="text-xl sm:text-2xl font-semibold">Backend & Core</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'Java / Python / JS', val: 90 },
                  { name: 'Spring Boot & Spring MVC', val: 85 },
                  { name: 'REST APIs & Security', val: 85 },
                  { name: 'Data Structures & OOP', val: 80 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs sm:text-sm mb-2 text-slate-300">
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
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaCloud className="text-orange-500 text-2xl sm:text-3xl" />
                <h3 className="text-xl sm:text-2xl font-semibold">Cloud & DevOps</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'AWS (EC2 & Cloud)', val: 85 },
                  { name: 'Docker & Kubernetes', val: 80 },
                  { name: 'CI/CD & GitHub Actions', val: 80 },
                  { name: 'Linux OS & Networking', val: 75 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs sm:text-sm mb-2 text-slate-300">
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
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaDatabase className="text-blue-500 text-2xl sm:text-3xl" />
                <h3 className="text-xl sm:text-2xl font-semibold">Database & Frontend</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'PostgreSQL / MySQL / SQL', val: 85 },
                  { name: 'React / HTML5 / CSS3', val: 80 },
                  { name: 'Postman & Git / GitHub', val: 90 },
                  { name: 'Maven', val: 85 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs sm:text-sm mb-2 text-slate-300">
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
        <section id="contact" className="py-20 w-full text-center max-w-2xl scroll-mt-28">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-slate-400 text-base sm:text-lg mb-4 px-4">
              I am currently looking for new opportunities as a Software Engineer.
            </p>
            <p className="text-slate-400 mb-8 sm:mb-10 text-sm sm:text-base">
              📞 +91 9893697613<br/>
              📍 Bhopal, India
            </p>
            <a href="mailto:niteshsuryavanshi989@gmail.com" className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 font-medium rounded-full hover:scale-105 transition-transform text-sm sm:text-base mx-4">
              <FaEnvelope className="text-lg" /> niteshsuryavanshi989@gmail.com
            </a>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 sm:py-8 text-slate-500 text-xs sm:text-sm border-t border-white/10 mt-6 sm:mt-10">
        <p className="px-4">&copy; {new Date().getFullYear()} Nitesh Suryavanshi. Built with React, Tailwind & Framer Motion.</p>
      </footer>
    </div>
  );
}
