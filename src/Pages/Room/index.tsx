import logoImg from "../../assets/images/logo.svg";
import { RoomCode } from "../../components/RoomCode";

import "../../styles/room.scss";
import useRoom from "../../hooks/useRoom";
import CreateQuestion from "../../components/CreateQuestion";
import QuestionsContainer from "../../components/QuestionsContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";

type RoomParamsProps = {
  id: string;
};
export function Room() {
  const params = useParams<RoomParamsProps>();
  const roomId = params.id;
  const { title, questions, authorId } = useRoom(roomId);
  const { user } = useAuth();
  const history = useNavigate();

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            {user?.id === authorId && (
              <Button onClick={() => history(`/rooms/admin/${roomId}`)}>
                Ir para sala admin
              </Button>
            )}
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
