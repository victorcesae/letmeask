import { ButtonHTMLAttributes } from "react";

import "./style.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isEnd?: boolean;
};

export function Button({
  isOutlined = false,
  isEnd = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button ${isOutlined ? "outlined" : ""} ${
        isEnd ? "error" : ""
      }`}
      {...props}
    />
  );
}
