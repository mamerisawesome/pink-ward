import createColormap from "colormap";
import { Box, Slide } from "spectacle";
import Header from "../components/Header";

import { projects } from "../config";

const Project = () => {
  const shadesCount = projects.length > 5 ? projects.length * 2 : 9;
  const colors = createColormap({ colormap: 'plasma', nshades: shadesCount });

  const projectsDisplay = projects.map((project, idx) => (
    <div
      key={idx}
      style={{ backgroundColor: colors[idx].toString() }}
      className="rounded-xl cursor-pointer shadow-lg transition duration-500 transform hover:-translate-y-1 p-4 text-slate-200 m-2"
    >
      <p className="text-2xl font-bold">
        {project.name}
      </p>
      <p className="text-xl">
        # of hrs: {project.hours}
      </p>
    </div>
  ));

  return (
    <Slide backgroundColor="slide-bg">
      <Header>Projects</Header>
      <Box className="flex flex-wrap place-content-center">
        {projectsDisplay}
      </Box>
    </Slide>
  );
};

export default Project;
