import { useState } from 'react';

function* generateId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

const getId = generateId();

const initialInputState = {
  a: 10,
  b: 20,
};

const App2 = () => {
  const [inputState, setInputSate] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);


  const handleInputFields = (e) => {
    setInputSate({ ...inputState, [e.target.name]: parseInt(e.target.value) });
  };

  // we can handle input fields this way also

  // const handleInputFieldA = (e) => {
  //   setInputSate({ ...inputState, a: e.target.value });
  // };

  // const handleInputFieldB = (e) => {
  //   setInputSate({ ...inputState, b: e.target.value });
  // };

  // const handleInputFields = (key, value) => {
  //   setInputSate({ ...inputState, [key]: value });
  // };

  // const handleInputFields = (inp) => {
  //   setInputSate({ ...inputState, ...inp });
  // };

  const handleClear = () => {
    setInputSate({ ...initialInputState });
    setResult(0);
  };

  const handleOperations = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert('Please fill all the fields');
      return;
    }

    const f = new Function(
      'operation',
      `return ${inputState.a} ${operation} ${inputState.b}`
    );
    const result = f(operation);
    setResult(result);

    // setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

    const history = {
      id: getId.next().value,
      inputs: inputState,
      operation,
      result,
      date: new Date(),
    };
    setHistories([history, ...histories]);
  };


  const handleRestore = (historyItem) => {
    setInputSate({...historyItem.inputs})
    setResult(historyItem.result)
    setRestoredHistory(historyItem)
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result: {result}</h1>
      <div>
        <p>Inputs</p>
        <input
          type="number"
          value={inputState.a}
          onChange={handleInputFields}
          name="a"
        />
        <input
          type="number"
          value={inputState.b}
          onChange={handleInputFields}
          name="b"
        />
      </div>
      <div>
        <p>Operations</p>
        <button onClick={() => handleOperations('+')}>+</button>
        <button onClick={() => handleOperations('-')}>-</button>
        <button onClick={() => handleOperations('*')}>*</button>
        <button onClick={() => handleOperations('/')}>/</button>
        <button onClick={() => handleOperations('%')}>%</button>
        <button onClick={handleClear}>clear</button>
      </div>
      <div>
        <p>History</p>
        {histories.length === 0 ? (
          <p>
            <small>There is no history</small>
          </p>
        ) : (
          <ul>
            {histories.map((historyItem) => (
              <li key={historyItem.id}>
                <p>
                  Operation: {historyItem.inputs.a} {historyItem.operation}{' '}
                  {historyItem.inputs.b}, Result: {historyItem.result}
                </p>
                <small>{historyItem.date.toLocaleDateString()}</small>
                <br />
                <button
                  onClick={() => handleRestore(historyItem)}
                  disabled={
                    restoredHistory !== null &&
                    restoredHistory.id === historyItem.id
                  }
                >
                  Restore
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App2;
