import React from "react";
import { CardWrapper } from "./CardStyle";

export const Card = (props) => {
  return (
    <CardWrapper
      marginTop={props.marginTop}
      color={props.color}
      fit={props.fit}
      noshadow={props.noshadow}
      relative={props.relative}
      overflow={props.overflow}
    >
      {props.children}
    </CardWrapper>
  );
};
