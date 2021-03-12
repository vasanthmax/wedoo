import React from 'react';
import Avatar from '../assets/avatar.png'
import Dot from '../assets/Dot.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faChartBar,faCalendar,faCommentDots,faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Dashnav = () => {
    return(
        <nav>
            <div className="profile">
                <img className="avatar" src={Avatar} alt=""/>
                <img className="online" src={Dot} alt=""/>
            </div>
            <ul>
                <li><Link to ={ '/dashboard2'} style={{ color: 'inherit', textDecoration: 'inherit'}}><FontAwesomeIcon icon={faHome} size='lg'/></Link></li>
                <li><Link to={'/dashboard'} style={{ color: 'inherit', textDecoration: 'inherit'}}><FontAwesomeIcon icon={faChartBar} size='lg' style={{color:'black'}}/></Link></li>
                <li><FontAwesomeIcon icon={faCalendar} size='lg'/></li>
                <li><FontAwesomeIcon icon={faBell} size='lg'/></li>
            </ul>
            <div className="chat">
            <FontAwesomeIcon icon={faCommentDots} size='lg' />
            </div>

        </nav>
    );
}

export default Dashnav;