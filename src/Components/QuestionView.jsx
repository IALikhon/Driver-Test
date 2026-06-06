import QuestionHeader from "./QuestionHeader";
import QuestionText from "./QuestionText";
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
        currentQuestion={currentQuestion}
        totalQuestion={totalQuestion}
        timeLeft={timeLeft}
      />

      <div style={{ display: "flex", gap: "1rem", flexDirection: "row" }}>
        <div style={{flex: 1}}>
          <QuestionText
            text={q.question}
          />
        </div>
      </div>
    </Card>
  );
};

export default QuestionView;
