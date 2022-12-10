import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectProgress,
  selectScore,
} from "../store/questions/questions.selector";
import { getRank } from "../store/rank/rank.action";
import { selectRank } from "../store/rank/rank.selector";

const RankScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const progressPercentage = useSelector(selectProgress);
  const scorePercentage = useSelector(selectScore);
  const rank = useSelector(selectRank);

  // redirect to home if not complet all questions
  useEffect(() => {
    progressPercentage < 100 && navigate("/");
  }, [navigate, progressPercentage]);

  // get rank when load page after answerd questions
  useEffect(() => {
    scorePercentage && dispatch(getRank(scorePercentage));
  }, [dispatch, scorePercentage]);

  return (
    <Card className="my-3 rounded" style={{ minHeight: "180px" }}>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <Card.Title as="div" className="text-center my-3">
          YOUR RANK : <strong>{rank}</strong>
        </Card.Title>

        <Link className="btn btn-light m-3" to={"/"}>
          Try Again
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RankScreen;
