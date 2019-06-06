import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var SearchContainer = () => {};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
  };
};

SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
