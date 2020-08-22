import React from 'react';
import ReactDom from 'react-dom'
//import ReactDOM from 'react-dom';
import './index.css';
import Group94 from './Group 9454.png'
import Group65 from './Group 65.png'
import MaskGrouph from './Mask Grouph.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Bell from './bell.png'
import Container from '@material-ui/core/Container';


import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
import ShiftsMenu from "../ShiftsMenu";
import ToolsMenu from "../ToolMenu";
import AccountsMenu from "../ACMenu";

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
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));


const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
      paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        marginLeft: 20,
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
     <p className="sslist"> Schedule shifts> </p>
     <p className="sslist">Live Feed </p>
     <p className="sslist"> Billing </p>
     <p className="sslist"> Shift Settings </p>

      </div>
    </div>
  </Drawer>


        <Container style={{width: "100rem"}}>
              <form>

              <h2 className="insh1"> Insights for {"<"} 5th Jul'20 - 11th Jul'20 {">"} </h2>

              <div style={{marginTop: "3rem", flexDirection: "row", display:"flex"}}>
                <div style={{flex:2, alignContent:"flex-end"}}>
                  <Typography style={{fontSize:20, marginRight:30, marginTop:10, textAlign:"right"}}>
                    Scheduled Hours
                  </Typography>
                  </div>
                  <div style={{flex:9, flexDirection:"column"}}>

                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:30, color:"blue", margin:0,marginRight: 5, fontFamily:"sans-serif"  }}>
                    138
                  </p>
                  <p style={{fontSize:20, color:"blue", marginRight: 5, fontFamily:"sans-serif", lineHeight:"30%"  }}>
                    Hrs
                  </p>
                  <p>
                  scheduled this week
                  </p>
                  </div>
                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:22, color:"green",marginRight: 5, lineHeight:"10%"   }}>
                    5.7%
                  </p>
                  <p>
                    increase from scheduled last week
                  </p>
                  </div>

                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:22, color:"green", marginRight: 5, lineHeight:"10%"  }}>
                  2.2%
                  </p>
                  <p>
                     higher than the 4 week scheduled average
                  </p>
                  </div>

                  </div>
              </div>

              <div style={{marginTop: "3rem", flexDirection: "row", display:"flex"}}>
                <div style={{flex:2, alignItems:"right"}}>
                  <Typography style={{fontSize:20, marginRight:30, marginTop:10, textAlign:"right"}}>
                    Utilized Hours
                  </Typography>
                  </div>
                  <div style={{flex:9, flexDirection:"column"}}>

                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:30, color:"blue", margin:0,marginRight: 5, fontFamily:"sans-serif"  }}>
                    120
                  </p>
                  <p style={{fontSize:20, color:"blue", marginRight: 5, fontFamily:"sans-serif", lineHeight:"30%"  }}>
                    Hrs
                  </p>
                  <p>
                  utilised this week
                  </p>
                  </div>
                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:22, color:"green",marginRight: 5, lineHeight:"10%"   }}>
                    7.8%
                  </p>
                  <p>
                    more hours worked than scheduled last week
                  </p>
                  </div>

                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:22, color:"green", marginRight: 5, lineHeight:"10%"  }}>
                  4.5%
                  </p>
                  <p>
                  more hours worked than the scheduled over last 4 weeks
                  </p>
                  </div>

                  </div>
              </div>


              <h2 className="insh1"> Insights for {"<"} Jun'20 {">"} </h2>

              <div style={{marginTop: "3rem", flexDirection: "row", display:"flex"}}>
                <div style={{flex:2, alignContent:"flex-end"}}>
                  <Typography style={{fontSize:20, marginRight:30, marginTop:10, textAlign:"right"}}>
                    Scheduled Hours
                  </Typography>
                  </div>
                  <div style={{flex:9, flexDirection:"column"}}>

                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:30, color:"blue", margin:0,marginRight: 5, fontFamily:"sans-serif"  }}>
                    576
                  </p>
                  <p style={{fontSize:20, color:"blue", marginRight: 5, fontFamily:"sans-serif", lineHeight:"30%"  }}>
                    Hrs
                  </p>
                  <p>
                  scheduled this week
                  </p>
                  </div>
                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:22, color:"green",marginRight: 5, lineHeight:"10%"   }}>
                    6.7%
                  </p>
                  <p>
                    increase from scheduled last week
                  </p>
                  </div>

                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:22, color:"green", marginRight: 5, lineHeight:"10%"  }}>
                  3.8%
                  </p>
                  <p>
                     higher than the 4 week scheduled average
                  </p>
                  </div>

                  </div>
              </div>

              <div style={{marginTop: "3rem", flexDirection: "row", display:"flex"}}>
                <div style={{flex:2, alignItems:"right"}}>
                  <Typography style={{fontSize:20, marginRight:30, marginTop:10, textAlign:"right"}}>
                    Utilized Hours
                  </Typography>
                  </div>
                  <div style={{flex:9, flexDirection:"column"}}>

                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:30, color:"blue", margin:0,marginRight: 5, fontFamily:"sans-serif"  }}>
                    498
                  </p>
                  <p style={{fontSize:20, color:"blue", marginRight: 5, fontFamily:"sans-serif", lineHeight:"30%"  }}>
                    Hrs
                  </p>
                  <p>
                  utilised this week
                  </p>
                  </div>
                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:22, color:"green",marginRight: 5, lineHeight:"10%"   }}>
                    8.9%
                  </p>
                  <p>
                    more hours worked than scheduled last week
                  </p>
                  </div>

                  <div style={{flexDirection: "row", display:"flex"}}>
                  <p style={{fontSize:22, color:"green", marginRight: 5, lineHeight:"10%"  }}>
                  5.6%
                  </p>
                  <p>
                  more hours worked than the scheduled over last 4 weeks
                  </p>
                  </div>

                  </div>
              </div>



              </form>
          </Container>

            </div>
            </div>


        );

        };
        // ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;
