import React, { Component } from "react";
import { connect } from "react-redux";
import { editUserAction } from "../../redux/actions/userAction";

class User extends Component {
  handleEdit = (user) => {
    const {editUser} = this.props;
    editUser(user);
  }
  render() {
    const {user} = this.props;
    return (
      <tr className="user-item">
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => this.handleEdit(user)}
          >
            Edit
          </button>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (user) => {
      dispatch(editUserAction(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(User);
