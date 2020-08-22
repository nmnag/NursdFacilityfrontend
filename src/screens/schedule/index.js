import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import Bookmark from './bookmark 1.png';
import MaskGroup from './Mask Group.png';
import Calendar from './calendar 1.png';
import Group76 from './Group 76 .png'
import Group44 from './Group 44.png'
import Bell from './bell.png'
import Clock from './clock.png';
import Settings from './settings.png'
import Group65 from './Group 65.png'
import Group94 from './Group 9454.png'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MaskGrouph from './Mask Grouph.png'
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
// import { Link } from 'react-router-dom';

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
                        paddingTop:"0.3rem",
                        paddingRight:"0.7rem",
                        paddingBottom:"0.3rem",
                        paddingLeft:"0.7rem"
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
       <img src={MaskGrouph} alt="MaskGrouph" className="sdavatar"/>
       <p className="head7"> Anna C. </p>
       <div>
       <p className="sdlist">Schedule </p>
       <p className="sdlist"> <Link to="/schedule" style={{backgroundColor:"#3f51b5", color:"white", borderWidth:10, borderRadius: 5, borderColor:"green"}}>Schedule shifts</Link> </p>
       <p className="sdlist"><Link to="/livefeed"> Live Feed </Link></p>
       <p className="sdlist"><Link to="/billing"> Billing </Link></p>
       <p className="sdlist"> <Link to="/shiftset">Shift Settings</Link> </p>


       </div>
     </div>
   </Drawer>
         </div>
          <Container style={{width: "40rem", height:'1000px'}}>
                    <form>
                    <div className="sdupcoming">
                    <p style={{marginBottom:'10px'}}className="sdup"> Scheduled Shifts for </p>
                    <img src={Group76} alt="Group76" className="sdleft"/>
                    <p style={{marginBottom:'10px'}} className="sdup"> 12th Jul'20 - 19thJul'20</p>
                    <img src={Group44} alt="Group44" className="sdright"/>
                    <Divider />
                    </div>
                    <Card className="sddoc">
                           <CardContent>
                           <div>
                             <h2 className="sdh2"> Martha C. </h2>
                          </div>
                            <div>
                             <p className="sdpopo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="sdcalendar" />
                               <p className="sddou"> July 13th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="sdclock"/>
                               <p className="sdtime"> 6:30AM - 2:30PM</p>
                               <h3 className="sdhead"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="sdsettings"/>
                              <p className="sdspecs"> RN </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="sdbutt2">
                                      <span style={{fontSize:"0.9rem"}}> edit details</span></button>
                              </div>
                            </div>
                           </CardContent>
                         </Card>
                         <Card className="sddoc">
                                <CardContent>
                                <div>
                                  <h2 className="sdh2"> Tim B. </h2>
                               </div>
                                 <div>
                                  <p className="sdpopo">Illinoise, USA </p>
                                 </div>
                                  <div>
                                    <img src={Calendar} alt="Calendar" className="sdcalendar" />
                                    <p className="sddou"> July 13th </p>

                                  </div>
                                  <div>
                                    <img src={Clock} alt="Clock" className="sdclock"/>
                                    <p className="sdtime"> 2:30PM - 10:30PM</p>
                                    <h3 className="sdhead"> $41.00/hr </h3>
                                 </div>
                                 <div>
                                   <img src={Settings} alt="Settings" className="sdsettings"/>
                                   <p className="sdspecs"> LPN </p>
                                   <div>
                                   <button style={{
                                           paddingTop:"0.3rem",
                                           paddingRight:"0.7rem",
                                           paddingBottom:"0.3rem",
                                           paddingLeft:"0.7rem"
                                           }}
                                   className="sdbutt2">
                                           <span style={{fontSize:"0.9rem"}}> edit details</span></button>
                                   </div>
                                 </div>
                                </CardContent>
                              </Card>
                              <Card className="sddoc">
                                     <CardContent>
                                     <div>
                                       <h2 className="sdh2"> Park M. </h2>
                                    </div>
                                      <div>
                                       <p className="sdpopo">Illinoise, USA </p>
                                      </div>
                                       <div>
                                         <img src={Calendar} alt="Calendar" className="sdcalendar" />
                                         <p className="sddou"> July 14th </p>

                                       </div>
                                       <div>
                                         <img src={Clock} alt="Clock" className="sdclock"/>
                                         <p className="sdtime"> 6:30AM - 2:30PM</p>
                                         <h3 className="sdhead"> $41.00/hr </h3>
                                      </div>
                                      <div>
                                        <img src={Settings} alt="Settings" className="sdsettings"/>
                                        <p className="sdspecs"> CNA </p>
                                        <div>
                                        <button style={{
                                                paddingTop:"0.3rem",
                                                paddingRight:"0.7rem",
                                                paddingBottom:"0.3rem",
                                                paddingLeft:"0.7rem"
                                                }}
                                        className="sdbutt2">
                                                <span style={{fontSize:"0.9rem"}}> edit details</span></button>
                                        </div>
                                      </div>
                                     </CardContent>
                                   </Card>
                                   <Card className="sddoc">
                                          <CardContent>
                                          <div>
                                            <h2 className="sdh2"> Paul J. </h2>
                                         </div>
                                           <div>
                                            <p className="sdpopo">Illinoise, USA </p>
                                           </div>
                                            <div>
                                              <img src={Calendar} alt="Calendar" className="sdcalendar" />
                                              <p className="sddou"> July 14th </p>

                                            </div>
                                            <div>
                                              <img src={Clock} alt="Clock" className="sdclock"/>
                                              <p className="sdtime"> 10:30PM - 6:30AM</p>
                                              <h3 className="sdhead"> $41.00/hr </h3>
                                           </div>
                                           <div>
                                             <img src={Settings} alt="Settings" className="sdsettings"/>
                                             <p className="sdspecs"> RN </p>
                                             <div>
                                             <button style={{
                                                     paddingTop:"0.3rem",
                                                     paddingRight:"0.7rem",
                                                     paddingBottom:"0.3rem",
                                                     paddingLeft:"0.7rem"
                                                     }}
                                             className="sdbutt2">
                                                     <span style={{fontSize:"0.9rem"}}> edit details</span></button>
                                             </div>
                                           </div>
                                          </CardContent>
                                        </Card>
                    </form>
          </Container>
        </div>
      );
  };



// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;