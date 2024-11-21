import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import { SELECT } from "./Form";

export default function Header() {
  const [questionModalShow, setQuestionModalShow] = React.useState(false);

  const headerStyle = {
    background: "rgb(191 198 232)",
    position: "relative",
  };

  return (
    <>
      <div style={headerStyle}>
        <div
          className='container'
          style={{
            textAlign: "right",
            padding: "12px 0",
            position: "relative",
          }}
        >
          <div>
            <Button onClick={() => setQuestionModalShow((show) => !show)}>
              Add Question
            </Button>
            {questionModalShow && (
              //   <>
              <Modal>
                <form>
                  <div>
                    <SELECT
                      mrBottom='16px'
                      value={questionType}
                      onChange={(e) => setQuestionType(e.target.value)}
                      style={{
                        marginBottom: "16px",
                      }}
                    >
                      <option value=''>Select Question Type</option>
                      <option value='multiple'>Mutliple Choice Question</option>
                      <option value='checkbox'>Checkbox QUestion</option>
                    </SELECT>
                  </div>
                  <div>
                    <button style={styleSelectButtonTopic}>Select Topic</button>
                  </div>
                </form>
              </Modal>
              //   </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
