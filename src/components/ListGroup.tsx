import { Fragment, MouseEvent, useState } from "react";

interface Properties {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Properties) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getStyles = (index: number) => {
    return selectedIndex == index
      ? "list-group-item active"
      : "list-group-item ";
  };

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={getStyles(index)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
