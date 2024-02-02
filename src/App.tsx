import { useEffect, useRef, useState } from "react";
import {
  TiDocumentText,
  FaLinkedin,
  FaGithub,
  FaDocker,
  FaReact,
  SiGithubactions,
  SiNeovim,
  SiTailwindcss,
} from "./misc/icons";
import clsx from "clsx";

const navObjects = [
  {
    id: "about",
    linkText: "About",
    text: "about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about",
  },
  {
    id: "technicalskills",
    linkText: "Technical skills",
    text: "techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills techincal skills",
  },
  {
    id: "experience",
    linkText: "Experience",
    text: "experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience experience",
  },
  {
    id: "projects",
    linkText: "Projects",
    text: "projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects projects",
  },
];

function Scroll() {
  const [id, setId] = useState(navObjects[0].id);
  const testRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    console.log("hello");
    if (testRef.current === null) return;
    const scrollPos = testRef.current.scrollTop;
    const firstElementTop = testRef.current.children[0].offsetTop;
    for (const child of testRef.current.children) {
      if (
        scrollPos >= child.offsetTop - firstElementTop &&
        scrollPos < child.clientHeight + child.offsetTop - firstElementTop
      ) {
        setId(child.id);
        return;
      }
    }
  };

  const handleClick = (e) => {
    console.log(e.target.id);
    setId(e.target.id);
    // e.preventDefault();
  };

  return (
    <div className="flex-grow basis-0 flex flex-col overflow-hidden">
      <div className="flex justify-between gap-2 md:gap-4 lg:gap-8 py-4 text-white">
        {navObjects.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            className={clsx(
              "hover:text-white",
              id === nav.id ? "text-white" : "text-white/10",
            )}
            onClick={handleClick}
          >
            {nav.linkText}
          </a>
        ))}
      </div>
      <div
        onScroll={handleScroll}
        className="pb-10 overflow-scroll flex-grow no-scrollbar space-y-10"
        ref={testRef}
      >
        {navObjects.map((nav) => (
          <p key={nav.id} id={nav.id}>
            {nav.text}
          </p>
        ))}
        <div className="text-sm">
          <p className="text-white/30">
            Coded using NeoVim{" "}
            <span className="inline-block">
              <SiNeovim />
            </span>{" "}
            . Built with React{" "}
            <span className="inline-block">
              <FaReact
                className="stroke-red-400"
                style={{ fill: "white", opacity: 10 }}
              />
            </span>{" "}
            and Tailwind CSS{" "}
            <span className="inline-block">
              <SiTailwindcss />
            </span>{" "}
            , deployed in a Docker container{" "}
            <span className="inline-block">
              <FaDocker />
            </span>{" "}
            on a Linode server using Github actions.{" "}
            <span className="inline-block">
              <SiGithubactions />
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between items-center md:py-2 px-[1px] opacity-40">
      <div className="flex items-center gap-4 text-2xl">
        <a href="#" className="hover:opacity-40">
          <TiDocumentText />
        </a>
        <a
          href="https://www.github.com/Lewisjohnward"
          target="_blank"
          className="hover:opacity-40"
        >
          <FaGithub style={{ fill: "white" }} />
        </a>
        <a
          href="https://www.linkedin.com"
          className="hover:opacity-40"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

// function Navbar() {
//   return (
//     <div className="flex justify-between gap-2 md:gap-4 lg:gap-8 py-4 text-white">
//       <a href="#about">About</a>
//       <a href="#technical-skills" className="text-white/10 hover:text-white">
//         Technical skills
//       </a>
//       <a href="#experience" className="text-white/10 hover:text-white">
//         Experience
//       </a>
//       <a href="#projects" className="text-white/10 hover:text-white">
//         Projects
//       </a>
//     </div>
//   );
// }
function Name() {
  return (
    <div className="md:flex-grow basis-0 flex flex-col space-y-2">
      <div>
        <h1 className="text-4xl md:text-6xl leading-none">Lewis Ward</h1>
        <h2 className="px-2 text-sm text-white/50">
          Lead Engineer at my bedroom
        </h2>
      </div>
      <Header />
      <p className="text-white/50">
        I build pixel-perfect, engaging, and accessible digital experiences I
        build pixel-perfect, engaging, and accessible digital experiences I
        build pixel-perfect, engaging, and accessible digital experiences I
        build pixel-perfect, engaging, and accessible digital experiences I
        build pixel-perfect, engaging, and accessible digital experiences
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="text-sm md:text-base h-[100dvh] flex flex-col max-w-6xl m-auto px-4 py-2">
      {/* <Header /> */}
      <div className="px-[1px] mt-3 md:mt-0 md:px-0 md:overflow-hidden flex-grow flex flex-col md:justify-start md:flex-row">
        <Name />
        <Scroll />
      </div>
    </div>
  );
}

export default App;
