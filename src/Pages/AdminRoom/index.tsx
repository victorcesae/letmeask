import { useNavigate, useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";

import "../../styles/room.scss";
import useRoom from "../../hooks/useRoom";
import { database } from "../../services/firebase";
import CreateQuestion from "../../components/CreateQuestion";
import QuestionsContainer from "../../components/QuestionsContainer";
import { useAuth } from "../../hooks/useAuth";

type RoomParamsProps = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParamsProps>();
  const roomId = params.id;
  const history = useNavigate();
  const { user } = useAuth();
  const { title, questions, authorId, loading } = useRoom(roomId);
  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history("/");
  }
  if (authorId !== user?.id && !loading) history(`/rooms/${roomId}`);
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined isEnd onClick={handleEndRoom}>
              Encerrar Sala{" "}
            </Button>
          </div>
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        <CreateQuestion />
        <QuestionsContainer />
      </main>
    </div>
  );
}
