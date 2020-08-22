import React from 'react';
// import ReactDom from 'react-dom'
import './ShiftSetting.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Bell from './bell.png'
import Group94 from './Group 9454.png'
import Group65 from './Group 65.png'
import Divider from './Divider.png'
import Linkedin from './linkedin 1.png'
import Twitter from './twitter 1.png'
import Facebook from './facebook 1.png'
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { Checkbox } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import MaskGrouph from './Mask Grouph.png';
// import Slider from '@material-ui/core/Slider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import {Dashboard} from '@material-ui/icons';
// import { Link } from 'react-router-dom';

import ShiftTable from './shifttable';
import WardTable from './wardtable';

import { Link } from 'react-router-dom';
import ShiftsMenu from "../ShiftsMenu";
import ToolsMenu from "../ToolMenu";
import AccountsMenu from "../ACMenu";


const marks = [
  {
    name: 5,
    value: 0,
    label: '5miles',
  },

  {
    value: 15,
    label: '15 miles',
  },

  {
    value: 100,
    label: '50 miles+',
  },
];

const columns = [
  { id: 'types', label: 'Types', minWidth: 170 },
  // { id: 'stime', label: 'Start Time', minWidth: 100 },
  {
    id: 'stime',
    label: 'Start Time',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'etime',
    label: 'End Time',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'duration',
    label: 'Duration',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(types, stime, etime, duration) {
  // const duration
  if(etime-stime>=0){
  duration = etime-stime;
  }
  else{
  duration = stime-etime;
  }
  return { types, stime, etime, duration };
}

const rows = [
  createData('Morning', 1830, 1430),
  createData('Evening', 1430, 2230),
  createData('Night', 2230, 630),
];


function valuetext(value) {
  return `${value} miles`;
}

const drawerWidth = 280;

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
    }));

    const useStyles2 = makeStyles({
      root2: {
        width: '100%',
      },
      container2: {
        maxHeight: 440,
      },
    });


