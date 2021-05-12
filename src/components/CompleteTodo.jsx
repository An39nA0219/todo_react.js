export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Complete List</p>
      <ul>
        {completeTodos.map((todo, i) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(i)}>back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
