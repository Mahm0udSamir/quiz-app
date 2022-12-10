import { Button, Col, Row } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getListQuestion,
  updateOneQuestionWithAnswer,
} from "../store/questions/questions.action";
import {
  selectProgress,
  selectQuestionsReducer,
} from "../store/questions/questions.selector";
import Loader from "../components/loader.component";
import Question from "../components/question.component";
import Progress from "../components/progress-bar.component";

const HomeScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, loading, error } = useSelector(selectQuestionsReducer);
  const progressPercentage = useSelector(selectProgress);
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);

  // get questions list
  useEffect(() => {
    dispatch(getListQuestion());
  }, [dispatch]);

  // redirect to rank screen after solved all questions
  useEffect(() => {
    progressPercentage === 100 && navigate("/rank");
  }, [navigate, progressPercentage]);

  // next question update currentIndexQuestion
  const nextQuestionHandler = useCallback(() => {
    currentIndexQuestion < questions.length - 1 &&
      setCurrentIndexQuestion((prev) => prev + 1);
  }, [currentIndexQuestion, questions]);

  // previous question update currentIndexQuestion
  const backQuestionHandler = useCallback(() => {
    currentIndexQuestion > 0 && setCurrentIndexQuestion((prev) => prev - 1);
  }, [currentIndexQuestion]);

  // answerd question and update questions list
  // checked: mark as solved quesiton
  // answerForCheck: your anwer
  const checkingAnswerHandler = useCallback(
    (answerForCheck) => {
      dispatch(
        updateOneQuestionWithAnswer({
          ...questions[currentIndexQuestion],
          checked: true,
          answerForCheck,
        })
      );
    },
    [dispatch, questions, currentIndexQuestion]
  );

  return (
    <>
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
      {!error && questions && (
        <Row>
          <Col sm={12}>
            <span>{currentIndexQuestion + 1}</span>
            <Question
              checkingAnswer={checkingAnswerHandler}
              question={questions[currentIndexQuestion]}
            />
          </Col>

          <Col
            sm={{ span: 6, offset: 6 }}
            className="justify-content-end d-flex"
          >
            <Button
              variant="outline-primary"
              className="ms-3"
              onClick={backQuestionHandler}
              disabled={currentIndexQuestion <= 0}
            >
              Back
            </Button>
            <Button
              variant="outline-primary"
              className="ms-3"
              onClick={nextQuestionHandler}
              disabled={currentIndexQuestion >= questions?.length - 1}
            >
              Continue
            </Button>
          </Col>

          <Col sm={12} style={{ marginTop: "170px" }}>
            <Progress progress={progressPercentage} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
