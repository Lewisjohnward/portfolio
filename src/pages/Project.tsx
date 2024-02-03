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

  const { details, name, image } = projects[project as keyof typeof projects];

  return (
    <div>
      <Link to="/" className="text-slate-800 px-2 py-1 bg-white rounded">
        Home
      </Link>
      <h1>{name}</h1>
      <div>{project}</div>
      <div>{details}</div>
      <img src={image} />
      <h2>About</h2>
      <h2>Techincal details</h2>
    </div>
  );
}
