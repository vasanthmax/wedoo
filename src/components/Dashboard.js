import React from 'react';
import Dashnav from "./Dashnav";
import DashMain from "./DashMain";
import DashFinalList from "./DashFinalList";

const Dashboard = () => {
    return(
        <div className="Dashboard">
            <Dashnav className="Dashnav"></Dashnav>
            <DashMain className="Dashmain"></DashMain>
            <DashFinalList className="Dashfinal"></DashFinalList>
        </div>
    )
}

export default Dashboard;