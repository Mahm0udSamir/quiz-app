import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = ({ progress }) => <ProgressBar now={progress} />;

Progress.defaultProps = {
  progress: 0,
};

export default Progress;
