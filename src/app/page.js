import About from "./about/page";

export default function Home() {
  return (
    <main className="h-screen pt-16">
      <section
        className="flex flex-col items-center justify-center h-screen animate-fade animate-duration-1000 animate-ease-in"
        id="home"
      >
        <h1 className="text-4xl font-bold text-center uppercase md:text-6xl">
          Hey, I'm Jason Blackburn!
        </h1>
        <h2 className="mt-4 text-2xl font-semibold capitalize md:text-4xl">
          Frontend Developer
        </h2>
        <div className="flex items-center justify-center mt-4">
          <a
            href="#portfolio"
            className="p-4 m-4 font-semibold text-white duration-200 bg-blue-800 rounded-md hover:bg-blue-600"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="p-4 m-4 font-semibold text-white duration-200 bg-blue-800 rounded-md hover:bg-blue-600"
          >
            Contact
          </a>
        </div>
      </section>
      <About />

      <section id="portfolio" className="h-screen">
        <h1>Portfolio section</h1>
      </section>
      <section id="contact" className="h-screen bg-gray-100">
        <h1>Contact section</h1>
      </section>
    </main>
  );
}
