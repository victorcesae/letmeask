import { ReactNode, useState, FormEvent } from "react";
import { database } from "../../services/firebase";
import { Button } from "../Button";
import "./style.scss";
type InEditingProps = {
  questionId: string | undefined;
  roomId: string | undefined;
};
type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  inEditing?: {
    questionId: string | undefined;
    roomId: string | undefined;
  };
  setInEditing: React.Dispatch<
    React.SetStateAction<InEditingProps | undefined>
  >;
};

export function Question({
  content,
  author,
  children,
  inEditing,
  setInEditing,
}: QuestionProps) {
  const [editingContent, setEditingContent] = useState(content);

  async function handleEditQuestion(event: FormEvent) {
    event.preventDefault();
    if (editingContent.trim() === "") {
      return;
    }
    if (!inEditing) {
      return;
    }
    if (!inEditing.roomId || !inEditing.questionId) {
      return;
    }
    const question = {
      content: editingContent,
    };

    await database
      .ref(`rooms/${inEditing.roomId}/questions/${inEditing.questionId}`)
      .update(question);

    inEditing = undefined;
    setInEditing(inEditing);
  }

  return (
    <div className="question">
      {inEditing ? (
        <form onSubmit={handleEditQuestion}>
          <textarea
            placeholder="Editar pergunta"
            onChange={(event) => setEditingContent(event.target.value)}
            value={editingContent}
          />

          <div className="form-footer">
            <Button type="submit">Atualizar pergunta</Button>
          </div>
        </form>
      ) : (
        <p>{content}</p>
      )}
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>

        <div>{children}</div>
      </footer>
    </div>
  );
}
