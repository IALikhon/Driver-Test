import QuestionHeader from "./QuestionHeader";
import Card from "./ui/Card";

const QuestionView = ({
  q,
  currentQuestion,
  totalQuestion,
  selectedAnswer,
  onAnswer,
  timeLeft,
  dispatch,
}) => {
  return (
  <Card>
    <QuestionHeader
    currentQuestion = {currentQuestion}
    totalQuestion = {totalQuestion}
    timeLeft = {timeLeft}
    />
  </Card>
);
};

export default QuestionView;
