export const IncompleteTodo = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Incomplete List</p>
      <ul>
        {incompleteTodos.map((todo, i) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(i)}>complete</button>
              <button onClick={() => onClickDelete(i)}>delte</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
