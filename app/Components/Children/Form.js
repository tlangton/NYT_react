// Include React
var React = require("react");

// Component creation
var Form = React.createClass({
  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { topic: "", startYear: "", endYear: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // When a user submits...
  handleClick: function() {
    // Set the parent to have the search term
    this.props.setTerm(
      this.state.topic,
      this.state.startYear,
      this.state.endYear
    );
  },

  // Here we render the function
  render: function() {
    return (
      // <div class="container">
      //   <div class="notification">
      (
        <div className="box">
          <div className="message is-info">
            <div className="message-header">
              <h2>
                <strong>Search</strong>
              </h2>
            </div>
            <div className="message-body">

              <form>
                {/* <div className="form-group"> */}
                <h4>
                  <strong>Topic</strong>
                </h4>
                <input
                  type="text"
                  className="input is-info"
                  id="topic"
                  onChange={this.handleChange}
                  required
                />
                <br />

                <div className="columns">
                  <div className="column is-5">

                    <h4>
                      <strong>Start Year</strong>
                    </h4>
                    <input
                      type="text"
                      className="input is-info"
                      id="startYear"
                      onChange={this.handleChange}
                      required
                    />
                    <br />
                  </div>
                  <div className="column is-5">
                    <h4>
                      <strong>End Year</strong>
                    </h4>
                    <input
                      type="text"
                      className="input is-info"
                      id="endYear"
                      onChange={this.handleChange}
                      required
                    />
                    <br />
                  </div>
                  <button
                    type="button"
                    className="button is-info"
                    style={{
                      float: "right",
                      marginTop: "25px"
                    }}
                    onClick={this.handleClick}
                  >
                    Search
                  </button>
                </div>

              </form>
            </div>
          </div>{" "}
        </div>
      )
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
