import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="input todo"></input>
        <button>add</button>
      </div>
      <div>
        <p>Incomplete List</p>
        <ul>
          <div>
            <li>walking</li>
            <button>done</button>
            <button>delte</button>
          </div>
          <div>
            <li>wash my hands</li>
            <button>done</button>
            <button>delte</button>
          </div>
        </ul>
      </div>
      <div>
        <p>Complete List</p>
        <ul>
          <div>
            <li>make lunch</li>
            <button>back</button>
          </div>
          <div>
            <li>check emails</li>
            <button>back</button>
          </div>
        </ul>
      </div>
    </>
  );
};
