import { IngalliatorSvg } from "@/assets/IngalliatorSvg";
import style from "./HoblType.module.css";
import { FC } from "react";

interface IHoblType {
  Text: JSX.Element;
  index: number;
}
export const HoblType: FC<IHoblType> = ({ Text, index }) => {
  return (
    <section className={style.hoblType}>
      <div className={style.svgContent}>
        <IngalliatorSvg />
        <div className={style.number}>{index}</div>
      </div>
      {Text}
    </section>
  );
};
