import React, { Component } from 'react'
import { connect } from 'react-redux'

class SeatInfor extends Component {
    renderTable = () => {
        const { selectingSeat, deleteSeat } = this.props
        return selectingSeat.map((seat, index) => {
            return (
                <tr key={index} className='text-warning'>
                    <td>{seat.soGhe}</td>
                    <td>{seat.gia.toLocaleString()}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => {
                            deleteSeat(seat)
                        }}>X</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="mt-5" >
                <button className='gheDuocChon'></button><span className='text-light' style={{ fontSize: '30px' }}>Ghế đã đặt
                </span>
                <br />
                <button className='gheDangChon'></button><span className='text-light' style={{ fontSize: '30px' }}>Ghế đang chọn
                </span>
                <br />
                <button className='ghe' style={{ marginLeft: '0' }}></button><span className='text-light' style={{ fontSize: '30px' }}>Ghế chưa đặt
                </span>
                <div className="mt-5 ">
                    <table className="table" border='2'>
                        <thead>
                            <tr className='text-light' >
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td></td>
                                <td>Total</td>
                                <td>
                                    {this.props.selectingSeat.reduce((total, seat ,index) => {
                                        return total +=seat.gia
                                    }, 0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteSeat: (seat) => {
            const action = {
                type: "DELETE_SEAT",
                seat
            }
            dispatch(action)
        }
    }
}
const mapStateToProps = (state) => {
    return {
        selectingSeat: state.seatReducer.seatSelectedList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatInfor)