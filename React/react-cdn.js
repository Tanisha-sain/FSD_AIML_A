const parent = document.getElementById("root");
const element = React.createElement("h1", {}, "This is new heading");
const ele1 = React.createElement("h2", {}, "Shopping Cart");
const item1 = React.createElement("li", {}, "Item-1");
const item2 = React.createElement("li", {}, "Item-2");
const list = React.createElement("ul", {}, item1, item2);
const root = ReactDOM.createRoot(parent);
const para = <p>This is a new para</p>;
root.render([element, ele1, list, para]);