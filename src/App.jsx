import { useReducer } from "react";
import questions from "./data/questions";
import { quizReducer } from "./state/quizReducer";
import "./App.css";
import TempComponent from "./Components/TempComponent";
import QuestionView from "./Components/QuestionView";
import ProgressBar from "./Components/ProgressBar";
import AppBanner from "./Components/AppBanner";

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

  const handleAnswer = (index) => {
    dispatch({type: "ANSWER", payload: index});
  }

  const question_view = (
    <QuestionView
      q={q}
      currentQuestion={state.currentQuestion}
      totalQuestion={questions.length}
      selectedAnswer={state.answers[state.currentQuestion]}
      onAnswer={handleAnswer}
      timeLeft={state.timeLeft}
      dispatch={dispatch}
    />
  );

  const result_view = (<></>)

  return (
    <div className="app-container">
      <TempComponent state={state} dispatch={dispatch} />

      <ProgressBar 
        current={state.currentQuestion}
        total={questions.length}
      />

      <AppBanner/>

      <div className="quiz-content">
        {state.submitted ? result_view : question_view}
      </div>
    </div>
  );
};

export default App;
