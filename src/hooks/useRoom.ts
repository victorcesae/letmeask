import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type QuestionProps = {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};

type FirebaseQuestionsProps = Record<
  string,
  {
    author: {
      id: string;
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

export default function useRoom(roomId: string | undefined) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      setLoading(true);
      if (!room.exists()) {
        return history("/403");
      }
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestionsProps =
        databaseRoom.questions ?? {};
      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([key, like]) => like.authorId === user?.id
            )?.[0],
          };
        }
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
      setAuthorId(databaseRoom.authorId);
      setLoading(false);
    });

    return () => {
      roomRef.off("value");
    };
    // eslint-disable-next-line
  }, [roomId, user?.id]);

  return { questions, title, authorId, loading };
}
