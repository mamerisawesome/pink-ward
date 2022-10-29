import { Slide, Text } from "spectacle";

import Header from "../components/Header";
import { user } from '../config';

const Intro = () => {
  const header = ['Hello', user.name].filter(Boolean).join(' ').trim();

  return (
    <Slide backgroundColor="slide-bg">
      <Header>{header}! 🎉</Header>
      <Text>
        The following is a synthesized view of the Performance Evaluation.
      </Text>
    </Slide>
  );
};

export default Intro;
