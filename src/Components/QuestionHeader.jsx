import formateTime from "../utils/formateTime";

const QuestionHeader = ({ currentQuestion, totalQuestion, timeLeft }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <h2 style={{ fontSize: "1.5rem" }}>
        Question {currentQuestion + 1} out of {totalQuestion}
      </h2>
      <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Time left:{formateTime(timeLeft)}
      </div>
    </div>
  );
};

export default QuestionHeader;
