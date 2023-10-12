______________________________________________________________
Class Component:

import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;

    // Create a ref using React.createRef()
    this.createRef = React.createRef();
  }

  componentDidMount() {
    // Access the DOM element using callback ref
    if (this.myRef) {
      this.myRef.focus();
    }

    // Access the DOM element using createRef
    if (this.createRef.current) {
      this.createRef.current.value = "Using createRef";
    }
  }

  render() {
    return (
      <div>
        {/* Input with callback ref */}
        <input
          ref={(input) => (this.myRef = input)}
          placeholder="Using callback ref"
        />

        <br />

        {/* Input with createRef */}
        <input ref={this.createRef} placeholder="Using createRef" />
      </div>
    );
  }
}

export default MyComponent;

____________________________________________________________________________
Functional Component:

import React, { useEffect, useRef } from "react";

const MyComponent = () => {
  // Create a ref using useRef()
  const myRef = useRef(null);

  useEffect(() => {
    // Access the DOM element using useRef()
    if (myRef.current) {
      myRef.current.focus();
    }
  }, []);

  return (
    <div>
      {/* Input with useRef */}
      <input ref={myRef} placeholder="Using useRef" />
    </div>
  );
};

export default MyComponent;
