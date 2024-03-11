import { FingerSvg } from "@/assets/FingerSvg";
import style from "./FingerButton.module.css";
import { FC } from "react";

interface IFingerButton {
  styleButton: "blue" | "green";
  handleVisibleModal: () => void;
}

export const FingerButton: FC<IFingerButton> = ({
  styleButton,
  handleVisibleModal,
}) => {
  return (
    <button
      onClick={handleVisibleModal}
      className={`${style.fingerButton} ${style[styleButton]}`}
    >
      <FingerSvg />
    </button>
  );
};
