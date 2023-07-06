import React, { Component } from 'react'
import { connect } from 'react-redux'


class SeatItem extends Component {
    renderDetail = () => {
        const { seat ,selectingSeat } = this.props
        if (seat.hang === '') {
            return seat.danhSachGhe.map((seatDetail, index) => {
                return (
                    <td key={index}>
                        <span className='rowNumber' >{seatDetail.soGhe}</span>
                    </td>
                )

            })
        } else {

            return seat.danhSachGhe.map((seatDetail, index) => {
                let selectedSeat = '';
                let disbled = false;
                if (seatDetail.daDat) {
                    selectedSeat = 'gheDuocChon'
                    disbled = true
                }

                let cssSelectingSeat = '';
                let indexSelecting = selectingSeat.findIndex((seat)=> seat.soGhe === seatDetail.soGhe)
                if(indexSelecting !== -1 ){
                    cssSelectingSeat = 'gheDangChon'
                }
                return (
                    <td key={index}>
                        <button type="checkbox" disabled={disbled} className={`ghe ${selectedSeat} ${cssSelectingSeat}`} onClick={() => {
                            this.props.selectSeat(seatDetail)

                        }}>{seatDetail.soGhe} </button>
                    </td>
                )

            })
        }
    }
    render() {
        return (
            <>
                {this.renderDetail()}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectSeat: (seat) => {
            const action = {
                type: "SELECT_SEAT",
                seat
            }
            dispatch(action)
        }
    }
}
const mapStateToProps = (state) =>{
    return{
        selectingSeat: state.seatReducer.seatSelectedList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeatItem)
