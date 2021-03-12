import React from 'react';
import { faSearch,faClock,faPlus,faBell,faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'react-avatar';
import { motion } from 'framer-motion';
const DashFinal2 = () => {
    return(
        <div className="dashfinal2">
            <motion.div className="search" initial={{x: -100 }} animate={{x: 0}} transition={{ duration: 0.5, type: "tween" }}>
                <input type="text" placeholder="Search"/>
                <FontAwesomeIcon icon={faSearch} size='20'/>
            </motion.div>

            <motion.div className="alerts" initial={{scale: 1.4 }} animate={{scale: 1}} transition={{ duration: 0.5, type: "tween" }}>
                <div className="upcoming">
                    <div className="time">
                    <p>Upcoming Appointments</p>
                    <p><FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;09:00</p>
                    </div>
                    <div className="add">
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                </div>
             <div className="notifications-list">
             <div className="meeting-alerts">
                    <div className="noti">
                        <FontAwesomeIcon icon={faBell}/>
                        <ul>
                            <li><Avatar name="Foo Bar" round={true} size="30px"/></li>
                            <li><Avatar name="Foo Bar" round={true} size="30px"/></li>
                            <li><p>+ 10</p></li>
                        </ul>
                    </div>
                    <div className="meet-details">
                        <p>Site meeting to  finalise the color 
                            of paint and other details</p>
                    </div>
                    <div className="project">
                    <div className="name">
                    <p>09:00</p>
                    <p>Project MNO</p>
                    </div>
                    <div className="add-button">
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                </div>
                </div>

                <div className="project-time">
                    <div className="bell-icon">
                        <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className="vertical">
                    <p>12:00</p>
                    <p>Project ABC</p>
                    </div>
                </div>

                <div className="project-time">
                    <div className="bell-icon" style={{background:"#F6CF51"}}>
                        <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className="vertical">
                    <p>12:00</p>
                    <p>Project ABC</p>
                    </div>
                </div>

             </div>

            </motion.div>

            <motion.div className="notifications" initial={{y: 100 }} animate={{y: 0}} transition={{ duration: 0.5, type: "tween" }}>
                <p>Notifications</p>
                <div className="sticky-note">
                    <div className="search-button">
                        <input type="text" placeholder="Search here..."/>
                        <button><FontAwesomeIcon icon={faFilter}/>Filter</button>

                    </div>
                    <div className="note">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="note">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="note">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default DashFinal2;