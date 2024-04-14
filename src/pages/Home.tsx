import { UIEvent, SyntheticEvent, useState } from "react";
import {
  TiDocumentText,
  FaLinkedin,
  FaGithub,
  FaDocker,
  FaReact,
  SiGithubactions,
  SiNeovim,
  SiTailwindcss,
} from "../misc/icons";
import clsx from "clsx";
import About from "../components/About";
import TechnicalSkills from "../components/TechnicalSkills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";

const navObjects = [
  {
    id: "about",
    linkText: "About",
    component: <About />,
  },
  {
    id: "technicalskills",
    linkText: "Technical skills",
    component: <TechnicalSkills />,
  },
  {
    id: "experience",
    linkText: "Experience",
    component: <Experience />,
  },
  {
    id: "projects",
    linkText: "Projects",
    component: <Projects />,
  },
];

function Scroll() {
  const [id, setId] = useState(navObjects[0].id);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget == null) return;
    const scrollPos = e.currentTarget.scrollTop;
    const firstElementTop = (e.currentTarget.children[0] as HTMLElement)
      .offsetTop;
    for (const child of e.currentTarget.children) {
      const offsetTop = (child as HTMLElement).offsetTop;
      if (
        scrollPos >= offsetTop - firstElementTop &&
        scrollPos < child.clientHeight + offsetTop - firstElementTop
      ) {
        setId(child.id);
        return;
      }
    }
  };

  function handleClick(e: SyntheticEvent<HTMLAnchorElement>) {
    return e;
    // console.log(e);
    // console.log(e.target.id);
    // setId(e.target.id);
    // e.preventDefault();
  }

  return (
    <div className="flex-grow basis-0 flex flex-col overflow-hidden">
      <div className="flex justify-between gap-2 md:gap-4 lg:gap-8 py-4 text-white">
        {navObjects.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            className={clsx(
              "hover:text-white",
              id === nav.id ? "text-white font-bold" : "text-white/10",
            )}
            onClick={handleClick}
          >
            {nav.linkText}
          </a>
        ))}
      </div>
      <div
        onScroll={handleScroll}
        className="overflow-scroll flex-grow no-scrollbar space-y-5"
        // ref={testRef}
      >
        {navObjects.map((nav) => (
          <div key={nav.id} id={nav.id} className="space-y-4">
            {nav.component}
          </div>
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
    <div className="flex justify-between items-center md:py-2 px-[1px]">
      <div className="flex items-center gap-2 md:gap-4 text-2xl">
        <a href="#" className="opacity-40 hover:opacity-100">
          <TiDocumentText />
        </a>
        <a
          href="https://www.github.com/Lewisjohnward"
          target="_blank"
          className="opacity-40 hover:opacity-100"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com"
          className="opacity-40 hover:opacity-100"
          target="https://www.linkedin.com/in/lewis-ward-42b757288/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
function Name() {
  return (
    <div className="basis-0 flex flex-col space-y-2">
      <div>
        <h1 className="text-4xl md:text-6xl leading-none">Lewis Ward</h1>
        <h2 className="px-2 text-sm text-white/50">Full stack engineer</h2>
      </div>
      <Header />
    </div>
  );
}

export function Home() {
  return (
    <div className="px-[1px] mt-3 md:mt-0 md:px-0 md:overflow-hidden flex-grow flex flex-col">
      <Name />
      <Scroll />
    </div>
  );
}
