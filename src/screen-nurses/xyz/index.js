import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import Group76 from './Group 76.png';
import Bell from './bell.png'
import Group94 from './Group 9454.png'
import Facebook from './facebook 1.png'
import Linkedin from './linkedin 1.png'
import Twitter from './twitter 1.png'
import Divider from './Divider.png'
import Group from './Group 65.png'
import Calendar from './calendar 1.png';
import Clock from './clock.png';
import Group62 from './Group 62.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Bookmark1 from './bookmark 1.png';
import Share from './share-2 1.png'
import Frame14 from './Frame 14.png'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import logo from './logo.png';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import ShiftMenu from "../ShiftsMenu";
import ACCMenu from "../acMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Faci = ()=>{



    return(
            <div>
            <div>
            <AppBar style={{backgroundColor:'#FFF'}}className="xyztopnav" position="static">
            <Toolbar>
                  <img src={Group} alt="Group" className="logotop"/>
                  <Link to="/n-cards">
                  <button style={{
                          paddingTop:"0.3rem",
                          paddingRight:"0.7rem",
                          paddingBottom:"0.3rem",
                          paddingLeft:"0.7rem"
                          }}
                          className="lolbutt3" >
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
          </div>
          <Container style={{width: "60rem"}}>
                    <form>

                      <div> <img src={Group76} alt="Group76" className="xyzGroups"></img> <h1> XYZ Facility</h1><p className="xyzone">  is looking for talented candidates like you.</p>
                      </div>

                      <Grid container>
                         <Grid item xs={6}>
                         <div>
                         <img src={logo} alt="Logo" className="xyzlogo" />
                         <figcaption> save <img src={Bookmark1} alt="Bookmark1" className="xyzbookmark"></img> share with your tribe <img src={Share} alt="share" classname="xyzshare"></img></figcaption>
                         </div>
                         </Grid>

                        <Grid item xs={6}>
                        <div style={{marginBottom:"10rem", marginTop:"3rem"}}>
                               <button className="xyzbutt1" align="right" style={{
                                     paddingTop:"0.7rem",
                                     paddingRight:"2.6rem",
                                     paddingBottom:"0.7rem",
                                     paddingLeft:"2.6rem",

                                     }}>
                                     <span style={{fontSize:"1.5rem"}}>$41.00/hr</span></button>
                               <div style={{marginBottom:"20px"}}>
                                   <label className="xyzadd">7733 West Grand Avenue Elmwood Park, IL 60707 </label>
                               </div>
                               <div className="xyzpopo" style={{marginBottom:"20px", backgroundColor: "#f2f2f2", width:"40%"}}>
                               <img src={Calendar} alt="Calendar" className="xyzcalendar" />
                               <label className="xyzdou"> July 15th </label>
                             </div>
                             <div className="xyztoto" style={{backgroundColor: "#f2f2f2", width:"40%"}}>
                             <img src={Clock} alt="Clock" className="xyzclock" />
                             <label className="xyztime"> 7:00AM - 10:30PM </label>
                           </div>
                           <div style={{marginTop:"20px"}}>
                                   <label className="xyzadd1">Speacialisation </label>
                               </div>
                        </div>
                        </Grid>
                        <Grid item xs={6}>
                           <p className = "xyztwo">Complete these necessary steps</p>

                           <img src={Group62} alt="Group62" className="xyznumber"/>


                           <p className="three">Provide additional documents facility needed for this job</p>
                           <p> The facility you're applying for needed these document.
                               You'll be unable to submit your application without these.
                           </p>

                           <div style={{marginBottom:"3rem", marginTop:"3rem"}}>
                                <button className="xyzbutt2" style={{
                                      paddingTop:"0.7rem",
                                      paddingRight:"2.6rem",
                                      paddingBottom:"0.7rem",
                                      paddingLeft:"2.6rem"
                                      }}>
                                      <span style={{fontSize:"1.2rem"}}>Upload</span></button>
                            </div>
                            <Grid container>
                                <Grid item xs={6}>
                                     <div style={{marginBottom:"3rem", marginTop:"1rem"}}>
                                         <button className="xyzbutt3" style={{
                                              paddingTop:"0.7rem",
                                              paddingRight:"2.6rem",
                                              paddingBottom:"0.7rem",
                                              paddingLeft:"2.6rem"
                                              }}>
                                          <span style={{fontSize:"1.0rem"}}>save for later</span></button>
                                     </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginBottom:"3rem", marginTop:"1rem"}}>
                                         <button variant="contained" disabled className="xyzbutt4" style={{
                                              paddingTop:"0.7rem",
                                              paddingRight:"2.6rem",
                                              paddingBottom:"0.7rem",
                                              paddingLeft:"2.6rem"
                                              }}>
                                          <span style={{fontSize:"1.0rem"}}>submit the application</span></button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>

                  </Grid>

                    </form>
                </Container>
                <div className="xyzfooter">
                  <Container style={{width: "100rem"}}>
                  <Grid container>
                   <Grid item xs={3}>
                   <img src={Group} alt="Group" className="xyzlogo7"/>
                   </Grid>
                   <Grid item xs={4}>
                    <div className="xyzabout">
                     <p className="xyzfop"> About us </p>
                     <p className="xyzfohe"> Simple Flexible Convenient</p>
                     <p className="xyztext">We believe that affinity, common purpose, and trust make powerful networks. NURSD is a secure, private, vetted platform for healthcare facilities looking for high-quality talent and for nurses to explore, identify job opportunities that provide a balance between lifestyle, preferences, and flexibility.</p>
                      <Grid container>
                       <Grid item xs={1}>
                         <img src={Linkedin} alt="Linkedin" className="xyzlinkedin"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Facebook} alt="Facebook" className="xyzfacebook"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Twitter} alt="twitter" className="xyztwitter"/>
                       </Grid>
                      </Grid>
                     </div>
                   </Grid>

                   <Grid item xs={1}>
                    <img src={Divider} alt="Divider" className="xyzdevider" />
                   </Grid>
                   <Grid item xs={3}>
                    <div>
                     <div className="xyzbol">
                     <p className="xyzfool"> For Nurses </p>
                     <p className="xyzfool2"> About </p>
                     </div>
                     <div>
                     <p className="xyzl1"> For Facilities</p>
                     <p className="xyzl12"> Press </p>
                     </div>
                     <div>
                     <p className="xyzl2"> How It Works </p>
                     <p className="xyzl22"> Careers </p>
                     </div>
                     <div>
                     <p className="xyzl3"> Blog </p>
                     <p className="xyzl32"> Events </p>
                     </div>
                     <div>
                     <p className="xyzl4"> FAQs </p>
                     <p className="xyzl42"> Contact Us </p>
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