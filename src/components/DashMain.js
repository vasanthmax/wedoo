import React from "react"
import Avatar from 'react-avatar';
import { withStyles, makeStyles, duration } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StylesProvider } from '@material-ui/core/styles';
import {GanttChart} from 'ibm-gantt-chart-react';
import 'ibm-gantt-chart/dist/ibm-gantt-chart.css';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";



const DashMain = () => {
	const data = [
		{
		  id: 'NURSES+Anne',
		  name: 'Anne',
		  activities: [
			{
			  id: 'SHIFTS+Emergency+Monday+2+8',
			  name: 'Emergency',
			  start: 1474880400000,
			  end: 1474902000000,
			},
		  ],
		},
		{
		  id: 'NURSES+Bethanie',
		  name: 'Bethanie',
		  activities: [],
		},
		{
		  id: 'NURSES+Betsy',
		  name: 'Betsy',
		  activities: [
			{
			  id: 'SHIFTS+Emergency+Wednesday+12+18',
			  name: 'Emergency',
			  start: 1475089200000,
			  end: 1475110800000,
			},
			{
			  id: 'SHIFTS+Emergency+Saturday+12+20',
			  name: 'Emergency',
			  start: 1475348400000,
			  end: 1475377200000,
			},
			{
			  id: 'SHIFTS+Consultation+Friday+8+12',
			  name: 'Consultation',
			  start: 1475247600000,
			  end: 1475262000000,
			},
		  ],
		},
		{
		  id: 'NURSES+Cathy',
		  name: 'Cathy',
		  activities: [
			{
			  id: 'SHIFTS+Emergency+Sunday+20+2',
			  name: 'Emergency',
			  start: 1475463600000,
			  end: 1475485200000,
			},
			{
			  id: 'SHIFTS+Emergency+Saturday+12+20',
			  name: 'Emergency',
			  start: 1475348400000,
			  end: 1475377200000,
			},
			{
			  id: 'SHIFTS+Emergency+Monday+18+2',
			  name: 'Emergency',
			  start: 1474938000000,
			  end: 1474966800000,
			},
		  ],
		},
		{
		  id: 'NURSES+Cindy',
		  name: 'Cindy',
		  activities: [
			{
			  id: 'SHIFTS+Emergency+Saturday+20+2',
			  name: 'Emergency',
			  start: 1475377200000,
			  end: 1475398800000,
			},
			{
			  id: 'SHIFTS+Consultation+Friday+8+12',
			  name: 'Consultation',
			  start: 1475247600000,
			  end: 1475262000000,
			},
			{
			  id: 'SHIFTS+Consultation+Tuesday+8+12',
			  name: 'Consultation',
			  start: 1474988400000,
			  end: 1475002800000,
			},
		  ],
		},
	  ];
	  const config = {
		data: {
		  // Configures how to fetch resources for the Gantt
		  resources: {
			data: data, // resources are provided in an array. Instead, we could configure a request to the server.
			// Activities of the resources are provided along with the 'activities' property of resource objects.
			// Alternatively, they could be listed from the 'data.activities' configuration.
			activities: 'activities',
			name: 'name', // The name of the resource is provided with the name property of the resource object.
			id: 'id', // The id of the resource is provided with the id property of the resource object.
		  },
		  // Configures how to fetch activities for the Gantt
		  // As activities are provided along with the resources, this section only describes how to create
		  // activity Gantt properties from the activity model objects.
		  activities: {
			start: 'start', // The start of the activity is provided with the start property of the model object
			end: 'end', // The end of the activity is provided with the end property of the model object
			name: 'name', // The name of the activity is provided with the name property of the model object
		  },
		},
		// Configure a toolbar associated with the Gantt
		toolbar: [
		  'title',
		  'search',
		  'separator',
		  {
			type: 'button',
			text: 'Refresh',
			fontIcon: 'fa fa-refresh fa-lg',
			onclick: function(ctx) {
			  ctx.gantt.draw();
			},
		  },
		  'fitToContent',
		  'zoomIn',
		  'zoomOut',
		],
		title: 'Simple Gantt', // Title for the Gantt to be displayed in the toolbar
	  };

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
		  maxWidth: '650px',
		  
		},
		
		tableContainer: {
			boxShadow: '0 30 60 #00000017',
			maxWidth:'650px',
			minHeight:'287px',
			borderRadius:'25px',
			boxShadow: '0px 30px 60px #00000017',
			padding:'20px'
		}
	  });
	  const classes = useStyles();
	  //Gnatt Chart
	  
// Title for the Gantt to be displayed in the toolbar
    return(
        <div className = "dash-main">
            <h2>Project XYZ Dashboard</h2>
            <div className = "topic-title">
                <motion.div className="title-box" initial={{scale:1.4}} animate={{scale:1}} transition={{ duration: 0.3, type: "tween" }}>Drawings</motion.div>
                <motion.div className="title-box" initial={{scale:1.4}} animate={{scale:1}} transition={{ duration: 0.3, type: "tween" }}>3D Renders</motion.div>
                <motion.div className="title-box" initial={{scale:1.4}} animate={{scale:1}} transition={{ duration: 0.3, type: "tween" }}>Documents</motion.div>
            </div>
			<GanttChart config={config} className=".ibm-gantt-chart-react"/>
			<div className="table-team">
			<motion.TableContainer component={Paper} className={classes.tableContainer} initial={{x:-100}} animate={{x:0}} transition={{ duration: 0.9, type: "tween" }}>
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
    </motion.TableContainer>
	<motion.div className="team"  initial={{x:100}} animate={{x:0}} transition={{ duration: 0.9, type: "tween" }}>
	<div className="drp">
			<p>Project XYZ Team</p>
			<FontAwesomeIcon icon={faSortDown} />
		</div>
		<div className="team-list">
			<div className="member">
				<p> 3 </p>
				<Avatar name="Wim Mostmans" size="30" round={true} />
				<div className="mem-name">
					<h5>Karen Moss</h5>
					<p>Hotel Swan</p>
				</div>
				<Avatar name="Wim Mostmans" size="30" round={true} className="avatar"/>
			</div>
			<div className="member">
				<p> 4 </p>
				<Avatar name="Wim Mostmans" size="30" round={true} />
				<div className="mem-name">
					<h5>Karen Moss</h5>
					<p>Hotel Swan</p>
				</div>
				<Avatar name="Wim Mostmans" size="30" round={true} className="avatar"/>
			</div>
			<div className="member">
				<p> 5 </p>
				<Avatar name="Wim Mostmans" size="30" round={true} />
				<div className="mem-name">
					<h5>Karen Moss</h5>
					<p>Hotel Swan</p>
				</div>
				<Avatar name="Wim Mostmans" size="30" round={true} className="avatar"/>
			</div>
			<div className="member">
				<p> 6 </p>
				<Avatar name="Wim Mostmans" size="30" round={true} />
				<div className="mem-name">
					<h5>Karen Moss</h5>
					<p>Hotel Swan</p>
				</div>
				<Avatar name="Wim Mostmans" size="30" round={true} className="avatar"/>
			</div>
			<div className="member">
				<p> 7 </p>
				<Avatar name="Wim Mostmans" size="30" round={true} />
				<div className="mem-name">
					<h5>Karen Moss</h5>
					<p>Hotel Swan</p>
				</div>
				<Avatar name="Wim Mostmans" size="30" round={true} className="avatar"/>
			</div>
		</div>

	</motion.div>
	</div>
		
	
        </div>
    )
}

export default DashMain;