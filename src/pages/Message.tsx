import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Box, Slide } from "spectacle";

import Header from "../components/Header";
import { messages } from "../config";

const Message = () => {
  const emptyImageDisplay = <FontAwesomeIcon className="h-14" icon={faUserCircle} />;

  const messagesDisplay = messages.teammates.map((message, idx) => {
    const imgDisplay = message.image ? (
      <img
        className="inset-0 object-cover w-56 h-24"
        src={message.image}
        alt={message.from}
        loading="lazy"
      />
    ) : emptyImageDisplay;

    return (
      <Box key={idx} className="flex h-24 font-sans mb-8">
        <div className="flex-none w-56 relative">
          <div className="flex shadow-lg transition duration-500 transform hover:-translate-y-1 w-full h-full rounded-lg justify-center content-center text-center place-items-center">
            {imgDisplay}
          </div>
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
