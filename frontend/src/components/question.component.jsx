import { useCallback, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Message from "./message.componet";

const avalableAnswers = ["noun", "adverb", "adjective", "verb"];
const Question = ({ question, checkingAnswer }) => {
  const [checkWord, setCheckWord] = useState(null);

  // clear answered if question is changed
  useEffect(() => {
    setCheckWord("");
  }, [question.id]);

  // check answer
  const checking = useCallback(() => {
    checkingAnswer(checkWord);
  }, [checkWord, checkingAnswer]);

  // set your answer
  const setCheckWordHandler = useCallback((answerForCheck) => {
    setCheckWord(answerForCheck);
  }, []);

  return (
    <>
      <Card className="my-3 rounded" style={{ minHeight: "180px" }}>
        <Card.Body>
          <Card.Title as="div" className="text-center my-3">
            <strong>{question.word}</strong>
          </Card.Title>

          <Card.Text as="div" className="justify-content-center d-flex">
            {avalableAnswers.map((answer, i) => (
              <Button
                onClick={() => setCheckWordHandler(answer)}
                className="ms-3"
                key={i}
                disabled={question.checked}
                variant={
                  question.answerForCheck === question.pos &&
                  question.checked &&
                  question.answerForCheck === answer
                    ? "success"
                    : question.answerForCheck !== question.pos &&
                      question.checked &&
                      question.answerForCheck === answer
                    ? "danger"
                    : checkWord === question.pos &&
                      checkWord === answer &&
                      question.checked
                    ? "success"
                    : checkWord !== question.pos &&
                      checkWord === answer &&
                      question.checked
                    ? "danger"
                    : checkWord === answer
                    ? "secondary"
                    : "outline-secondary"
                }
              >
                {answer}
              </Button>
            ))}
          </Card.Text>
        </Card.Body>
        <div className="justify-content-center d-flex my-3">
          <Button disabled={question.checked || !checkWord} onClick={checking}>
            Check Answer
          </Button>
        </div>
      </Card>
      {question?.checked && (
        <Message
          variant={
            question.pos === question.answerForCheck ? "success" : "danger"
          }
        >
          {question.pos === question.answerForCheck
            ? "Correct Answer"
            : "Incorrect Answer"}
        </Message>
      )}
    </>
  );
};

export default Question;
