import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
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
import {Link} from 'react-router-dom';
import ShiftMenu from "../ShiftsMenu";
import Group from './Group 65.png';
import ACCMenu from "../acMenu";


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
      <div>
      <div className={classes.root}>
         <CssBaseline />
          <AppBar style={{backgroundColor:'#FFF', height:'100px'}}className={classes.appBar} position="fixed">
          <Toolbar>
                  <img src={Group} alt="Group" className="logotop"/>
                  <Link to="/n-cards">
                  <button style={{
                          marginLeft: "630px",
                          paddingTop:"0.3rem",
                          paddingRight:"0.7rem",
                          paddingBottom:"0.3rem",
                          paddingLeft:"0.7rem"
                          }}
                          className="cdbutt3" >
                          <span style={{fontSize:"0.9rem"}}>Find a Shift</span></button>
                          </Link>

                  <div className="dfshifts">
                    <ShiftMenu/>
                    </div>

                  <p  className="shifts">
                    Messages
                  </p>
                  <img src={Bell} alt="Bell" className="bell"/>
                  <div className="ac">
                    <ACCMenu/>
                    </div>
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
      <p className="head"> Anna C. </p>
      <div>
      <p className="list"> Account information </p>
      <p className="list"> Contact information </p>
      <p className="list"> Shift preferences</p>
      <p className="list"> Current employmeny details </p>

      </div>
    </div>
  </Drawer>
        </div>

          <Container style={{width: "40rem"}}>
              <form>


              <h2 className="h3"> Account Information </h2>
              <div> <label className="name">
                    <p classname="p"> Email</p>
                    </label>
              </div>

              <input className="inp"  type="text" />
              <div> <label className="name">
                    <p classname="p"> Backup Email (optional)</p>
                    </label>
              </div>
              <input className="inp"  type="text" />
              <h2 className="h2"> Contact Information </h2>
              <Grid container>
              <Grid item xs={6}>
                <div> <label className="name">
                        <p className="p"> First name</p>
                      </label>
                </div>
                <input className="in"  type="text" />
              </Grid>
              <Grid item xs={6}>
                <div> <label className="name">
                        <p className="p1"> last name</p>
                      </label>
                </div>
                <input  className="in1" type="text" />
              </Grid>

                <Grid item xs={6}>
                <div> <label className="number">
                             <p className="p">   phone number</p>
                      </label>
                </div>
                <input placeholder=" " className="in"  type="number"/>
                </Grid>
                <Grid item xs={6}>
                <div> <label className="zipcode">
                               <p className="p1"> zipcode</p>
                      </label>
                </div>
                <input placeholder=" " className="in1" type="number"  />
                </Grid>
              </Grid>
              <div> <label className="name">
                    <p classname="p">if referred by a friend, his/her Email Address (optional)</p>
                    </label>
              </div>
              <input className="inp"  type="text" />
              <h2 className="h2"> Shift Preferences </h2>
              <p className="p"> Types of shift </p>
              <div><Checkbox color ="primary"  className="box" /><label className="checkBox">Day</label>
                                 <Checkbox color ="primary"  style={{marginLeft:"10.0rem"}} className="box" /><label className="checkBox">Evening</label>
                                 <Checkbox color ="primary" style={{marginLeft:"8.0rem"}} className="box" /><label  className="checkBox">Overnight</label>
            </div>
            <div><Checkbox color ="primary"  className="box" /><label className="checkBox">Weekend</label>
                               <Checkbox color ="primary" style={{marginLeft:"7.5rem"}} className="box" /><label className="checkBox">Weekday</label>
                               <Checkbox color ="primary" style={{marginLeft:"7.5rem"}} className="box" /><label  className="checkBox">Rotating</label>
            </div>
            <p className="p"> Preferred working hours </p>
            <div><Checkbox color ="primary" className="box" /><label className="checkBox">6Hrs</label>
                                 <Checkbox color ="primary" style={{marginLeft:"1.0rem"}} className="box" /><label className="checkBox">8Hrs</label>
                                 <Checkbox color ="primary" style={{marginLeft:"2.0rem"}} className="box" /><label  className="checkBox">10Hrs</label>
                                 <Checkbox color ="primary"style={{marginLeft:"2.0rem"}} className="box" /><label  className="checkBox">12Hrs</label>
                                 <Checkbox color ="primary"style={{marginLeft:"2.0rem"}} className="box" /><label  className="checkBox">Anything is preferred</label>
            </div>
            <p className="p"> Facilities range </p>
            <Slider className="slide"

                        getAriaValueText={valuetext}
                        aria-labelledby="continuous-slider"
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
              />
              <h2 className="h2"> Current employment details </h2>
              <div> <label className="name">
                    <p classname="p"> Current Employer</p>
                    </label>
              </div>
              <input className="inp"  type="text" />
              <div> <label className="name">
                    <p classname="p"> Are you a charge nurse?</p>
                    </label>
                    <div id="basic-select">
                         <select style={{ marginLeft:'5px'}} className="arrow">
                             <option value=" ">   </option>
                             <option value="one">One</option>
                             <option value="two">Two</option>
                             <option value="three">Three</option>
                             <option value="four">Four</option>
                         </select>
                         </div>
              </div>

              <Grid container>
                <Grid item xs={6}>
                <div> <label className="name">
                      <p classname="p"> Bed Units</p>
                      </label>
                </div>
                <input className="in"  type="text" />
                </Grid>
                <Grid item xs={6}>
                <div> <label className="name">
                      <p className="p2"> Nurse Patient Ratio</p>
                      </label>
                      <div id="basic-select">
                           <select className="arrow1">
                               <option value=" ">   </option>
                               <option value="one">One</option>
                               <option value="two">Two</option>
                               <option value="three">Three</option>
                               <option value="four">Four</option>
                           </select>
                           </div>
                </div>
                </Grid>
              </Grid>
              <div> <label className="name">
                    <p classname="p"> Nursing Experience in a nursing facility or assisted living facility setting </p>
                    </label>
                    <div id="basic-select">
                         <select style={{marginLeft:'5px'}} className="arrow">
                             <option value=" ">   </option>
                             <option value="one">One</option>
                             <option value="two">Two</option>
                             <option value="three">Three</option>
                             <option value="four">Four</option>
                         </select>
                         </div>
              </div>

              <div> <label className="name">
                    <p classname="p"> Experience in a hospital acute care setting </p>
                    </label>
                    <div id="basic-select">
                         <select style={{marginLeft:'5px'}} className="arrow">
                             <option value=" ">   </option>
                             <option value="one">One</option>
                             <option value="two">Two</option>
                             <option value="three">Three</option>
                             <option value="four">Four</option>
                         </select>
                         </div>
              </div>


              </form>
          </Container>
          <div className="footer">
                  <Container style={{width: "60rem"}}>
                  <Grid container>
                   <Grid item xs={3}>
                   <img src={Group65} alt="Group65" className="cdlogo"/>
                   </Grid>
                   <Grid item xs={4} style={{marginLeft:'50px'}}>
                    <div className="about">
                     <p className="fop"> About us </p>
                     <p className="fohe"> Simple Flexible Convenient</p>
                     <p className="text">We believe that affinity, common purpose, and trust make powerful networks. NURSD is a secure, private, vetted platform for healthcare facilities looking for high-quality talent and for nurses to explore, identify job opportunities that provide a balance between lifestyle, preferences, and flexibility.</p>
                      <Grid container>
                       <Grid item xs={1}>
                         <img src={Linkedin} alt="Linkedin" className="linkedin"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Facebook} alt="Facebook" className="facebook"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Twitter} alt="twitter" className="twitter"/>
                       </Grid>
                      </Grid>
                     </div>
                   </Grid>

                   <Grid item xs={1}>
                    <img src={Divider} alt="Divider" className="devider" />
                   </Grid>
                   <Grid item xs={3}>
                    <div>
                     <div className="bol">
                     <p className="fool"> For Nurses </p>
                     <p className="fool2"> About </p>
                     </div>
                     <div>
                     <p className="l1"> For Facilities</p>
                     <p className="l12"> Press </p>
                     </div>
                     <div>
                     <p className="l2"> How It Works </p>
                     <p className="l22"> Careers </p>
                     </div>
                     <div>
                     <p className="l3"> Blog </p>
                     <p className="l32"> Events </p>
                     </div>
                     <div>
                     <p className="l4"> FAQs </p>
                     <p className="l42"> Contact Us </p>
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
