import { useRef } from "react";
import copyImg from "../../assets/images/copy.svg";

import "./style.scss";
import { useAuth } from "../../hooks/useAuth";
import useRoom from "../../hooks/useRoom";
import { useParams } from "react-router-dom";

type RoomCodeProps = {
  code: string | undefined;
};
type RoomParamsProps = {
  id: string;
};

export function RoomCode(props: RoomCodeProps) {
  const dialogRef = useRef<any>(null);
  function copyRoomCodeToClipboard() {
    if (!props.code) return;
    navigator.clipboard.writeText(
      `${import.meta.env.VITE_APP_URL}/rooms/${props.code}`
    );
    dialogRef.current?.show();
    setTimeout(() => {
      dialogRef.current?.close();
    }, 1000);
  }

  return (
    <div className="container">
      <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copiar código da sala" />
        </div>
        <span>Sala #{props.code}</span>
      </button>
      <dialog ref={dialogRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 50 50"
          xmlSpace="preserve"
          width="25px"
          height="25px"
        >
          <circle cx="25" cy="25" r="25" fill="#25AE88"></circle>
          <path
            fill="none"
            stroke="#FFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M38 15L22 33 12 25"
          ></path>
        </svg>
        Copiado
      </dialog>
    </div>
  );
}
