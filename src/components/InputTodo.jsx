export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="input todo"
        value={todoText}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>add</button>
    </div>
  );
};
