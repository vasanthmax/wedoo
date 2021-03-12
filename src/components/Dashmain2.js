import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StylesProvider } from '@material-ui/core/styles';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Dashmain2 = () => {
    const StyledTableCell = withStyles((theme) => ({
		head: {
		  backgroundColor: '#103641',
		  color: theme.palette.common.white,
		  fontSize: '10px',
		},
		body: {
		  fontSize: '10px',
		},
	  }))(TableCell);
	  
	  const StyledTableRow = withStyles((theme) => ({
		root: {
		  '&:nth-of-type(even)': {
			backgroundColor: '#F4F7FC',
			
		  },


		},
	  }))(TableRow);
	  
	  function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	  }
	  
	  const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		
	  ];
	  
	  const useStyles = makeStyles({
		table: {
		  maxWidth: '700px',
		  
		},
		
		tableContainer: {
			boxShadow: '0 30 60 #00000017',
			maxWidth:'500px',
			maxHeight:'200px',
			borderRadius:'25px',
			boxShadow: '0px 30px 60px #00000017',
			padding:'20px',
            marginRight:'10px'
		}
	  });
	  const classes = useStyles();
    return(
        <div className = "Dashmain2">
            <div className="welcome">
                <p>Welcome Lorem ipsum</p>
                <h4>2 January 2020</h4>
            </div>
            <div className="projects">
                <motion.div className="project-detail" initial={{x: -100 }} animate={{x: 0}} transition={{ duration: 0.5, type: "tween" }}>
                    <div className="project-name">
                        <div className="name">
                            <h5>Proposed Project XYZ </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                        </div>
                        <div className="black-box"></div>
                        <div className="project-number" style={{background:"#F6CF51"}}>
                            <div className="dot"></div>
                            <p>Project 1</p>
                        </div>
                    </div>
                    <div className="track">
                    <input type="range"/>
                    <div className="animate-track"></div>

                    </div>
                </motion.div>
                <motion.div className="project-detail" initial={{x: 100 }} animate={{x: 0}} transition={{ duration: 0.5, type: "tween" }}>
                    <div className="project-name">
                        <div className="name">
                            <h5>Proposed Project ABC </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                        </div>
                        <div className="black-box"></div>
                        <div className="project-number" style={{background:"#19CA7A"}}>
                            <div className="dot"></div>
                            <p>Project 2</p>
                        </div>
                    </div>
                    <div className="track">
                    <input type="range"/>
                    <div className="animate-track"></div>

                    </div>
                </motion.div>
                <motion.div className="project-detail" initial={{x: -100 }} animate={{x: 0}} transition={{ duration: 0.5, type: "tween" }}>
                    <div className="project-name">
                        <div className="name">
                            <h5>Proposed Project MNO </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                        </div>
                        <div className="black-box"></div>
                        <div className="project-number" style={{background:"#7B66FF"}}>
                            <div className="dot"></div>
                            <p>Project 3</p>
                        </div>
                    </div>
                    <div className="track">
                    <input type="range"/>
                    <div className="animate-track"></div>

                    </div>
                </motion.div>
                <motion.div className="project-detail" initial={{x: 100 }} animate={{x: 0}} transition={{ duration: 0.5, type: "tween" }}>
                    <div className="project-name">
                        <div className="name">
                            <h5>Proposed Project KLM </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                        </div>
                        <div className="black-box"></div>
                        <div className="project-number" style={{background:"#FF9566"}}>
                            <div className="dot"></div>
                            <p>Project 4</p>
                        </div>
                    </div>
                    <div className="track">
                    <input type="range"/>
                    <div className="animate-track"></div>

                    </div>
                </motion.div>
            </div>
            <motion.div className="calendar" initial={{scale: 1.4 }} animate={{scale:1}} transition={{ duration: 0.5, type: "tween" }}>
                <div className="nav">
                    <ul>
                        <li>Overall</li>
                        <li>Tasks</li>
                        <li>Payment</li>
                    </ul>
                </div>
                <DayPicker numberOfMonths={3} className="calendar-month"/>;
                <div className="project-list">
                    <button style={{background:"#F6CF51"}}>Project 1</button>
                    <button style={{background:"#7B66FF"}}>Project 2</button>
                    <button style={{background:"#19CA7A"}}>Project 3</button>
                    <button style={{background:"#FF9566"}}>Project 4</button>
                </div>
            </motion.div>
            <div className="table">
            <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className = {classes.tableHeader}>
          <TableRow>
            <StyledTableCell>EMPLOYEE / LABOURER</StyledTableCell>
            <StyledTableCell align="right">ASSIGNED TO</StyledTableCell>
            <StyledTableCell align="right">ASSIGNED BY</StyledTableCell>
            <StyledTableCell align="right">ASSIGNED TASK</StyledTableCell>
            <StyledTableCell align="right">DEADLINE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="addProject">
        <FontAwesomeIcon icon={faPlus} className="faplus"/>
        <h3>Add New Project</h3>
    </div>
            </div>
        </div>
    )
}

export default Dashmain2;