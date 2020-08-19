import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Bell from './bell.png'
import Group94 from './Group 9454.png'
import TextField from '@material-ui/core/TextField';
import Group65 from './Group 65.png'
import Divider from './Divider.png'
import Linkedin from './linkedin 1.png'
import Twitter from './twitter 1.png'
import Facebook from './facebook 1.png'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Checkbox } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MaskGrouph from './Mask Grouph.png';
import Slider from '@material-ui/core/Slider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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


const Faci = ()=>{
  const classes = useStyles1();
    return(
      <div style={{backgroundColor:'white'}}>
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

                        <div  className="dfshifts">
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
      <img src={MaskGrouph} alt="MaskGrouph" className="fpavatar"/>
      <p className="fphead"> Anna C. </p>
      <div>
      <p className="fplist"> Account information </p>
      <p className="fplist"> Contact information </p>
      <p className="fplist"> Shift preferences</p>
      <p className="fplist"> Current employmeny details </p>

      </div>
    </div>
  </Drawer>
        </div>

          <Container style={{width: "40rem",backgroundColor:'white'}}>
              <form>

              <h2 className="fph3"> Account Information </h2>
              <div> <label className="fpname">
                    <p classname="fpp"> Email</p>
                    </label>
              </div>
              <input className="fpinp"  type="text" />
              <div> <label className="fpname">
                    <p classname="fpp"> Backup Email (optional)</p>
                    </label>
              </div>
              <input className="fpinp"  type="text" />
              <h2 className="fph2"> Contact Information </h2>
              <Grid container>
              <Grid item xs={6}>
                <div> <label className="fpname">
                        <p className="fpp"> First name</p>
                      </label>
                </div>
                <input className="fpin"  type="text" />
              </Grid>
              <Grid item xs={6}>
                <div> <label className="fpname">
                        <p className="fpp1"> last name</p>
                      </label>
                </div>
                <input  className="fpin1" type="text" />
              </Grid>
                <Grid item xs={6}>
                <div> <label className="fpnumber">
                             <p className="fpp">   phone number</p>
                      </label>
                </div>
                <input placeholder=" " className="fpin"  type="number"/>
                </Grid>
                <Grid item xs={6}>
                <div> <label className="fpzipcode">
                               <p className="fpp1"> zipcode</p>
                      </label>
                </div>
                <input placeholder=" " className="in1" type="number"  />
                </Grid>
              </Grid>
              <div> <label className="fpname">
                    <p classname="fpp"> Job title</p>
                    </label>
              </div>
              <input className="fpinp"  type="text" />
              <h2 className="fph2"> Facility Information </h2>
              <div> <label className="fpname">
                    <p classname="fpp"> Facility Name</p>
                    </label>
              </div>
              <input className="fpinp"  type="text" />
              <Grid container>
              <Grid item xs={6}>
              <div><label className="fpname">
                    <p classname="fpp"> Setting type </p>
                    </label>
                <div id="basic-select">
                <select className="fparrow">
                  <option value=" ">   </option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                  <option value="four">Four</option>
                </select>
                </div>
              </div>
              </Grid>

              <Grid item xs={6}>
              <div><label className="fpname">
                    <p classname="fpp"> if other please specify </p>
                    </label>
                    <input placeholder=" " className="fpinp2"  type="text"/>
                    </div>
              </Grid>
              <Grid item xs={6}>
              <div> <label className="fpnumber">
                           <p className="fpp"> Facility phone number</p>
                    </label>
              </div>
              <input placeholder=" " className="fpin"  type="number"/>
              </Grid>
              <Grid item xs={6}>
              <div> <label className="fpemail">
                             <p className="fpp1"> Facility Email</p>
                    </label>
              </div>
              <input placeholder=" " className="fpin1" type="text"  />
              </Grid>
            </Grid>

            <div> <label className="fpaddress">
                  <p classname="fpp"> Street address</p>
                  </label>
            </div>
            <input className="fpinp"  type="text" />
            <Grid container>
            <Grid item xs={4}>
              <div> <label className="fpname">
                    <p className="fpp4"> City</p>
                  </label>
              </div>
              <input  className="fpin4" type="text" />
            </Grid>
            <Grid item xs={4}>
            <div> <label className="fpname">
                    <p className="fpp5"> State</p>
                  </label>
            </div>
            <input  className="fpin5" type="text" />
            </Grid>
            <Grid item xs={4}>
            <div> <label className="fpzipcode">
                           <p className="fpp5"> zipcode</p>
                  </label>
            </div>
            <input placeholder=" " className="fpin5" type="number"  />
            </Grid>
            </Grid>

            <div> <label className="fpname">
                  <p classname="fpp"> Website</p>
                  </label>
            </div>
            <input className="fpinp"  type="text" />

              <h2 className="fph2"> Extra details </h2>

              <Grid container>
                <Grid item xs={6}>
                <div> <label className="fpname">
                      <p classname="fpp"> Bed Units</p>
                      </label>
                </div>
                <input className="fpin"  type="text" />
                </Grid>
                <Grid item xs={6}>
                <div> <label className="fpname">
                      <p classname="fpp"> Number of clinical staff</p>
                      </label>
                </div>
                <input className="fpin"  type="number" />
                </Grid>
              </Grid>
              <div> <label className="fpname">
                    <p classname="fpp"> Health System</p>
                    </label>
              </div>
              <input className="fpinp"  type="text" />
              <div> <label className="fpname">
                    <p classname="fpp"> Facility affliated University</p>
                    </label>
              </div>
              <input className="fpinp"  type="text" />
              <Grid container>
              <Grid item xs={6}>
              <div> <label className="fpname">
                    <p classname="fpp"> Nurse to patient ratio </p>
                    </label>
                    <div id="basic-select">
                         <select className="fparrow">
                             <option value=" ">   </option>
                             <option value="one">1:2</option>
                             <option value="two">2:3</option>
                             <option value="three">3:4</option>

                         </select>
                         </div>
              </div>
              </Grid>
              <Grid item xs={6}>
              <div> <label className="fpname">
                    <p classname="fpp"> Is facility a Magnet Hospital? </p>
                    </label>
                    <div id="basic-select">
                         <select className="fparrow">
                             <option value=" ">   </option>
                             <option value="Yes">YES</option>
                             <option value="No">NO</option>
                                                      </select>
                         </div>
              </div>
              </Grid>
              </Grid>
              <div> <label className="fpname">
                    <p className="fpp7">Clinical Resources (e.g.:5 MRI Machine, 12 Operating Rooms ,etc) </p>
                    </label>
                    <input className="fpinp1"  type="text" />
              </div>
              </form>
          </Container>
          <div className="fpfooter">
                  <Container style={{width: "60rem"}}>
                  <Grid container>
                   <Grid item xs={3}>
                   <img src={Group65} alt="Group65" className="fplogo"/>
                   </Grid>
                   <Grid item xs={4} style={{marginLeft:'50px'}}>
                    <div className="fpabout">
                     <p className="fpfop"> About us </p>
                     <p className="fpfohe"> Simple Flexible Convenient</p>
                     <p className="fptext">We believe that affinity, common purpose, and trust make powerful networks. NURSD is a secure, private, vetted platform for healthcare facilities looking for high-quality talent and for nurses to explore, identify job opportunities that provide a balance between lifestyle, preferences, and flexibility.</p>
                      <Grid container>
                       <Grid item xs={1}>
                         <img src={Linkedin} alt="Linkedin" className="fplinkedin"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Facebook} alt="Facebook" className="fpfacebook"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Twitter} alt="twitter" className="fptwitter"/>
                       </Grid>
                      </Grid>
                     </div>
                   </Grid>

                   <Grid item xs={1}>
                    <img src={Divider} alt="Divider" className="fpdevider" />
                   </Grid>
                   <Grid item xs={3}>
                    <div>
                     <div className="fpbol">
                     <p className="fpfool"> For Nurses </p>
                     <p className="fpfool2"> About </p>
                     </div>
                     <div>
                     <p className="fpl1"> For Facilities</p>
                     <p className="fpl12"> Press </p>
                     </div>
                     <div>
                     <p className="fpl2"> How It Works </p>
                     <p className="fpl22"> Careers </p>
                     </div>
                     <div>
                     <p className="fpl3"> Blog </p>
                     <p className="fpl32"> Events </p>
                     </div>
                     <div>
                     <p className="fpl4"> FAQs </p>
                     <p className="fpl42"> Contact Us </p>
                     </div>
                    </div>
                   </Grid>

                   </Grid>

                  </Container>
                </div>
      </div>




    );
};
// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;