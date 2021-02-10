import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserAction, updateUserAction } from "../../redux/actions/userAction";

class Modal extends Component {
  state = {
    username: "",
    name: "",
    email: "",
    phoneNumber: "",
    type: "",
  };

  handleChange = (event) => {
    const element = event.target;
    const { value, name } = element;
    this.setState({
      // name của input đang trùng với state's key
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault(); // tránh load lại trang khi nhấn submit
    // this.props.addUser(this.state);
    const {id} = this.state;
    if (id) {
      // edit
      this.props.updateUser(this.state);
    } else {
      // add
      this.props.addUser(this.state);
    }
  };

  render() {
    const {username, name, email, phoneNumber, type} = this.state;
    return (
      <div
        className="form-user modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    value={phoneNumber}
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleChange}
                    value={type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // chạy sau render và khi có props hoac state thay doi
  componentDidUpdate(prevProps, prevState) {
    console.log("previous Props: ", prevProps);
    console.log("previous State: ", prevState);
    console.log("Current props: ", this.props);
    console.log("componentDidUpdate");

    // điều kiện dừng loop vô tận
    if (this.props.userEdit !== prevProps.userEdit) {
      this.setState({
        ...this.props.userEdit,
      }); 
    } 
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      // dispatch action lên reducer
      dispatch(addUserAction(user));
    },
    updateUser: (user) => {
      dispatch(updateUserAction(user));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
