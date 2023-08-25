import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  return (
    //created components
    <div>
      <NumberOfStudents />

      <div className="enrolledDiv"></div>
      <div className="waitlistedDiv"></div>
    </div>
  );
};

class NumberOfStudents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enrolledStudents: 87,
      waitlistedStudents: 8,
      multiEnrolledStudentsValue: 0,
      multiWaitlistedStudentsValue: 0,
    };
  }

  incrementEnrolledStudents() {
    this.setState({ enrolledStudents: this.state.enrolledStudents + 1 });
  }
  incrementWaitlistedStudents() {
    this.setState({ waitlistedStudents: this.state.waitlistedStudents + 1 });
  }
  addMultiEnrolledStudents() {
    this.setState({
      enrolledStudents:
        this.state.enrolledStudents +
        parseInt(this.state.multiEnrolledStudentsValue),
    });
  }
  addMultiWaitlistedStudents() {
    this.setState({
      waitlistedStudents:
        this.state.waitlistedStudents +
        parseInt(this.state.multiWaitlistedStudentsValue),
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
          <button onClick={this.incrementEnrolledStudents.bind(this)}>
            Increment Enrolled Students By 1
          </button>
          <h3>Add Multiple Enrolled Students</h3>

          <input
            type="number"
            onChange={(event) =>
              this.setState({ multiEnrolledStudentsValue: event.target.value })
            }
            value={this.state.multiEnrolledStudentsValue}
          />

          <button onClick={this.addMultiEnrolledStudents.bind(this)}>
            Increase Students
          </button>
        </div>
        <div>
          <h1>WaitListed Students: {this.state.waitlistedStudents}</h1>
          <button onClick={this.incrementWaitlistedStudents.bind(this)}>
            Add 1 Waitlisted Student
          </button>
          <h3>Add Multiple Waitlisted Students</h3>
          <input 
            type="number"
            onChange={event => 
                this.setState({ multiWaitlistedStudentsValue: event.target.value })
            }
            value={this.state.multiWaitlistedStudentsValue}
             />
          <button onClick={this.addMultiWaitlistedStudents.bind(this)}>
            Increase Students
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
