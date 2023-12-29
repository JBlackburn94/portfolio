import navImage from "/Users/jasonblackburn/Desktop/Code/personal-site/portfolio/public/1627917717079.webp";
import Image from "next/image";

export default function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Skills",
      link: "#skills",
    },
    {
      id: 3,
      title: "Portfolio",
      link: "#portfolio",
    },
    {
      id: 4,
      title: "Contact",
      link: "#contact",
    },
  ];
  return (
    <nav className="flex justify-between items-center h-24 p-14 w-full fixed bg-gray-200">
      <div className="flex items-center">
        <Image
          src={navImage}
          alt="A profile image of Jason Blackburn"
          className="w-14 rounded-full mr-4"
          priority
        />
        <h1 className="font-semibold uppercase">Jason Blackburn</h1>
      </div>
      <ul className="hidden lg:flex">
        {links.map(({ id, title, link }) => (
          <li key={id} className="mx-4">
            <a href={link} className="font-semibold uppercase hover:underline">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
