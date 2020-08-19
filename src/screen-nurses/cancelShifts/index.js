import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

 const Faci = ()=> {

    return (

             <div>

                <Container style={{width: "60rem"}}>
                    <form>
                      <div>  <h1> XYZ Facility</h1></div>
                      <Grid container>
                      <Grid item xs={6}>
                        <div style={{marginBottom:"10rem", marginTop:"3rem"}}>
                               <button className="csbutt1" align="right" style={{
                                     paddingTop:"0.7rem",
                                     paddingRight:"2.6rem",
                                     paddingBottom:"0.7rem",
                                     paddingLeft:"2.6rem",

                                     }}>
                                     <span style={{fontSize:"1.5rem"}}>$41.00/hr</span></button>
                                     <select className="csarrow">

                                        <option value=" " selected>  7733 West Grand Avenue Elmwood Park, IL 60707   </option>
                                        <option value="one">One</option>
                                        <option value="two">Two</option>
                                        <option value="three">Three</option>
                                        <option value="four">Four</option>
                                   </select>
               
                   <Grid Container>
                    <Grid item xs={6}>
                      <TextField
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        className="csarrow"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="time"
                        type="time"
                        defaultValue="07:30"
                        className="csarrow2"
                        inputProps={{
                          step: 300 
                        }}
                      />
                    </Grid>
                    </Grid>
                    
                  
                
                               
                               <div id="basic-select">
                                   <select className="csarrow2">

                                        <option value=" " selected>  specialisation   </option>
                                        <option value="one">One</option>
                                        <option value="two">Two</option>
                                        <option value="three">Three</option>
                                        <option value="four">Four</option>
                                   </select>
                               </div>
                             
              
              {/* <label>Job Description</label>
                <textarea id = "myTextArea"
                  rows = "3"Yo
                  cols = "55"></textarea>
                      
              <label>Compensation Structure - Optional</label>
                <textarea id = "myTextArea"
                  rows = "3"
                  cols = "55"></textarea>
               <div>        
              <label>Shift Structure - Optional</label>
                <textarea id = "myTextArea"
                  rows = "3"
                  cols = "55"></textarea>
                </div>       
                <div>       
              <label>Any Remarks-Free to Edit</label>
                <textarea id = "myTextArea"
                  rows = "3"
                  cols = "55"></textarea>
                </div>        */}
                      
              
      
      </div>            
                        </Grid>


                        <Grid item xs={6}>
                        
                <label>About Facility</label>
                <textarea id = "myTextArea"
                  rows = "3"
                  cols = "55"></textarea>
                      
                       
              <label>Remarks </label>
                <textarea id = "myTextArea"
                  rows = "3"
                  cols = "55"></textarea>

                                      <Grid item xs={6}>  
                                     <div style={{marginBottom:"3rem", marginTop:"1rem"}}>
                                         <button className="csbutt3" style={{
                                              paddingTop:"0.7rem",
                                              paddingRight:"2.6rem",
                                              paddingBottom:"0.7rem",
                                              paddingLeft:"2.6rem"
                                              }}>
                                          <span style={{fontSize:"1.0rem"}}>Cancel Shift</span></button>
                                     </div>
                                     </Grid>
                                     <Grid item xs={6}>
                                     <div style={{marginBottom:"3rem", marginTop:"1rem"}}>
                                         <button className="csbutt3" style={{
                                              paddingTop:"0.7rem",
                                              paddingRight:"2.6rem",
                                              paddingBottom:"0.7rem",
                                              paddingLeft:"2.6rem"
                                              }}>
                                          <span style={{fontSize:"1.0rem"}}>Message Facility</span></button>
                                     </div>
                                     </Grid>
                                
                                
                       
                        </Grid>
                      </Grid>
                    </form>
                  </Container>
                  </div>
    );





 };
//  ReactDOM.render(<Faci/>,document.querySelector('#root'));
export default Faci;
