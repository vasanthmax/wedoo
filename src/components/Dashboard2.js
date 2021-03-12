import React from 'react';
import Dashnav from './Dashnav';
import Dashmain2 from './Dashmain2'
import DashFinal2 from "./Dashfinal2";

const Dashboard2 = () => {
    return(
        <div className="DashBoard2">
            <Dashnav></Dashnav>
            <Dashmain2></Dashmain2>
            <DashFinal2 className="Dashfinal"></DashFinal2>
        </div>
    )
}
export default Dashboard2;