const ShiftSettings = ()=>{
  const classes = useStyles1();
    return(
      <div>
      <div className={classes.root}>
         <CssBaseline />
          <AppBar style={{backgroundColor:'#FFF', height:'100px'}}className={classes.appBar} position="fixed">
          <Toolbar>
                <img src={Group65} alt="Group" className="dflogotop"/>
                <Link to="/request">
                <button style={{
                        marginLeft:'500px',
                        paddingTop:"0.3rem",
                        paddingRight:"0.3rem",
                        paddingBottom:"0.3rem",
                        paddingLeft:"0.3rem"
                        }}
                        className="dfbutt7" >
                        <span style={{fontSize:"0.9rem"}}>Post a Request</span></button>
                        </Link>

                        <Link to="/dashboard-facility" style={{color:"#000"}}>
                <button style={{
                        paddingTop:"0.3rem",
                        paddingRight:"0.7rem",
                        paddingBottom:"0.3rem",
                        paddingLeft:"0.7rem"
                        }}
                        className="dfbutt7plain" >
                        <span style={{fontSize:"0.9rem"}}>Dashboard</span></button>
                        </Link>

                        {/* <div id="basic-select" className="Shifts">
                        <select style={{width:'40%'}} className="select1">
                          <option value=" "> Shifts  </option>
                          <option value="one"><Link to="/">Schedule</Link></option>
                          <option value="two"><Link to="/schedule">Scheduled Shifts</Link></option>
                          <option value="three"><Link to="/livefeed">Live feed</Link></option>
                          <option value="four"><Link to="/billing">Billing</Link></option>
                          <option value="four"><Link to="/shiftset">Shift Settings</Link></option>
                        </select>
                        </div> */}



                        <div className="dfshifts">
                        <ShiftsMenu/> </div>

                        <div className="dfshifts">
                        <ToolsMenu />
                        </div>

                        <img src={Bell} alt="Bell" className="dfbell"/>

                        <div className="ac">
                        <AccountsMenu />
                        </div>




                        {/* <div id="basic-select" className="Tools">
                        <select style={{width:'40%'}} className="select1">
                          <option value="one"><Link to="/insights">Insights</Link></option>
                          <option value="two">Reports</option>
                          <option value="three">Audits</option>
                          <option value="four">Staff Evaluation</option>
                          <option value="four">Invoices</option>
                          <option value="four">Time cards</option>

                        </select>
                        </div> */}
                {/* <img src={Bell} alt="Bell" className="bell"/> */}
                {/* <div id="basic-select">
                <select className="select">
                  <option value=" ">  </option>
                  <option value="one"><Link to="/facility">Account</Link></option>
                  <option value="two">Settings</option>
                  <option value="three">Help Center</option>
                  <option value="four">Report a Problem</option>
                  <option value="four">Terms & Policies</option>

                </select>
                </div> */}
              </Toolbar>
          </AppBar>
          <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <Toolbar />
    <div className={classes.drawerContainer}>
      <img src={MaskGrouph} alt="MaskGrouph" className="ssavatar"/>
      <p className="sshead"> Anna C. </p>
      <div>
      <p className="sslist">Schedule </p>
       <p className="sslist"> <Link to="/schedule">Schedule shifts</Link> </p>
       <p className="sslist"><Link to="/livefeed"> Live Feed </Link></p>
       <p className="sslist"><Link to="/billing"> Billing </Link></p>
       <p className="sslist"> <Link to="/shiftset" style={{backgroundColor:"#3f51b5", color:"white", borderWidth:10, borderRadius: 5, borderColor:"green"}}>Shift Settings</Link> </p>



      </div>
    </div>
  </Drawer>
        </div>

        <Container style={{width: "50rem", marginTop: "10rem"}}>
              <form>

              <h2 className="ssh1">Upcoming Shifts for 5th Jul'20-11th Jul'20 </h2>

              <div style={{marginBottom: "3rem"}}>
                <ShiftTable/>

              </div>
              <div style={{marginBottom: "3rem"}}>
                <WardTable/>
              </div>










              </form>
          </Container>
          <div className="ssfooter">
                  <Container style={{width: "60rem"}}>
                  <Grid container>
                   <Grid item xs={3}>
                   <img src={Group65} alt="Group65" className="sslogo"/>
                   </Grid>
                   <Grid item xs={4} style={{marginLeft:'50px'}}>
                    <div className="ssabout">
                     <p className="ssfop"> About us </p>
                     <p className="ssfohe"> Simple Flexible Convenient</p>
                     <p className="sstext">We believe that affinity, common purpose, and trust make powerful networks. NURSD is a secure, private, vetted platform for healthcare facilities looking for high-quality talent and for nurses to explore, identify job opportunities that provide a balance between lifestyle, preferences, and flexibility.</p>
                      <Grid container>
                       <Grid item xs={1}>
                         <img src={Linkedin} alt="Linkedin" className="sslinkedin"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Facebook} alt="Facebook" className="ssfacebook"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Twitter} alt="twitter" className="sstwitter"/>
                       </Grid>
                      </Grid>
                     </div>
                   </Grid>

                   <Grid item xs={1}>
                    <img src={Divider} alt="Divider" className="ssdevider" />
                   </Grid>
                   <Grid item xs={3}>
                    <div>
                     <div className="ssbol">
                     <p className="ssfool"> For Nurses </p>
                     <p className="ssfool2"> About </p>
                     </div>
                     <div>
                     <p className="ssl1"> For Facilities</p>
                     <p className="ssl12"> Press </p>
                     </div>
                     <div>
                     <p className="ssl2"> How It Works </p>
                     <p className="ssl22"> Careers </p>
                     </div>
                     <div>
                     <p className="ssl3"> Blog </p>
                     <p className="ssl32"> Events </p>
                     </div>
                     <div>
                     <p className="ssl4"> FAQs </p>
                     <p className="ssl42"> Contact Us </p>
                     </div>
                    </div>
                   </Grid>

                   </Grid>

                  </Container>
                </div>
      </div>




    );
};
// ReactDom.render(<ShiftSettings />, document.querySelector('#root'))
export default ShiftSettings;
