import React, { Component } from 'react'
import { connect } from 'react-redux';
import SeatItem from './SeatItem';
class Seat extends Component {
    renderSeat = () => {

        const { listSeat } = this.props
        console.log(listSeat)
        return listSeat.map((seat, index) => {
            console.log(seat)
                return (
                    <tr key={index}>
                        <td className='rowNumber'>{seat.hang}</td>
                        <SeatItem seat={seat}/>
                    </tr>
                )
            
        })

    }
    render() {
        return (

            <table className="table text-light mt-3">
               
                <tbody>
                    {this.renderSeat()}
                </tbody>
            </table>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        listSeat: state.seatReducer.seatList
    }
}
export default connect(mapStateToProps, null)(Seat);