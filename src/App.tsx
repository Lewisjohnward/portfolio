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
    text: (
      <>
        <p>
          Hello there! 👋 I'm Lewis, a passionate and self-taught web developer
          on an exciting journey through the ever-evolving world of technology.
          My coding adventure began as a personal quest to bring my ideas to
          life on the web. With a genuine love for problem-solving and a keen
          eye for design, I delved into the vast realm of web development armed
          with determination and curiosity.
        </p>
        <p>
          Over the years, I've honed my skills in front-end and back-end
          technologies, mastering languages like HTML, CSS, JavaScript, and
          delving into frameworks such as React and Node.js. I thrive on turning
          concepts into interactive and user-friendly websites, constantly
          seeking ways to enhance the user experience.
        </p>
        <p>
          In addition to my technical prowess, I am a strong advocate for
          continuous learning. The fast-paced nature of the tech industry
          motivates me to stay ahead of the curve, exploring emerging trends and
          adopting new tools to stay relevant.
        </p>
        <p>
          Collaboration is at the heart of my approach. I enjoy working with
          like-minded individuals, exchanging ideas, and contributing to
          projects that have a positive impact. My goal is not only to write
          efficient code but also to create digital experiences that resonate
          with users.
        </p>
        <p>
          When I'm not immersed in lines of code, you can find me exploring new
          technologies, attending meetups, or simply enjoying a good cup of
          coffee while brainstorming my next big project.,
        </p>
      </>
    ),
  },
  {
    id: "technicalskills",
    linkText: "Technical skills",
    text: (
      <>
        <p>
          Technical Wizardry: My coding journey began with a mission to bring my
          ideas to life on the web. I've become adept at a variety of languages
          and technologies, with a strong foundation in HTML, CSS, and
          JavaScript. Building on this base, I've delved into the intricacies of
          popular frameworks such as React for dynamic front-end development and
          Node.js for scalable back-end solutions.
        </p>

        <p>
          Full-Stack Prowess: Being a firm believer in the power of full-stack
          development, I've seamlessly integrated front-end and back-end
          technologies to create cohesive and efficient web applications.
          Whether it's designing pixel-perfect user interfaces or architecting
          robust server-side solutions, I take pride in delivering end-to-end
          solutions that stand out.
        </p>

        <p>
          Responsive Design Guru: Creating websites that adapt gracefully to
          various devices is my forte. I prioritize responsive design
          principles, ensuring that users have a seamless experience across
          desktops, tablets, and smartphones.
        </p>

        <p>
          Version Control Maestro: Git and GitHub are my trusted allies in
          managing code versions and collaborating seamlessly with fellow
          developers. I appreciate the importance of a well-organized version
          control system in maintaining code integrity and facilitating
          collaborative projects.
        </p>

        <p>
          Continuous Learner: The tech landscape evolves at a rapid pace, and I
          thrive on staying ahead of the curve. Whether it's adopting the latest
          JavaScript features or exploring emerging tools and libraries, I
          embrace continuous learning as a cornerstone of my professional
          growth.
        </p>

        <p>
          Problem-Solving Enthusiast: I approach coding challenges with a
          problem-solving mindset. Debugging and troubleshooting are not just
          tasks; they're opportunities to enhance my skills and uncover
          innovative solutions.
        </p>
        <p>
          Passionate Collaborator: I enjoy collaborating with diverse teams,
          bringing unique perspectives together to create impactful projects.
          Communication and teamwork are essential components of my approach to
          building successful digital solutions.
        </p>
      </>
    ),
  },
  {
    id: "experience",
    linkText: "Experience",
    text: (
      <>
        <p>
          In my role as a Web Developer at [Your Company/Organization], I have
          been responsible for developing and maintaining responsive websites to
          ensure a seamless user experience across various devices. My work
          involves implementing front-end technologies such as HTML5, CSS3, and
          JavaScript, creating interactive and visually appealing interfaces.
          Collaborating with cross-functional teams, including designers and
          back-end developers, has allowed me to contribute to the delivery of
          high-quality web solutions. Additionally, I've played a key role in
          optimizing website performance and speed through code optimization and
          adherence to responsive design principles. Integration of third-party
          APIs has been a part of my responsibilities to enhance functionality
          and improve overall user engagement.
        </p>
        <p>
          During my time as a Freelance Web Developer, I successfully completed
          a diverse range of projects for clients, spanning from small
          businesses to individual entrepreneurs. My approach involved designing
          and implementing custom websites tailored to the unique needs and
          preferences of each client. To streamline project workflows and meet
          tight deadlines, I made effective use of modern web development
          frameworks and tools. Ongoing maintenance and support for clients
          ensured the longevity and continued functionality of the delivered
          projects.
        </p>
        <p>
          In my ongoing self-taught learning journey, which began on [Start
          Date], I have passionately pursued knowledge in web development.
          Proficiency in front-end technologies, including HTML, CSS, and
          JavaScript, has been achieved through a combination of online courses,
          tutorials, and hands-on projects. Actively engaging in developer
          communities, forums, and networking events has allowed me to share
          knowledge and gain valuable insights, contributing to my continuous
          growth in the field.
        </p>
      </>
    ),
  },
  {
    id: "projects",
    linkText: "Projects",
    text: (
      <div className="space-y-4">
        <p>
          Showing a selection of my personal projects. Click on a project for
          more information
        </p>
        <div>
          <div className="relative bg-slate-700 p-1">
            <div className="absolute h-full left-0 top-0 flex px-1 items-center gap-1">
              <div className="w-4 h-4 bg-red-400 rounded-full" />
              <div className="w-4 h-4 bg-orange-300 rounded-full" />
              <div className="w-4 h-4 bg-green-400 rounded-full" />
            </div>
            <p className="text-center">Clippings to Cards</p>
          </div>
          <img src="clippingstocards.png" className="w-full" />
        </div>
        <div>
          <div className="relative bg-slate-700 p-1">
            <div className="absolute h-full left-0 top-0 flex px-1 items-center gap-1">
              <div className="w-4 h-4 bg-red-400 rounded-full" />
              <div className="w-4 h-4 bg-orange-300 rounded-full" />
              <div className="w-4 h-4 bg-green-400 rounded-full" />
            </div>
            <p className="text-center">Tabata Timer</p>
          </div>
          <img src="tabata.png" className="w-full" />
        </div>
      </div>
    ),
  },
];

function Scroll() {
  const [id, setId] = useState(navObjects[0].id);
  const testRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
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
        className="overflow-scroll flex-grow no-scrollbar space-y-10"
        ref={testRef}
      >
        {navObjects.map((nav) => (
          <div key={nav.id} id={nav.id} className="space-y-4">
            {nav.text}
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
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
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
    <div className="text-sm md:text-base h-[100dvh] flex flex-col max-w-6xl m-auto px-4 md:py-4">
      {/* <Header /> */}
      <div className="px-[1px] mt-3 md:mt-0 md:px-0 md:overflow-hidden flex-grow flex flex-col md:justify-start md:flex-row">
        <Name />
        <Scroll />
      </div>
    </div>
  );
}

export default App;
