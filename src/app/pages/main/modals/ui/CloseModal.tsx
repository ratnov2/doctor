import { FC } from "react";
import style from "./CloseModal.module.css";

interface ICloseModal {
  onHandlerClose: () => void;
}

export const CloseModal: FC<ICloseModal> = ({ onHandlerClose }) => {
  return (
    <button onClick={onHandlerClose} className={style.closeModal}>
      X
    </button>
  );
};
