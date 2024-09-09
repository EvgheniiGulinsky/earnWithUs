import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  icon: string;
  className?: string;
}

const Button = ({ text, icon, className }: Props) => {
  return (
    <button className={clsx(styles.button, className)}>
      <img src={icon} alt="icon" className="icon" />
      {text}
    </button>
  );
};

export default Button;
