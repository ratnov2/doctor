import { FC, ReactNode } from "react";
import style from "./SurvivalSection.module.css";

interface ISurvivalSection {
  img: JSX.Element;
  children: ReactNode;
  index: number;
}

export const SurvivalSection: FC<ISurvivalSection> = ({
  img,
  children,
  index,
}) => (
  <div
    className={style.survivalSection}
    style={index === 1 ? { marginLeft: 10, marginRight: 10 } : {}}
  >
    <div className={style.img}>{img}</div>
    <div>{children}</div>
  </div>
);
