import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Home() {
  const headings = [
    {
      id: 1,
      title: "About Me",
    },
    {
      id: 1,
      title: "Portfolio",
    },
    {
      id: 1,
      title: "Contact",
    },
  ];
  return (
    <main className="h-screen pt-16">
      <section
        className="flex flex-col justify-center items-center h-screen animate-fade animate-duration-1000 animate-ease-in"
        id="home"
      >
        <h1 className="font-bold text-6xl uppercase">
          Hey, I'm Jason Blackburn!
        </h1>
        <div className="flex justify-center items-center mt-4">
          <a
            href="#portfolio"
            className="bg-blue-800 p-4 rounded-md text-white font-semibold m-4 hover:bg-blue-600 duration-200"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="bg-blue-800 p-4 rounded-md text-white font-semibold m-4 hover:bg-blue-600 duration-200"
          >
            Contact
          </a>
        </div>
      </section>
      <section
        id="about"
        className="h-screen bg-gray-100 flex flex-col justify-start items-center p-40"
      >
        <h2 className="font-semibold text-2xl uppercase border-b-4 border-blue-600">
          About Me
        </h2>
        <div className="mt-10 flex justify-center items-start">
          <div className="bg-gray-200 h-full w-1/2 p-8 rounded-lg shadow-md">
            <p className="text-xl">
              I am a Frontend Developer based in London UK. Knowledgeable in
              user interface design and production, testing and debugging,
              database creation and management. I am proficient in an assortment
              of technologies including HTML, CSS, JavaScript, React, Next.js,
              TailwindCSS.
            </p>
          </div>
          <div className="bg-gray-200 w-1/2 p-8 rounded-lg h-full shadow-md ml-4 flex flex-wrap items-center justify-start">
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">
              HTML
            </span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">CSS</span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">
              JavaScript
            </span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">
              React
            </span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">
              Next.Js
            </span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">
              TailwindCSS
            </span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">Git</span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">
              GitHub
            </span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">
              Basic SQL
            </span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">
              Responsive Design
            </span>
            <span className="mx-1 bg-blue-800 p-2 text-white rounded">
              Python
            </span>
          </div>
        </div>
        <div className="bg-gray-200 w-1/2 p-8 rounded-lg h-full shadow-md m-8 flex items-center justify-center">
          <FaLinkedin className="mx-8 text-blue-800" size={80} />
          <FaGithubSquare className="mx-8 text-blue-800" size={80} />
        </div>
      </section>
      <section id="portfolio" className="h-screen">
        <h1>Portfolio section</h1>
      </section>
      <section id="contact" className="h-screen bg-gray-100">
        <h1>Contact section</h1>
      </section>
    </main>
  );
}
