import React, { Component } from "react";
import User from "../User";
import {connect} from "react-redux";

class UserList extends Component {
    renderUserList = () => {
        const {userList, keyWord} = this.props;
        return userList.filter((val, i) => val.name.includes(keyWord)).map((item, index) => {
            return <User key={index} user={item}/>;
        });
    }
  render() {
    return (
      <div className="user-list">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUserList()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        keyWord: state.userReducer.keyWord,
    }
}

export default connect(mapStateToProps)(UserList);


