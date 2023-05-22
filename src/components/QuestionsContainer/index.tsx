import React, { useState } from "react";
import { database } from "../../services/firebase";
import useRoom from "../../hooks/useRoom";
import { useAuth } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { Question } from "../Question";
import deleteImage from "../../assets/images/delete.svg";

type RoomParamsProps = {
  id: string;
};

type InEditingProps =
  | {
      questionId: string | undefined;
      roomId: string | undefined;
    }
  | undefined;
export default function QuestionsContainer() {
  const params = useParams<RoomParamsProps>();
  const roomId = params.id;
  const { user } = useAuth();

  const { questions } = useRoom(roomId);
  const [inEditing, setInEditing] = useState<InEditingProps>();

  async function handleLikeQuestion(
    questionId: string,
    likeId: string | undefined
  ) {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  }

  async function handleEditQuestion(questionId: string) {
    if (!inEditing) {
      setInEditing({
        questionId: questionId,
        roomId: roomId,
      });
    } else {
      setInEditing(undefined);
    }
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }
  return (
    <>
      <div className="question-list my">
        <div className="question-title">Your Questions</div>
        {questions.map((question) => {
          if (question.author.id === user?.id) {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                inEditing={
                  question.id === inEditing?.questionId ? inEditing : undefined
                }
                setInEditing={setInEditing}
              >
                <div className="buttons-list">
                  <button
                    className={`like-button ${question.likeId ? "liked" : ""}`}
                    type="button"
                    aria-label="Marcar como gostei"
                    onClick={() =>
                      handleLikeQuestion(question.id, question.likeId)
                    }
                  >
                    {question.likeCount > 0 && (
                      <span>{question.likeCount}</span>
                    )}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                        stroke="#737380"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    className={`edit-button ${
                      question.id === inEditing?.questionId ? "editing" : ""
                    }`}
                    type="button"
                    onClick={() => handleEditQuestion(question.id)}
                  >
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0,24) scale(0.005,-0.005)"
                        fill="#737380"
                        stroke="none"
                      >
                        <path
                          d="M4253 5080 c-78 -20 -114 -37 -183 -83 -44 -29 -2323 -2296 -2361
                        -2349 -21 -29 -329 -1122 -329 -1168 0 -56 65 -120 122 -120 44 0 1138 309
                        1166 329 15 11 543 536 1174 1168 837 838 1157 1165 1187 1212 74 116 105 270
                        82 407 -7 39 -30 105 -53 154 -36 76 -55 99 -182 226 -127 127 -150 145 -226
                        182 -135 65 -260 78 -397 42z m290 -272 c55 -27 258 -231 288 -288 20 -38 24
                        -60 24 -140 0 -121 -18 -160 -132 -279 l-82 -86 -303 303 -303 303 88 84 c49
                        46 108 93 132 105 87 42 203 41 288 -2z m-383 -673 l295 -295 -933 -932 -932
                        -933 -295 295 c-162 162 -295 299 -295 305 0 13 1842 1855 1855 1855 6 0 143
                        -133 305 -295z m-1822 -2284 c-37 -12 -643 -179 -645 -178 -1 1 30 115 68 252
                        38 138 79 285 91 329 l21 78 238 -238 c132 -132 233 -241 227 -243z"
                        />
                        <path
                          d="M480 4584 c-209 -56 -370 -206 -444 -414 l-31 -85 0 -1775 c0 -1693
                        1 -1778 18 -1834 37 -120 77 -187 167 -277 63 -63 104 -95 157 -121 146 -73 3
                        -69 2113 -66 l1895 3 67 26 c197 77 336 218 401 409 22 64 22 74 25 710 3 579
                        2 648 -13 676 -21 40 -64 64 -114 64 -33 0 -49 -7 -79 -34 l-37 -34 -5 -634
                        c-5 -631 -5 -633 -28 -690 -41 -102 -118 -179 -220 -220 l-57 -23 -1834 -3
                        c-1211 -1 -1853 1 -1890 8 -120 22 -227 104 -277 213 l-29 62 0 1760 0 1760
                        29 63 c37 80 122 161 203 194 l58 23 630 5 c704 6 664 1 700 77 23 48 13 95
                        -31 138 l-35 35 -642 -1 c-533 0 -651 -3 -697 -15z"
                        />
                      </g>
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImage} alt="Remover a pergunta" />
                  </button>
                </div>
              </Question>
            );
          }
          return "";
        })}
      </div>
      <div className="question-list">
        {questions.map((question) => {
          if (question.author.id !== user?.id) {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                setInEditing={setInEditing}
              >
                <button
                  className={`like-button ${question.likeId ? "liked" : ""}`}
                  type="button"
                  aria-label="Marcar como gostei"
                  onClick={() =>
                    handleLikeQuestion(question.id, question.likeId)
                  }
                >
                  {question.likeCount > 0 && <span>{question.likeCount}</span>}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                      stroke="#737380"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Question>
            );
          }
          return "";
        })}
      </div>
    </>
  );
}
