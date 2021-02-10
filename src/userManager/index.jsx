import React, { Component } from "react";
import Modal from "./Modal";
import Search from "./SearchingEngine";
import UserList from "./UserList";

class UserManagement extends Component {
  render() {
    return (
      <section className="user-managerment container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search/>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        
        <UserList/>

        <Modal/>
      </section>
    );
  }
}
export default UserManagement;
