import React, { Component } from 'react';

import SeatInfor from './SeatInfor';
import Seat from './Seat';
export default class Home extends Component {

    render() {
        return (
            <>
                <div className="background">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <h2 style={{ color: 'orange' }}>MOVIE SEAT SELECTION</h2>
                                <p className='text-light'>Screen</p>
                                <div className='screen mx-auto'></div>
                                <Seat />
                            </div>
                            <div className="col-4">
                                <h2 className='text-center text-light'>Selected Seat List</h2>
                                <SeatInfor />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
