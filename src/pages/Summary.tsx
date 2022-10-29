import { Box, Slide } from "spectacle";

import Header from "../components/Header";
import { messages } from "../config";

const Summary = () => {
  const overall = messages.manager;
  const contentDisplay = overall.content?.map((message, idx) => (
    <p key={idx} className="text-sm text-slate-800 mb-3">
      {message}
    </p>
  ));

  const imgDisplay = overall.image && (
    <div className="mt-14 m-auto w-80 relative">
      <img src={overall.image} alt="summary" className="shadow-lg transition duration-500 transform hover:-translate-y-1 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
    </div>
  );

  const summaryDisplay = (
    <Box className="h-24 font-sans">
      {contentDisplay}
      {imgDisplay}
    </Box>
  );

  return (
    <Slide backgroundColor="slide-bg">
      <Header>Summary</Header>
      {summaryDisplay}
    </Slide>
  );
};

export default Summary;
