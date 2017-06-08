// Include React
var React = require("react");

// This is the saved component. It will be used to show a log of saved articles.
var Saved = React.createClass({
  getInitialState: function() {
    return {
      savedArticles: []
    };
  },

  clickToDelete: function(result) {
    this.props.deleteArticle(result);
  },

  componentWillReceiveProps: function(nextProps) {
    var that = this;
    console.log(nextProps);
    var myResults = nextProps.savedArticles.map(function(search, i) {
      var boundClick = that.clickToDelete.bind(that, search);
      return (
        <div className="list-group-item" key={i}>
          <a href={search.url} target="_blank">{search.title}</a>
          <br />
          {search.date}
          <br />
          <button
            type="button"
            className="button is-danger"
            style={{ float: "right", marginTop: "-39px" }}
            onClick={boundClick}
          >
            Delete
          </button>
        </div>
      );
    });

    this.setState({ savedArticles: myResults });
  },

  // Here we render the function
  render: function() {
    return (
      <div className="box">
        <div className="message is-info">
          <div className="message-header">
            <h3>
              <strong>Saved Articles</strong>
            </h3>
          </div>
          <div className="message-body">

            {/* Here we use a map function to loop through an array in JSX*/}
            {this.state.savedArticles}
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
