/**created just simple h1 tag*/
const heading = React.createElement(
  "h1",
  { id: "heading", className: "headingClass" },
  "Hello world"
);
//this heading is javascript object, this will return object

const root = ReactDOM.createRoot(document.getElementById("root")); // create root inside DOM

// rendring header in to root element
root.render(heading);
// this render method basically responsbile for converting our heading javascript object to convert html tag and
// put it up into the DOM

/** Parent Singel Child Structure */
/**
 * <div id="parent">
 *      <div id="child">
 *           <h1>Hello I am h1 tag</h1>
 *      </div>
 * </div>
 */

const test1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello I am h1 tag")
  )
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root.render(test1);

/** Parent multiple Child Structure */
/**
 * <div id="parent">
 *      <div id="child">
 *           <h1>Hello I am h1 tag</h1>
 *           <h2>Hello I am h2 tag</h1>
 *      </div>
 * </div>
 */

const test2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I h1 tag"),
    React.createElement("h2", {}, "Hello I h2 tag"),
  ])
);

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root.render(test2);
