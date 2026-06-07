import AnswerOptions from "./AnswerOptions";
import MediaDisplay from "./MediaDisplay";
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
          <AnswerOptions
          options={q.options}
          selectedIndex={selectedAnswer}
          onSelect={onAnswer}
          />
        </div>

        {(q.type === "image" || q.type === "video") && (
          <MediaDisplay 
            type={q.type}
            image={q.image}
            video={q.video}
          />
        )}
      </div>
    </Card>
  );
};

export default QuestionView;
