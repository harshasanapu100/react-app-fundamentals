import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import Message from "./components/Message";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import FormUsingRefHook from "./components/FormUsingRefHook";
import FormUsingStateHook from "./components/FormUsingStateHook";
import ReactHookForm from "./components/ReactHookForm";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import FormValidationUsingYup from "./components/FormValidationUsingYup";

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

function AppState() {
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

function AppCartState() {
  const [cartItems, setCartItems] = useState(["product1", "product2"]);

  return (
    <>
      <div>
        <NavBar cartItemsCount={cartItems.length}></NavBar>
        <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
      </div>
    </>
  );
}

function AppGameState() {
  const [game, setGame] = useState({ id: 1, player: { name: "John" } });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

function AppExpandable() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iure
        consequuntur totam fuga ducimus culpa voluptas nulla. Qui ipsum
        excepturi et molestias quae. Ratione numquam ea veniam ipsa, fugiat
        impedit accusantium iure provident eum corrupti alias magnam maiores ut
        cupiditate qui cumque praesentium! Corrupti obcaecati velit dignissimos
        cumque alias magni nemo. Natus eum cupiditate consequatur animi
        voluptatem maiores! Ut animi voluptas assumenda. Voluptas nulla commodi
        eaque culpa fugiat quam, perferendis sapiente ex tempora. Tenetur
        consequatur necessitatibus deleniti corporis perspiciatis corrupti quae
        voluptate dolore eaque. Laudantium error expedita similique nulla
        sapiente quas, quasi natus, aperiam vitae, fugit corporis sed nam eaque?
      </ExpandableText>
    </div>
  );
}

function AppFormUsingRefHook() {
  return <FormUsingRefHook></FormUsingRefHook>;
}

function AppFormUsingStateHook() {
  return <FormUsingStateHook></FormUsingStateHook>;
}

function AppReactHookForm() {
  return <ReactHookForm></ReactHookForm>;
}

function App() {
  return <FormValidationUsingYup></FormValidationUsingYup>;
}

export default App;
