import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import Group65 from './Group 65.png';
import Bell from './bell.png'
import Group94 from './Group 9454.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import ShiftsMenu from "../ShiftsMenu";
import ToolsMenu from "../ToolMenu";
import AccountsMenu from "../ACMenu";


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
            <AppBar style={{backgroundColor:'#FFF'}}className="estopnav" position="static">
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
          </div>
          <Grid container>
          <Grid item xs={3}>

          </Grid>

          <Grid item xs={2}>
          <div>
          <h2 className="esedit"> Edit Shift Types </h2>
          <p className="esType"> Shift Type </p>
          <div><Checkbox color ="primary"  className="esbox" /><label className="escheckBox">Morning</label> <br/>
               <Checkbox color ="primary"   className="esbox" /><label className="escheckBox">Evening</label> <br/>
               <Checkbox color ="primary" className="esbox" /><label  className="escheckBox">Night</label> <br/>
               
               <Link to="/shiftset" style={{color:"white"}}>
               <div style={{marginBottom:"10rem", marginTop:"3rem"}}>
               
               <button className="esbutt2" style={{
                                     paddingTop:"0.7rem",
                                     paddingRight:"2.6rem",
                                     paddingBottom:"0.7rem",
                                     paddingLeft:"2.6rem"
                                     }}>
                                     <span style={{fontSize:"1.1rem"}}>Update</span></button>
               </div>
               </Link>

          </div>
          </div>
          </Grid>
          <Grid item xs={3}>

           <div> <label className="esname">
                      <p className="esp1"> Start Time</p>
                    </label>
              </div>
              <input className="esin"  type="text" />
              <input className="esin"  type="text" />
              <input className="esin"  type="text" />

          </Grid>
          <Grid item xs={3}>
          <div> <label className="esname">
                       <p className="esp1"> End time</p>
                     </label>
               </div>
               <input className="esin"  type="text" />
               <input className="esin"  type="text" />
               <input className="esin"  type="text" />

          </Grid>
          </Grid>
        </div>
        );
    };
    // ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;