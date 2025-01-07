import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans relative">
      <Head>
        <title>Kashan | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Kashan, Full Stack Developer" />
      </Head>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-black to-gray-900 animate-gradient-flow"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black bg-opacity-90 shadow-md py-4">
          <nav className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-4xl font-extrabold text-teal-400 relative">
              Kashan
              <span className="absolute inset-0 border border-teal-400 rounded-full animate-pulse opacity-30"></span>
            </h1>
            <ul className="hidden md:flex space-x-6 text-lg">
              {["about", "skills", "projects", "contact"].map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    className="hover:text-teal-300 transition duration-300 relative group"
                    aria-label={`Navigate to ${section}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex justify-center items-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent opacity-20 animate-pulse"></div>
          <div className="relative z-10 flex items-center justify-between w-full px-6">
            <div className="flex-shrink-0 w-64 h-64 mr-16 animate-scale-in animate-delay-300">
              <img
                src="/pfp.jpg"
                alt="Kashan"
                className="w-full h-full rounded-full border-4 border-teal-500 shadow-lg object-cover ml-32"
              />
            </div>
            <div className="text-left max-w-xl animate-fade-in animate-delay-200">
              <h2 className="text-5xl font-extrabold mb-6">
                Welcome to My Portfolio
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Hi, I'm <span className="text-teal-400">Kashan</span>, a Full Stack Developer
                passionate about creating dynamic and efficient solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 bg-black relative overflow-hidden"
        >
          {/* Animated Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-teal-900 opacity-20 animate-gradient-move"
            style={{
              backgroundSize: "400% 400%",
            }}
          ></div>

          {/* Animated Pulsating Circles */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-900 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-600 rounded-full opacity-30 animate-pulse-slow"></div>

          {/* Content */}
          <div className="container mx-auto px-6 text-center relative z-10">
            <h3 className="text-4xl font-bold text-teal-400 mb-8">Skills</h3>
            <div className="flex flex-wrap justify-center gap-8 animate-fade-in animate-delay-300">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Next.js",
                "React.js",
                "C",
                "Graphic Design",
                "Node.js",
                "Python",
                "Git & GitHub",
                "Firebase",
                "Redux",
                "Responsive Design",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-900 text-teal-400 py-2 px-6 rounded-lg shadow-md hover:bg-teal-400 hover:text-black transition duration-300 border border-teal-500 hover:shadow-teal-400 transform hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-black">
          <div className="container mx-auto px-6 animate-slide-in-right">
            <h3 className="text-4xl font-bold text-teal-400 text-center mb-8">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Project 1",
                  description: "An innovative web development solution.",
                  imageUrl: "/p1.png",
                },
                {
                  title: "Project 2",
                  description: "A dynamic e-commerce platform.",
                  imageUrl: "/p2.avif",
                },
                {
                  title: "Project 3",
                  description: "A cutting-edge portfolio website.",
                  imageUrl: "/p3.jpg",
                },
                {
                  title: "Project 4",
                  description: "A modern blog application.",
                  imageUrl: "/p4.jpeg",
                },
                {
                  title: "Project 5",
                  description: "A powerful social media dashboard.",
                  imageUrl: "/p5.jpeg",
                },
                {
                  title: "Project 6",
                  description: "An AI-powered chatbot solution.",
                  imageUrl: "/p6.png",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="bg-gray-900 text-gray-300 p-6 rounded-lg shadow-md hover:shadow-teal-400 hover:scale-105 transition duration-300 transform hover:scale-105"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-bold text-lg text-teal-400 mb-2">{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-teal-800 to-black">
          <div className="container mx-auto px-6 text-center animate-fade-in">
            <h3 className="text-4xl font-bold text-teal-400 mb-4">Contact Me</h3>
            <p className="text-lg text-gray-300 mb-8">
              Reach out to me through email, LinkedIn, or WhatsApp. I'd love to connect!
            </p>
            <div className="flex justify-center items-center gap-8">
              <a
                href="mailto:kashanhamid786@gmail.com"
                className="text-teal-400 hover:text-white text-4xl transition-transform transform hover:scale-125 duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="animate-bounce" />
              </a>
              <a
                href="https://www.linkedin.com/in/kashan-hamid-8aa3242b4/"
                className="text-teal-400 hover:text-white text-4xl transition-transform transform hover:scale-125 duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="animate-spin-slow" />
              </a>
              <a
                href="https://wa.me/03062617874"
                className="text-teal-400 hover:text-white text-4xl transition-transform transform hover:scale-125 duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="animate-pulse" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-500 py-6 text-center relative">
          <div className="absolute inset-x-0 bottom-0 bg-teal-400 h-1 animate-gradient-flow"></div>
          <p>&copy; {new Date().getFullYear()} Kashan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
