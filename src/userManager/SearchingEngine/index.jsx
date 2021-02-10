import React, { Component } from "react";
import { connect } from "react-redux";
import {searchAction} from "../../redux/actions/userAction";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="input-search form-control mb-3 w-50"
        placeholder="Search Name ..."
        onChange={(e) => {
          const {value} = e.target;
          this.props.searchUser(value);
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (keyword) => {
      dispatch(searchAction(keyword));
    }
  }
}

export default  connect (null, mapDispatchToProps)(Search)
