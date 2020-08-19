import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Bell from './bell.png'
import Group94 from './Group 9454.png'
import Group65 from './Group 65.png'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
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
             
              

              <Container style={{width: "40rem",marginTop:"6rem"}}>
              <form>

              <h2 className="ewh2"> Edit Ward </h2>
              <Grid container>
              <Grid item xs={6}>
        
                <div> <label className="ewname">
                        <p className="ewp"> Nurses</p>
                      </label>
                      <div id="basic-select">
                         <select className="ewarrow">
                             <option value=" ">   </option>
                             <option value="one">One</option>
                             <option value="two">Two</option>
                             <option value="three">Three</option>
                             <option value="four">Four</option>
                         </select>
                         </div>
                </div>
                
                <input className="ewin"  type="text" />
                <input className="ewin"  type="text" />
              </Grid>
              <Grid item xs={6}>
                <div> <label className="ewname">
                        <p className="ewp1"> Pay/hr</p>
                      </label>
                </div>
                <input  className="ewin1" type="text" />
                <input  className="ewin1" type="text" />
                <input  className="ewin1" type="text" />
              </Grid>
              <Grid item xs={6}>
        
                <div> <label className="ewname">
                        <p className="ewp"> Nurses</p>
                      </label>
                      <div id="basic-select">
                         <select className="ewarrow">
                             <option value=" ">   </option>
                             <option value="one">One</option>
                             <option value="two">Two</option>
                             <option value="three">Three</option>
                             <option value="four">Four</option>
                         </select>
                         </div>
                </div>
                <input className="ewin"  type="text" />
                <input className="ewin"  type="text" />
              </Grid>
              <Grid item xs={6}>
                <div> <label className="ewname">
                        <p className="ewp1"> Pay/hr</p>
                      </label>
                </div>
                <input  className="ewin1" type="text" />
                <input  className="ewin1" type="text" />
                <input  className="ewin1" type="text" />
              </Grid>
              <Grid item xs={6}>
        
                <div> <label className="ewname">
                        <p className="ewp"> Nurses</p>  
                      </label> 
                      <div id="basic-select">
                         <select className="ewarrow">
                             <option value=" ">   </option>
                             <option value="one">One</option>
                             <option value="two">Two</option>
                             <option value="three">Three</option>
                             <option value="four">Four</option>
                         </select>
                         </div>  
                </div>
                <input className="ewin"  type="text" />
                <input className="ewin"  type="text" />
              </Grid>
              
              <Grid item xs={6}>
                <div> <label className="ewname">
                        <p className="ewp1"> Pay/hr</p>
                      </label>        
                </div> 
                <input  className="ewin1" type="text" />
                <input  className="ewin1" type="text" />
                <input  className="ewin1" type="text" />
              </Grid>
              
              
              <Grid item xs={6}>
              
              
              <Link to="/shiftset" style={{color:"white"}}><button style={{
                        paddingTop:"0.3rem",
                        paddingRight:"0.7rem",
                        paddingBottom:"0.3rem",
                        paddingLeft:"0.7rem"
                        }}
                        className="ewbutt31" >
                        <span style={{fontSize:"0.9rem"}}>Update</span></button>
                        </Link>
                        </Grid>
                        </Grid>
                        </form>
                        
                        </Container>
              
              </div>
              </div>
              




      );
        };
        // ReactDom.render(<Faci />, document.querySelector('#root'))
        export default Faci;