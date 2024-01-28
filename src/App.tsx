import { useRef } from "react";
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

function App() {
  const handleScroll = () => {
    console.log("scroll");
  };
  return (
    <body className="h-[100dvh] flex flex-col pt-10 px-[700px] bg-slate-800 space-y-4">
      <div className="flex justify-between">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-40">
            <TiDocumentText className="text-4xl" />
          </a>
          <a
            href="https://www.github.com/Lewisjohnward"
            target="_blank"
            className="hover:opacity-40"
          >
            <FaGithub size={40} style={{ fill: "white" }} />
          </a>
          <a
            href="https://www.linkedin.com"
            className="hover:opacity-40"
            target="_blank"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
      <div className="flex-grow flex">
        <div className="flex-grow basis-0 flex flex-col p-8 space-y-4">
          <div className="p-4">
            <div className="flex gap-4 items-center">
              <h1 className="text-6xl leading-none">Lewis Ward</h1>
            </div>
            <h2 className="px-2 text-sm text-white/50">
              Lead Engineer at upstart
            </h2>
          </div>
          <p className="text-white/50 px-4">
            I build pixel-perfect, engaging, and accessible digital experiences
          </p>
        </div>
        <div className="flex-grow flex flex-col basis-0 px-2 space-y-10">
          <div className="flex text-white gap-8">
            <a href="#about">About</a>
            <a href="#experience" className="text-white/10 hover:text-white">
              Experience
            </a>
            <a href="#projects" className="text-white/10 hover:text-white">
              Projects
            </a>
          </div>
          <div
            onScroll={handleScroll}
            className="flex-grow h-96 py-10 overflow-scroll no-scrollbar space-y-10"
          >
            <p id="about">
              Back in <span className="font-bold text-xl">2020</span>
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about about about about about about about
              about about about about about
            </p>
            <p id="experience">
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience experience experience experience experience
              experience experience
            </p>
            <p id="projects">
              Back in <span className="font-bold text-xl">2020</span>projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects projects projects projects projects projects projects
              projects
            </p>
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
      </div>
    </body>
  );
}

export default App;
