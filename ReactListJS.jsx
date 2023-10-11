import React from "react";

function ListComponent() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListComponent;

---------------------------------------------------------------------

import React from "react";

function ListComponent() {
  const items = ["Item 1", "Item 2", "Item 3"];
  const listItems = [];

  items.forEach((item, index) => {
    listItems.push(<li key={index}>{item}</li>);
  });

  return <ul>{listItems}</ul>;
}

export default ListComponent;

-------------------------------------------------------------------------

import React from "react";

function ListComponent() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ListComponent;

--------------------------------------------------------------------


import React from "react";

function ListComponent() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <ul>
      {items.map((item, index) => {
        if (index % 2 === 0) {
          // Render only items with even indices
          return <li key={index}>{item}</li>;
        }
        return null; // Skip items with odd indices
      })}
    </ul>
  );
}

export default ListComponent;

