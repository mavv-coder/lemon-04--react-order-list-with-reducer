import React from "react";
import classComponents from "./heading.styles";

interface Props {
  title: string;
}

export const HeadingComponent: React.FC<Props> = (props) => {
  const { title } = props;
  const { Heading } = classComponents;

  return <Heading>{title}</Heading>;
};
