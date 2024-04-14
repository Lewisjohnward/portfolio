import { Link } from "react-router-dom";
import { projects } from "../misc/projects";

export function Projects() {
  return (
    <div className="space-y-4">
      <p>
        Showing a selection of my personal projects. Click on a project for more
        information
      </p>
      <div className="grid grid-col-2">
        {Object.keys(projects).map((project) => {
          const { id, name, image } =
            projects[project as keyof typeof projects];
          return (
            <Link key={id} to={id} className="block shadow-lg">
              <div className="relative bg-slate-700 p-1">
                <div className="absolute h-full left-0 top-0 flex px-1 items-center gap-1">
                  <div className="w-4 h-4 bg-red-400 rounded-full" />
                  <div className="w-4 h-4 bg-orange-300 rounded-full" />
                  <div className="w-4 h-4 bg-green-400 rounded-full" />
                </div>
                <p className="text-center">{name}</p>
              </div>
              <img src={image} className="w-full" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
