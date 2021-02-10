import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <h3>Function props</h3>
                <p>ca sĩ: {this.props.tenCaSi}</p>
                <p>bài hát: {this.props.tenBaiHat}</p>
            </div>
        )
    }
}
