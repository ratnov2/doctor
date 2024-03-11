import { createPortal } from "react-dom";
import style from "./Portal.module.css";
import { FC, ReactNode } from "react";
import { CloseModal } from "./ui/CloseModal";
type ClientPortalInterface = {
  children: React.ReactNode;
  show?: boolean;
  onHandlerClose: () => void;
};

export const ClientPortal = ({
  children,
  show,
  onHandlerClose,
}: ClientPortalInterface) => {
  return (
    show &&
    createPortal(
      <Modal onHandlerClose={onHandlerClose}>{children}</Modal>,
      document.body
    )
  );
};

interface IModal {
  onHandlerClose: () => void;
  children: ReactNode;
}

const Modal: FC<IModal> = ({ children, onHandlerClose }) => {
  return (
    <div className={style.overflow}>
      <div className={style.modalShare}>
        <div className={style.modal}>{children}</div>
        <CloseModal onHandlerClose={onHandlerClose} />
      </div>
    </div>
  );
};
//className={style.modal}
