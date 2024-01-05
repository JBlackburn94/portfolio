import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-start h-screen p-10 bg-gray-100 md:p-40"
    >
      <h2 className="text-2xl font-semibold text-center uppercase border-b-4 border-blue-600">
        About Me
      </h2>
      <div className="flex flex-col items-start justify-center mt-10 lg:flex-row">
        <div className="w-full h-full p-4 bg-gray-200 rounded-lg shadow-md lg:p-8 lg:w-1/2">
          <p className="text-md md:text-xl">
            I am a Frontend Developer based in London UK. Knowledgeable in user
            interface design and production, testing and debugging, database
            creation and management. I am proficient in an assortment of
            technologies including HTML, CSS, JavaScript, React, Next.js,
            TailwindCSS.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-start w-full h-full p-4 mt-4 bg-gray-200 rounded-lg shadow-md lg:mt-0 lg:ml-4 lg:w-1/2 lg:p-8">
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            HTML
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            CSS
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            JavaScript
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            React
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            Next.Js
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            TailwindCSS
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            Git
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            GitHub
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            Basic SQL
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            Responsive Design
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            Python
          </span>
          <span className="p-2 mx-2 my-1 text-white bg-blue-800 rounded md:mx-1">
            Jest
          </span>
        </div>
      </div>
      <div className="items-center justify-center hidden w-1/2 h-full p-8 m-8 bg-gray-200 rounded-lg shadow-md lg:flex">
        <FaLinkedin className="mx-8 text-blue-800" size={80} />
        <FaGithubSquare className="mx-8 text-blue-800" size={80} />
      </div>
    </section>
  );
}
