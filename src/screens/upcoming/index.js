import React from 'react';
import ReactDom from 'react-dom'
import Grid from '@material-ui/core/Grid';
import MaskGroup from './Mask Group.png';
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Group65 from './Group 65.png'
import Container from '@material-ui/core/Container';
import Bookmark1 from './bookmark 1.png'
import Bell from './bell.png'
import Group94 from './Group 9454.png'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MaskGrouph from './Mask Grouph.png'
import Group76 from './Group 76 .png'
import Group44 from './Group 44.png'
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import ShiftsMenu from "../ShiftsMenu";
import ToolsMenu from "../ToolMenu";
import AccountsMenu from "../ACMenu";


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

const Faci = ()=>{
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
                        marginRight:'10px',
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
         <img src={MaskGrouph} alt="MaskGrouph" className="ucavatar"/>
         <p className="uchead"> Anna C. </p>
         <div>
         <p className="uclist"> Schedule </p>
         <p className="uclist">Schedule Shifts </p>
         <p className="uclist"> Live Feed</p>
         <p className="uclist"> Billing </p>
         <p className="uclist"> Shift Settings </p>

         </div>
       </div>
     </Drawer>
    </div>
           <div className="ucupcoming">
                        <p style={{marginBottom:'10px'}}className="ucup"> Scheduled Shifts for </p>
                        <img src={Group76} alt="Group76" className="ucleft"/>
                        <p style={{marginBottom:'10px'}} className="ucup"> 5th Jul'20 - 11thJul'20</p>
                        <img src={Group44} alt="Group44" className="ucright"/>
                        <Divider />
          </div>

         <div className="ucany">
         <p className="uchadnt"> You haven't added any shift till now, start adding shift here</p>
         <div>
         <button style={{
                 paddingTop:"0.3rem",
                 paddingRight:"0.7rem",
                 paddingBottom:"0.3rem",
                 paddingLeft:"0.7rem"
                 }}
                 className="ucbutt" >
                 <span style={{fontSize:"0.9rem"}}>Add Shifts</span></button>
        </div>
       </div>
    </div>

    );
};
// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;
