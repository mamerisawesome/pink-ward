import { ReactNode } from "react";
import { Heading } from "spectacle";

const Header = (props: { children: ReactNode }) => {
  return (
    <Heading>
      <span>
        {props.children}
      </span>
    </Heading>
  );
};

export default Header;
