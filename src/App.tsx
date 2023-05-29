import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function AppListGroup() {
  let players = ["Kohli", "Rohit", "Dhoni", "Jadeja", "Yuvaraj"];
  let cities = ["Vizag", "Hyderabad", "Banglore", "Chennai", "Ahmedabad"];

  const handleSelectItem = (item: string) => console.log(item);

  return (
    <>
      <ListGroup
        items={players}
        heading="Players"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      ;
    </>
  );
}

function AppAlert() {
  return (
    <div>
      <Alert onClose={() => {}}>
        Hellow <span style={{ border: "2px solid green" }}>World</span>
      </Alert>
      ;
    </div>
  );
}

function AppButtonExcercise() {
  return (
    <Button color="danger" onClick={() => console.log("Clicked")}>
      My Button
    </Button>
  );
}

function AppAlertVisibility() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}> Hello world</Alert>
      )}

      <Button onClick={() => setAlertVisibility(true)}>Click Me</Button>
    </>
  );
}

function App() {
  return (
    <>
      <Like onClick={() => console.log("clicked")}></Like>
    </>
  );
}

export default App;
