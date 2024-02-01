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

function Information() {
  const handleScroll = () => {
    console.log("scroll");
  };
  return (
    <div onScroll={handleScroll} className="py-0 no-scrollbar space-y-8">
      <p id="about">
        As a self-taught web developer, I am fueled by a relentless passion for
        creating innovative and user-centric digital experiences. With a
        foundation built on self-motivation and a love for problem-solving, I
        have honed my skills in web development through hands-on projects and a
        commitment to staying at the forefront of industry trends. My journey
        into web development has been characterized by a curiosity-driven
        approach, where each challenge is an opportunity to learn and grow.
        Proficient in a range of front-end and back-end technologies, I
        specialize in translating creative ideas into functional and
        aesthetically pleasing websites. Whether it's crafting responsive user
        interfaces or optimizing website performance, I thrive on delivering
        solutions that not only meet but exceed expectations. In addition to my
        technical prowess, I bring a collaborative and adaptable mindset to
        every project. I am adept at working independently, yet I thrive in team
        environments where collective creativity leads to exceptional outcomes.
        My dedication to staying abreast of emerging technologies and commitment
        to continuous learning underscore my ambition to contribute meaningfully
        to the ever-evolving field of web development. I am excited about the
        prospect of leveraging my skills to tackle new challenges and contribute
        to innovative projects. Let's build the web together, one line of code
        at a time.
      </p>
      <p id="technical-skills">
        As a self-taught web developer, I am fueled by a relentless passion for
        creating innovative and user-centric digital experiences. With a
        foundation built on self-motivation and a love for problem-solving, I
        have honed my skills in web development through hands-on projects and a
        commitment to staying at the forefront of industry trends. My journey
        into web development has been characterized by a curiosity-driven
        approach, where each challenge is an opportunity to learn and grow.
        Proficient in a range of front-end and back-end technologies, I
        specialize in translating creative ideas into functional and
        aesthetically pleasing websites. Whether it's crafting responsive user
        interfaces or optimizing website performance, I thrive on delivering
        solutions that not only meet but exceed expectations. In addition to my
        technical prowess, I bring a collaborative and adaptable mindset to
        every project. I am adept at working independently, yet I thrive in team
        environments where collective creativity leads to exceptional outcomes.
        My dedication to staying abreast of emerging technologies and commitment
        to continuous learning underscore my ambition to contribute meaningfully
        to the ever-evolving field of web development. I am excited about the
        prospect of leveraging my skills to tackle new challenges and contribute
        to innovative projects. Let's build the web together, one line of code
        at a time.
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
        Back in <span className="font-bold text-xl">2020</span>projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects
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
  );
}

function Header() {
  return (
    <div className="flex justify-between p-4">
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
  );
}

function App() {
  return (
    <body className="h-[100dvh] flex flex-col max-w-6xl m-auto">
      <Header />
      <div className="px-2 md:px-0 md:overflow-hidden flex-grow flex flex-col md:flex-row">
        <div className="flex-grow basis-0 flex flex-col py-4 space-y-4">
          <div>
            <h1 className="text-6xl leading-none">Lewis Ward</h1>
            <h2 className="px-2 text-sm text-white/50">
              Lead Engineer at my bedroom
            </h2>
          </div>
          <p className="text-white/50">
            I build pixel-perfect, engaging, and accessible digital experiences
          </p>
        </div>
        <div className="md:overflow-scroll flex-grow flex flex-col basis-0 px-2 no-scrollbar">
          <div className="sticky top-0 bg-slate-800 py-4 flex justify-between text-white gap-2 md:gap-8">
            <a href="#about">About</a>
            <a
              href="#technical-skills"
              className="text-white/10 hover:text-white"
            >
              Technical skills
            </a>
            <a href="#experience" className="text-white/10 hover:text-white">
              Experience
            </a>
            <a href="#projects" className="text-white/10 hover:text-white">
              Projects
            </a>
          </div>
          <Information />
        </div>
      </div>
    </body>
  );
}

export default App;
