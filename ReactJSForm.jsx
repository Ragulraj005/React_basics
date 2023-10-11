


___________________________________________________________________________
Class Component:


import React, { Component } from "react";

class FormClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      company: "",
      salary: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, company, salary } = this.state;
    // Do something with the form data, e.g., send it to an API
    console.log("Submitted Data:", { name, age, company, salary });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={this.state.age} onChange={this.handleInputChange} />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={this.state.company} onChange={this.handleInputChange} />
        </label>
        <label>
          Salary:
          <input type="text" name="salary" value={this.state.salary} onChange={this.handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormClassComponent;

_____________________________________________________________________
Functional Component:


import React, { useState } from "react";

function FormFunctionalComponent() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    company: "",
    salary: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to an API
    console.log("Submitted Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
      </label>
      <label>
        Company:
        <input type="text" name="company" value={formData.company} onChange={handleInputChange} />
      </label>
      <label>
        Salary:
        <input type="text" name="salary" value={formData.salary} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormFunctionalComponent;



