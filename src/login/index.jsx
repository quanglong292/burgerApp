import React, { Component } from 'react'

export default class Login extends Component {
    // State: đồng bộ UI và data kế thừa từ Components
    state = {
        isLogin : false,
    };
    /**
     * -true: đăng nhập thành công
     */
    isLogin = false;

    // Tạo phương thức nên dùng arrow function
    handleLogin = async () => {
        // this.state.isLogin = true;
        // kế thừa từ Components
        // setState là hàm bất đồng bộ => xử lý dùng async/await, hoặc callback
        await this.setState({
            isLogin: true,
        }, () => {
            console.log(this.state.isLogin);
        });
    }
    renderLogin = () => {
        if (this.state.isLogin) {
            return <p>Le Quang Long</p>
        } else {
            return <button className="btn btn-info" onClick={this.handleLogin}>Login</button>
        }

        // return (this.isLogin) ? <p>Le Quang Long</p> : <button className="btn btn-info">Login</button>;
    };

    render() {
        return (
            <div>
                <h2>If-else trong JSX</h2>
                {this.renderLogin()} {/* Cách gọi hàm trong JSX */}
            </div>
        );
    }
}
