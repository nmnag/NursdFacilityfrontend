import React from 'react';
// import ReactDom from 'react-dom'
import './dashboard.css'
import Group65 from './Group 65.png';
import Bell from './bell.png'
import Group76 from './Group 76 .png'
import Group44 from './Group 44.png'
import Group94 from './Group 9454.png'
// import Devider from './devider.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
// import Select from '@material-ui/core/Select';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import ShiftsMenu from "./ShiftsMenu";
import ToolsMenu from "./ToolMenu";
import AccountsMenu from "./ACMenu";

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
            <AppBar style={{backgroundColor:'#FFF'}}className="dftopnav" position="static">
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

                        



                        <div className="dfshifts">
                        <ShiftsMenu/> </div>

                        <div className="dfshifts">
                        <ToolsMenu />
                        </div>
                        
                        <img src={Bell} alt="Bell" className="dfbell"/>

                        <div className="ac">
                        <AccountsMenu />
                        </div>
                        



                        
              </Toolbar>
            </AppBar>
          </div>

         <p className="dfHI"> Hi Anna! Today's Schedule for Elixy Medical Facility,Illionis 60025</p>
         <div className="dfbox" style={{backgroundColor:'white'}}>
          <p className ="dfadd"> There are no shifts added today </p> 
          <Link to="/upcomingshifts">
            <Button style={{color:'#1082CB', display:'inline', width:'110px', marginRight:'200px',marginBottom:'25px', marginTop: '10px;'}} className="pa"> Add a shift </Button>
           </Link>
         </div>
         <div>
            <div>
               <div className="dfcardhead">
                 <p className="dfinsight"> Insights: </p>
                 <img src={Group76} alt="Group76" className="dfleft"/>
                 <p className="dfdate"> 5th Jul'20 - 11thJul'20</p>
                 <img src={Group44} alt="Group44" className="dfright"/>
               </div>
               <div className="dfcardbott">
                <Grid container>
                <Grid item xs={6}>
                 <p className="dfschedule"> Scheduled Hours</p>
                 <p className="dfzero"> 0 </p> <p className="dfhrs"> Hrs </p>
                 <p className="dfweek"> Scheduled this week </p>
                 <div>
                 <p className="dfDZ"> 0.0% </p> <p className="dfDZL"> increase from schedule last week </p>
                 </div>
                 <div>
                 <p className="dfDZ1"> 0.0% </p> <p className="dfDZL1"> higher than the 4 week schedule average </p>
                 </div>
                </Grid>
                <Grid item xs={6}>
                 <p className="dfschedule"> Utilized Hours</p>
                 <p className="dfzero"> 0 </p> <p className="dfhrs"> Hrs </p>
                 <p className="dfweek"> utilised this week </p>
                 <div>
                 <p className="dfDZ"> 0.0% </p> <p className="dfDZL"> more hours worked then scheduled this week </p>
                 </div>
                 <div>
                 <p className="dfDZ1"> 0.0% </p> <p className="dfDZL1"> more hours worked than schedule over 4 weeks </p>
                 </div>
                </Grid>


                </Grid>
               </div>
            </div>

         </div>

        </div>

        );
};
// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;