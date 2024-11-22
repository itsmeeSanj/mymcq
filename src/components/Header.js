import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import { SELECT } from "./Form";
import { useModal } from "../hooks/useModal";

export default function Header() {
  const [questionType, setQuestionType] = React.useState("");

  const { isModalShow, modalClose } = useModal();

  const headerStyle = {
    background: "rgb(191 198 232)",
    position: "relative",
  };

  const styleSelectButtonTopic = {
    padding: "6px",
    background: "#fff",
    border: "1px solid rgb(118, 118, 118)",
    width: "100%",
    cursor: "pointer",
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
            <Button onClick={modalClose}>Add Question</Button>
            {isModalShow && (
              //   <>
              <Modal>
                <form>
                  <div>
                    <SELECT
                      mrBottom='16px'
                      value={questionType}
                      setValue={setQuestionType}
                    >
                      <option value=''>Select Question Type</option>
                      <option value='multiple'>Mutliple Choice Question</option>
                      <option value='checkbox'>Checkbox Question</option>
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
