import React from "react";
import classes from "./IconButton.module.css";

type IconButtonProps = {
  icon: React.ReactNode;
};

export const IconButton = ({ icon }: IconButtonProps) => {
  return <button className={classes.btn}>{icon}</button>;
};
