export function SELECT({ children, mrBottom = 0, value, setValue }) {
  return (
    <>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          marginBottom: `${mrBottom}`,
        }}
      >
        {children}
      </select>
    </>
  );
}
