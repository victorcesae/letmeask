import React, { FormEvent, useState } from "react";
import { Button } from "../Button";
import { useAuth } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { database } from "../../services/firebase";

type RoomParamsProps = {
  id: string;
};
export default function CreateQuestion() {
  const params = useParams<RoomParamsProps>();
  const roomId = params.id;
  const { user, signInWithGoogle } = useAuth();
  const [newQuestion, setNewQuestion] = useState("");
  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === "") {
      return;
    }
    if (!user) {
      throw new Error("You must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        id: user?.id,
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  }
  return (
    <form onSubmit={handleSendQuestion}>
      <textarea
        placeholder="O que você quer perguntar?"
        onChange={(event) => setNewQuestion(event.target.value)}
        value={newQuestion}
      />

      <div className="form-footer">
        {user ? (
          <div className="user-info">
            <img src={user?.avatar} alt={user?.name} />
            <span>{user.name}</span>
          </div>
        ) : (
          <span>
            Para enviar uma pergunta,{" "}
            <button
              onClick={async () => {
                await signInWithGoogle();
              }}
            >
              faça seu login
            </button>
            .
          </span>
        )}

        <Button type="submit" disabled={!user}>
          Enviar pergunta
        </Button>
      </div>
    </form>
  );
}
