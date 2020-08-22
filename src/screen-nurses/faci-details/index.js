import React from 'react';
import ReactDom from 'react-dom'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import './index.css';



const Faci = ()=>{
    return(
            <div> 

                <Container style={{width: "60rem"}}>
                    <form>
                    <div><h2 className = "head" >Hi there!<br/> Enter your facility details </h2> </div>
                    <div>
                           <div> <label className="name">
                           <h2 className="yo">Facility Name</h2>
                                <TextField
          id="standard-helperText"
          label=" " 
          defaultValue=" "
          className="in"
          
        />
                            </label></div>
                           
                       
                        <Grid container>
                         <Grid item xs={6}>
                         <div> 
                         <h2 className="yo">Setting type</h2>
                         <div id="basic-select">
                         <select className="arrow">
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
                        <div> <label className="text">
                               <h2 className="dis"> If other please specify</h2>
                               <TextField
                               disabled
                               className="field"
                               id="disabled"
                               label=" "
                               defaultValue=" "
                               variant="outlined"
                               />
                            </label></div>
                        </Grid>


                        <Grid item xs={6}>
                        <div> <label className="number">
                             <h2 className="yo">  Facility Phone no.</h2>

                             <TextField
          id="standard-helperText"
          label=" " 
          defaultValue=" "
          className="inp"
          
        />
                            </label></div>
                            
                        </Grid>

                        <Grid item xs={6}>
                        <div> <label className="email">
                               <h2 className="yo"> Facility Email </h2>
                               <TextField
          id="standard-helperText"
          label=" " 
          defaultValue=" "
          className="inp"
          
        />
                            </label></div>
                            
                        </Grid>
                        </Grid>

                        <div> <label className="Address">
                               <h2 className="yo"> Street Address</h2>
                               <TextField
          id="standard-helperText"
          label=" " 
          defaultValue=" "
          className="in"
          
        />
                            </label></div>
                            

                          <Grid container>
                          <Grid item xs={4}>
                        <div> <label className="city">
                               <h2 className="yo"> City</h2>
                               <TextField
          id="standard-helperText"
          label=" " 
          defaultValue=" "
          className="inp"
          
        />
                            </label></div>
                            
                        </Grid>

                        <Grid item xs={4}>
                        <div> <label className="state">
                               <h2 className="yo"> State</h2>
                               <TextField
          id="standard-helperText"
          label=" " 
          defaultValue=" "
          className="inp"
          
        />
                            </label></div>
                            
                        </Grid>
                        <Grid item xs={4}>
                        <div> <label className="zipcode">
                               <h2 className="yo"> zipcode</h2>
                               <TextField
          id="standard-helperText"
          label=" " 
          defaultValue=" "
          className="inp"
          
        />
                            </label></div>
                            
                        </Grid>

                        </Grid>

                        <div> <label className="website">
                               <h2 className="yo"> Website</h2>
                               <TextField
          id="standard-helperText"
          label=" " 
          defaultValue=" "
          className="in"
          
        />
                            </label></div>
                            




                        

                            <div style={{marginBottom:"10rem", marginTop:"3rem"}}>
                                <button style={{
                                      paddingTop:"0.7rem",
                                      paddingRight:"2.6rem",
                                      paddingBottom:"0.7rem",
                                      paddingLeft:"2.6rem"
                                      }}>
                                      <span style={{fontSize:"1.1rem"}}>Next</span></button>
                                    
                          
                           
                            </div>
                            </div>
                            
                    
                    </form>
                </Container>
            </div>
            
            
    );
};

// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;