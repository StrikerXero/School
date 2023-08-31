import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { repoSearchCompleted, searchGithub, searchTextChanged } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Search Repos:</h3>
        <Search {...this.props}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchTextChanged: (text) => dispatch(searchTextChanged(text)),
    onSearch: (text) => searchGithub(text).then(repos => dispatch(repoSearchCompleted(repos)))
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos,
    searchText: state.searchInputted
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);