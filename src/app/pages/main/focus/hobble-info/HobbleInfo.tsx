import { FC, ReactNode } from "react";
import style from "./HobbleInfo.module.css";

interface IHobbleInfo {
  children: ReactNode;
}

export const HobbleInfo: FC<IHobbleInfo> = ({ children }) => {
  return (
    <div className={style.hobbleInfo}>
      <p>{children}</p>
    </div>
  );
};
