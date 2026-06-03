import { useReducer } from "react";
import questions from "./data/questions";
import { quizReducer } from "./state/quizReducer";
import "./App.css";
import TempComponent from "./Components/TempComponent";
import QuestionView from "./Components/QuestionView";

const initialState = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  submitted: false,
  timeLeft: 57 * 60,
};

const App = () => {
  const [state, dispatch] = useReducer(
    (state, action) => quizReducer(state, action, questions.length),
    initialState,
  );

  const q = questions[state.currentQuestion];

  const question_view = (
    <QuestionView
      q={q}
      currentQuestion={state.currentQuestion}
      totalQuestion={questions.length}
      selectedAnswer={state.answers[state.currentQuestion]}
      onAnswer={() => {}}
      timeLeft={state.timeLeft}
      dispatch={dispatch}
    />
  );

  const result_view = (<></>)

  return (
    <div className="app-container">
      <TempComponent state={state} dispatch={dispatch} />

      <div className="quiz-content">
        {state.submitted ? result_view : question_view}
      </div>
    </div>
  );
};

export default App;
