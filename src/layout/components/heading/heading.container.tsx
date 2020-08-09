import React from "react";
import { HeadingComponent } from "./heading.component";

interface Props {
  title: string;
}

export const HeadingContainer: React.FC<Props> = (props) => {
  const { title } = props;

  return <HeadingComponent title={title} />;
};
