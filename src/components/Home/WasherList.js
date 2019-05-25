import React, { Component } from "react";
import WasherUnit from "./WasherUnit.js";


class WasherList extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const {machinelist} = this.props;

        return(
            <div>
                <div>
                    <ul>
                        <li>
                            <span>Machine #</span>
                            <span>Occupied</span>
                            <span>Time</span>
                            <span>Report</span>
                        </li>
                        {machinelist.map((machine) => {
                            <WasherUnit
                            key={machine._id}
                            id={machine._id}
                            machine={machine}
                            occupied={machine.occupied}
                            time={machine.time}
                            report={machine.report}
                            />
                        })}
                    </ul>

                </div>
            </div>
        );
    }
}