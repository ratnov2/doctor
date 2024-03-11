import { PersonSvg } from "@/assets/PersonSvg";
import style from "./HobbleSection.module.css";
import { ArrowContentSvg } from "@/assets/ArrowContentSvg";
import { FingerButton } from "./finger-botton/FingerButton";
import { FC, ReactNode } from "react";

interface IHobbleSection {
  children: ReactNode;
  text: string;
  svg: JSX.Element;
  styleButton: "blue" | "green";
  handleVisibleModal: () => void;
}

export const HobbleSection: FC<IHobbleSection> = ({
  children,
  text,
  svg,
  styleButton,
  handleVisibleModal,
}) => {
  return (
    <section className={style.section}>
      <div className={style.personSvg}>{svg}</div>
      <div className={style.mainInfo}>
        <div>
          <div className={style.bgGradient} />
          <div className={style.arrowSvg}>
            <ArrowContentSvg />
          </div>
        </div>

        <div className={style.info}>{children}</div>
      </div>
      <div className={style.addInfo}>
        <p>{text}</p>
        <div className={style.bgGradientText} />
      </div>
      <div className={style.fingerButton}>
        <FingerButton
          styleButton={styleButton}
          handleVisibleModal={handleVisibleModal}
        />
      </div>
    </section>
  );
};
