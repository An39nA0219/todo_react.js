import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="input todo"></input>
        <button>add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Incomplete List</p>
        <ul>
          <div className="list-row">
            <li>walking</li>
            <button>done</button>
            <button>delte</button>
          </div>
          <div className="list-row">
            <li>wash my hands</li>
            <button>done</button>
            <button>delte</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Complete List</p>
        <ul>
          <div className="list-row">
            <li>make lunch</li>
            <button>back</button>
          </div>
        </ul>
      </div>
    </>
  );
};
