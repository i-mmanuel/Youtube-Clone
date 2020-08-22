import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchTermSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search:</label>
            <div className="ui fluid icon input">
              <input
                type="text"
                placeholder="Search a very wide input..."
                onChange={this.onInputChange}
                value={this.state.searchTerm}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
