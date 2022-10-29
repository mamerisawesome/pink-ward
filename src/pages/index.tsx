import Assessment from "./Assessment";
import Intro from "./Intro";
import Message from "./Message";
import Project from "./Project";
import Summary from "./Summary";

const Slides = () => {
  const slides = [
    <Intro />,
    <Project />,
    <Assessment />,
    <Message />,
    <Summary />,
  ];

  return <>{slides}</>;
};

export default Slides;
