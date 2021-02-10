// Props truyền data các component
import React, { Component } from 'react'
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps'

export default class Props extends Component {
    state = {
        tenCaSi: 'Binz',
        tenBaiHat: 'bigcity',
    };
    render() {
        return (
            <div>
                <h2>Demo props</h2>
                {/* Truyền từ component Props sang component FunctionProps  */}
                <FunctionProps tenCaSi={this.state.tenCaSi} tenBaiHat={this.state.tenBaiHat}/>
                <ClassProps tenCaSi={this.state.tenCaSi} tenBaiHat={this.state.tenBaiHat}/>
            </div>
        )
    }
}
