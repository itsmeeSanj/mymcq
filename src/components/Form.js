export default function Form() {
  return (
    <>
      <form>
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
      </form>
    </>
  );
}

export function SELECT({ children, MrBottom = 0 }) {
  return (
    <>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          marginBottom: { MrBottom },
        }}
      >
        {children}
      </select>
    </>
  );
}
