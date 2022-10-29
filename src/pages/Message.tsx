import { Box, Slide } from "spectacle";

import Header from "../components/Header";
import { messages } from "../config";

const Message = () => {
  const messagesDisplay = messages.teammates.map((message, idx) => {
    const imgDisplay = message.image && (
      <img src={message.image} alt={message.from} className="absolute shadow-lg transition duration-500 transform hover:-translate-y-1 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
    );

    return (
      <Box key={idx} className="flex h-24 font-sans">
        <div className="flex-none w-56 relative">
          {imgDisplay}
        </div>
        <div className="pl-10 w-full">
          <h1 className="font-medium text-lg text-slate-600">
            @{message.from}
          </h1>
          <p className="text-sm text-slate-800">
            {message.content}
          </p>
        </div>
      </Box>
    );
  });

  return (
    <Slide backgroundColor="slide-bg">
      <Header>Messages from teammates</Header>
      {messagesDisplay}
    </Slide>
  );
};

export default Message;
