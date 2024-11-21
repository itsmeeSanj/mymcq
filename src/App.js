import React from "react";

import "./App.css";

export default function App() {
  return (
    <>
      {" "}
      <Header />
    </>
  );
}

function Header() {
  const [questionModalShow, setQuestionModalShow] = React.useState(false);

  const headerStyle = {
    background: "rgb(191 198 232)",
    position: "relative",
  };

  return (
    <>
      <div style={headerStyle}>
        <CONTAINER
          style={{
            textAlign: "right",
            padding: "12px 0",
            position: "relative",
          }}
        >
          <div>
            <BUTTON onClick={() => setQuestionModalShow((show) => !show)}>
              Add Question
            </BUTTON>
            {questionModalShow && <QuestionsTypeModal />}
          </div>
        </CONTAINER>
      </div>
    </>
  );
}

const styleQuestionTypeModal = {
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "12px",
  position: "absolute",
  right: "0",
  background: "#fff",
  top: "100%",
  width: "250px",
};

const styleSelectButtonTopic = {
  border: "1px solid #ddd",
  background: "#fff",
};

function QuestionsTypeModal() {
  const [questionType, setQuestionType] = React.useState("");

  return (
    <div style={styleQuestionTypeModal}>
      <form>
        <div>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            style={{
              marginBottom: "16px",
            }}
          >
            <option value=''>Select Question Type</option>
            <option value='multiple'>Mutliple Choice Question</option>
            <option value='checkbox'>Checkbox QUestion</option>
          </select>
        </div>
        <div>
          <button style={styleSelectButtonTopic}>Select Topic</button>
        </div>
      </form>
    </div>
  );
}

function CONTAINER({ children, style }) {
  return (
    <div className='container' style={style}>
      {children}
    </div>
  );
}

function BUTTON({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}
