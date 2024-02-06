import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../misc/projects";
import { useEffect } from "react";

export function Project() {
  const navigate = useNavigate();
  const { project } = useParams<keyof { project: string }>() as {
    project: string;
  };

  useEffect(() => {
    if (!projects[project as keyof typeof projects]) navigate("/");
  }, [project, navigate]);

  const { details, name, image, link } =
    projects[project as keyof typeof projects];

  return (
    <div className="flex-grow flex flex-col justify-between">
      <div>
        <div className="flex justify-end">
          <Link to="/" className="text-slate-800 px-2 py-1 bg-white rounded">
            Back
          </Link>
        </div>
        <h1 className="text-4xl">{name}</h1>
        <div className="space-y-4">
          <p>{details}</p>
          <Link
            to={link}
            target="_blank"
            className="inline-block px-2 py-1 rounded"
          >
            Visit the website
          </Link>
          <img src={image} />
          <h2 className="text-2xl">About</h2>
          <p className="text-white/60">
            Project developed because creating Anki flashcards from the
            clippings files produced by the Kindle when highlighting text is
            laborious and time consume. It allows quick creation of a large
            amount of cards
          </p>
          <h2 className="text-2xl">Technical details</h2>
          <ul className="text-xl list-disc list-inside [&>*]:text-white/60 [&>*]:text-base ">
            <li>React</li>
            <li>Zustand</li>
            <li>Rollup</li>
            <li>ES6</li>
            <li>TailwindCSS</li>
            <li>HTML5</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 mx-auto">
        <p className="text-white/60">
          Thought a project was particularly interesting? Feel free to contact
          me via email lewisjohnward@gmail.com
        </p>
      </div>
    </div>
  );
}
