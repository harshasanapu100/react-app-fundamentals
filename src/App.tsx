import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import Message from "./components/Message";
import produce from "immer";

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

function AppLike() {
  return (
    <>
      <Like onClick={() => console.log("clicked")}></Like>
    </>
  );
}

function App() {
  const [isVisible, setVisibility] = useState(false);

  const [person, setPerson] = useState({
    name: "Harsha",
    age: 27,
    address: {
      state: "AP",
      pin: 7217,
    },
  });

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const [bugs, setBugs] = useState([
    { id: 1, name: "abc", fixed: true },
    { id: 2, name: "def", fixed: false },
  ]);

  const handleClick = () => {
    //setVisibility(true);

    //setPerson({ ...person, age: 35, address: { ...person.address } });
    //setPerson({ ...person, address: { ...person.address, pin: 2394 } });

    //setTags([...tags, "sad"]);
    //setTags(tags.filter((x) => x != "happy"));
    //setTags(tags.map((x) => (x == "sad" ? "joy" : x)));

    //setBugs(bugs.map((x) => (x.id == 1 ? { ...x, fixed: false } : x)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((x) => (x.id = 1));
        if (bug) bug.fixed = false;
      })
    );
  };

  return (
    <>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {" "}
          {bug.name} {bug.fixed ? "fixed" : "new"}{" "}
        </p>
      ))}
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

function AppMessage() {
  return (
    <>
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </>
  );
}

export default App;
