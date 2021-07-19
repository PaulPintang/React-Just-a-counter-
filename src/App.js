import "./App.css";
import { useState } from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";

function App() {
  let initialValue = 0;
  const [count, setCount] = useState(() => {
    // use function here for it's to be rendered only once
    console.log("rendered");
    return initialValue;
  });

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">"Just a Counter"</Typography>

        <Typography variant="h1" style={{ color: "cyan" }}>
          {count}
        </Typography>
        <ButtonGroup>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setCount((prevCount) => prevCount + 1);
            }}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setCount((prevCount) => (prevCount = initialValue));
            }}
          >
            reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setCount((prevCount) => prevCount - 1);
            }}
          >
            -
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
