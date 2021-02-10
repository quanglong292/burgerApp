import React, { Component } from 'react'
import { connect } from "react-redux";
import "./ham.css";


class BurgerApp extends Component {
    render() { 
        const {burger} = this.props;
        return (
            <div className="container">
                <h3 className="display-4 text-success">Bài tập burger</h3>
                <div className="row">
                    <div className="col-7">
                        <h3 className="">burger</h3>
                        <div className="breadTop"></div>
                        <div>Nhân bánh</div>
                        <div className="breadBot"></div>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
    }
}

export default connect (mapStateToProps) (BurgerApp);
