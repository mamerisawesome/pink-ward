import { useMemo, useState } from "react";
import { Box, Grid, Slide, Text } from "spectacle";

import Header from "../components/Header";
import { assessments } from "../config";

const OpenButton = (props: { bgColor: string, color: string, onClick: () => void }) => {
  return (
    <button
      className={`
        transition
        duration-500
        ${props.bgColor || 'bg-blue-400'}
        ${props.color}
        hover:bg-blue-200
        transform
        hover:-translate-y-1
        w-full
        h-36
        pl-2
        pr-3
        py-2
        shadow-sm
      `}
      onClick={props.onClick}
    >
      <Text textAlign="center">Open 👀</Text>
    </button>
  );
};

const AssessmentList = (props: { assessment: string[] }) => {
  return (
    <Box className="bg-slate-300 shadow-lg transition duration-500 transform hover:-translate-y-1 rounded-xl pl-2 pr-2">
      <Text>
        <ul className="text-xl list-disc">
          {props.assessment.map((strength) => <li key={strength}>{strength}</li>)}
        </ul>
      </Text>
    </Box>
  );
};

const Assessment = () => {
  const [isStrengthsOpen, setIsStrengthsOpen] = useState(false);
  const [isImprovementsOpen, setIsImprovementsOpen] = useState(false);

  const strengthsSection = useMemo(() => {
    if (isStrengthsOpen) {
      return <AssessmentList assessment={assessments.strengths} />;
    }

    return <OpenButton bgColor="bg-slate-300" color="text-black" onClick={() => setIsStrengthsOpen(true)} />;
  }, [isStrengthsOpen]);

  const improvementsSection = useMemo(() => {
    if (isImprovementsOpen) {
      return <AssessmentList assessment={assessments.improvements} />;
    }

    return <OpenButton bgColor="bg-slate-400" color="text-white" onClick={() => setIsImprovementsOpen(true)} />;
  }, [isImprovementsOpen]);

  return (
    <Slide backgroundColor="slide-bg">
      <Header>Assessment</Header>
      <Grid gridGap="20px" gridTemplateColumns="1fr 1fr">
        <Box>
          <Text className="font-bold">Strengths 👍</Text>
          {strengthsSection}
        </Box>
        <Box>
          <Text className="font-bold">For Improvement 🛠️</Text>
          {improvementsSection}
        </Box>
      </Grid>
    </Slide>
  );
};

export default Assessment;
