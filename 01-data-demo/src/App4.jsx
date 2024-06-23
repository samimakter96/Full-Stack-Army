import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [timeCount, setTimeCount] = useState(5)

  console.log("Count", count, "Lock", lock);

  useEffect(() => {
    if (count === 5) {
      setLock(true);
    }

    return () => {

    }
  }, [count]);



  return (
    <div>
      <h1>{count}</h1>
      <button disabled={lock} onClick={() => setCount(count + 1)}>
        ADD {lock && `(Locked)`}
      </button>
    </div>
  );
};

export default App;
