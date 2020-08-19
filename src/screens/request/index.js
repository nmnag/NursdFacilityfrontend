import React from 'react';
// import ReactDom from 'react-dom'
import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
import { Checkbox } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
import './index.css';
import Group65 from './Group 65.png';
import Bell from './bell.png'


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import ShiftsMenu from "../ShiftsMenu";
import ToolsMenu from "../ToolMenu";
import AccountsMenu from "../ACMenu";


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

                <Container style={{width: "60rem"}}>
                    <form>
                     <div>
                       <h2 className="rqh2"> Shift Request details </h2>
                       <p className="rqp1"> Select Date(s)</p>
                        <input className="rqin"  type="number" />
                     </div>

                     <div>
                      <p className="rqp1"> Select Shift Type(s)</p>
                      <Checkbox color ="primary"  className="rqbox" /><label className="rqcheckBox">Morning</label>
                      <Checkbox color ="primary"   className="rqbox1" style={{marginLeft:'50px'}} /><label className="rqcheckBox">Evening</label>
                      <Checkbox color ="primary" className="rqbox1"  style={{marginLeft:'50px'}} /><label  className="rqcheckBox">Night</label>
                      <p className="rqp1"> Select Ward(s) </p>
                      <Checkbox color ="primary"  className="rqbox" /><label className="rqcheckBox">Ward 1</label>
                      <Checkbox color ="primary"   className="rqbox2" style={{marginLeft:'50px'}} /><label className="rqcheckBox">Ward 2</label>
                      <Checkbox color ="primary" className="rqbox2" style={{marginLeft:'50px'}} /><label  className="rqcheckBox">Ward 3</label>
                      <Checkbox color ="primary"  className="rqbox2" style={{marginLeft:'50px'}} /><label className="rqcheckBox">Ward 4</label>
                      <Checkbox color ="primary"   className="rqbox2" style={{marginLeft:'50px'}} /><label className="rqcheckBox">Ward 5</label>

                     </div>

                     <p className="rqp1"> How many nurses do you require? </p>
                     <p className="rqp2"> RN </p> <input className="rqinp1"  type="number" /> <br/>
                     <p className="rqp2"> CNA </p> <input className="rqinp2"  type="number" /> <br/>
                     <p className="rqp2"> LPN </p> <input className="rqinp3"  type="number" /> <br/>
                     <p className="rqp2"> Nurse </p> <input className="rqinp"  type="number" /> <br/>

                     <button className="rqbutt2" style={{
                                     marginTop: "20px",
                                     paddingTop:"0.7rem",
                                     paddingRight:"2.6rem",
                                     paddingBottom:"0.7rem",
                                     paddingLeft:"2.6rem",
                                     }}>
                                     <span style={{fontSize:"1.1rem"}}>Submit Request</span></button>
                    </form>
                </Container>
              </div>
            );
        };
// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;