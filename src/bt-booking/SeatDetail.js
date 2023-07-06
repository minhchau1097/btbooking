import React, { Component } from 'react'

export default class SeatDetail extends Component {
    render() {
        return (
            <td>
                <button type="checkbox" className='ghe' value={this.props.seatDetail.soGhe} >{this.props.seatDetail.soGhe}</button>
            </td>
        )
    }
}
