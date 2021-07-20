import React from "react";
import { ReUsableButton } from "./ButtonStyle";

export const Button = (props) => {
  return (
    <ReUsableButton
      color={props.color}
      type={props.type || "button"}
      onClick={props.onClick}
      white={props.white}
    >
      {props.children}
    </ReUsableButton>
  );
};
