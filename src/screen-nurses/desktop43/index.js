import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import 'date-fns';
import Bookmark from './bookmark 1.png';
import MaskGroup from './Mask Group.png';
import Calendar from './calendar 1.png';
import Group76 from './Group 76 .png'
import Group44 from './Group 44.png'
import Bell from './bell.png'
import Clock from './clock.png';
import Settings from './settings.png'
import Group65 from './Group 65.png'
import Devider from './Divider.png'
import Facebook from './facebook 1.png'
import Group94 from './Group 9454.png'
import Linkedin from './linkedin 1.png'
import Twitter from './twitter 1.png'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
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
import { DateTimePicker, MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker } from "@material-ui/pickers";
import {Link} from 'react-router-dom';

import ShiftMenu from "../ShiftsMenu";

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
               <img src={Group65} alt="Group65" className="logotop"/>
               <button style={{
                       paddingTop:"0.3rem",
                       paddingRight:"0.7rem",
                       paddingBottom:"0.3rem",
                       paddingLeft:"0.7rem"
                       }}
                       className="lolbutt3" >
                       <span style={{fontSize:"0.9rem"}}>Find a Shift</span></button>
               {/* <p className="shifts">
                 Shifts
               </p> */}
               <ShiftMenu/>
               <p  className="shifts">
                 Messages
               </p>
               <img src={Bell} alt="Bell" className="bell"/>
               <img src={Group94} alt="Group94" className="ac"/>
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
       <img src={MaskGrouph} alt="MaskGrouph" className="avatar"/>
       <p className="head7"> Anna C. </p>
       <div>
       <Link to="/n-desktop41"><p className="list"> Upcoming shifts </p></Link>
       <Link to="/n-desktop43"><p className="list"> Completed shifts </p></Link>
       <Link to="/n-desktop45"><p className="list"> Saved shifts</p></Link>


       </div>
     </div>
   </Drawer>
         </div>
          <Container style={{width: "40rem", height:'1000px'}}>
                    <form>
                    <div className="upcoming">
                    <p style={{marginBottom:'10px'}}className="up"> Completed Shifts for </p>
                    <img src={Group76} alt="Group76" className="left"/>
                    <p style={{marginBottom:'10px'}} className="up"> 5th Jul'20 - 11thJul'20</p>
                    <img src={Group44} alt="Group44" className="right"/>
                    <Divider />
                    </div>
                    <Card className="doc">
                           <CardContent>
                           <div>
                             <h2 className="h2"> XYZ Hospital </h2>
                             <img src={Bookmark} alt="Bookmark" className="bookmark"/>
                          </div>
                            <div>
                             <p className="popo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <p className="dou"> July 15th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="clock"/>
                               <p className="time"> 7:00AM - 10:30PM</p>
                               <h3 className="head"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="settings"/>
                              <p className="specs"> Specialisation </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                                      className="butt" >
                                      <span style={{fontSize:"0.9rem"}}>Easy Apply</span></button>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt2">
                                      <span style={{fontSize:"0.9rem"}}> view details</span></button>
                              </div>
                            </div>
                           </CardContent>
                         </Card>
                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> XYZ Hospital </h2>
                             <img src={Bookmark} alt="Bookmark" className="bookmark"/>
                          </div>
                            <div>
                             <p className="popo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <p className="dou"> July 15th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="clock"/>
                               <p className="time"> 7:00AM - 10:30PM</p>
                               <h3 className="head"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="settings"/>
                              <p className="specs"> Specialisation </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                               className="butt" >
                                      <span style={{fontSize:"0.9rem"}}>Easy Apply</span></button>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                               className="butt2">
                                      <span style={{fontSize:"0.9rem"}}> view details</span></button>
                              </div>
                            </div>
                           </CardContent>
                         </Card>
                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> XYZ Hospital </h2>
                             <img src={Bookmark} alt="Bookmark" className="bookmark"/>
                          </div>
                            <div>
                             <p className="popo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <p className="dou"> July 15th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="clock"/>
                               <p className="time"> 7:00AM - 10:30PM</p>
                               <h3 className="head"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="settings"/>
                              <p className="specs"> Specialisation </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt" >
                                      <span style={{fontSize:"0.9rem"}}>Easy Apply</span></button>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt2">
                                      <span style={{fontSize:"0.9rem"}}> view details</span></button>
                              </div>
                            </div>

                           </CardContent>
                         </Card>
                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> XYZ Hospital </h2>
                             <img src={Bookmark} alt="Bookmark" className="bookmark"/>
                          </div>
                            <div>
                             <p className="popo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <p className="dou"> July 15th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="clock"/>
                               <p className="time"> 7:00AM - 10:30PM</p>
                               <h3 className="head"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="settings"/>
                              <p className="specs"> Specialisation </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt" >
                                      <span style={{fontSize:"0.9rem"}}>Easy Apply</span></button>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                               className="butt2">
                                      <span style={{fontSize:"0.9rem"}}> view details</span></button>
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