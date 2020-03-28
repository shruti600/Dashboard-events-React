import React, { Component } from 'react';
import SmallHomeCards from './SmallHomeCards';
import { FaRegCalendarPlus,FaTicketAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";

export default class H1 extends Component {
    render() {
        return (
            <div>
                <div className="homeRow1">
                    <SmallHomeCards icon={<FaRegCalendarPlus/>} number="12" name="New Events" />
                    <SmallHomeCards icon={<IoIosPeople/>} number="165" name="Registrations" />
                    <SmallHomeCards icon={<FaTicketAlt/>} number="512" name="Tickets Sold" />
                    <SmallHomeCards icon={<MdAttachMoney/>} number="$ 2400" name="Earning" />
                </div>
            </div>
        )
    }
}
