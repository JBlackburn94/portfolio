export default function Home() {
  return (
    <main className="h-screen pt-16">
      <section className="flex flex-col justify-center items-center h-screen animate-fade animate-duration-1000 animate-ease-in">
        <h1 className="font-bold text-6xl uppercase">
          Hey, I'm Jason Blackburn!
        </h1>
        <p className="mt-16 w-1/2 text-center">
          A Frontend Developer comfortable based in London UK. Knowledgeable in
          user interface design and production, testing and debugging, database
          creation and management. I am proficient in an assortment of
          technologies including HTML, CSS, JavaScript, React, Next.js,
          TailwindCSS.
        </p>
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
      <section id="portfolio" className="h-screen bg-gray-400">
        <h1>Portfolio section</h1>
      </section>
      <section id="contact" className="h-screen bg-gray-200">
        <h1>Contact section</h1>
      </section>
    </main>
  );
}
