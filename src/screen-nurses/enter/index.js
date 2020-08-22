import React from 'react';
import ReactDom from 'react-dom'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import './yo.css';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';




const Faci = ()=>{
    return(
            <div> 

                <Container style={{width: "40rem"}}>
                    <form>
                    <div><h1 >Enter Password</h1> </div>
                    <div>
                      

                        <div><p>Create a New Password</p></div>
                        <Input className="in" placeholder=" "/>
                        <p> Confirm the Password</p>
                        <Input className="in" placeholder=" "/>

                       
                       

                            <div style={{marginBottom:"10rem", marginTop:"3rem"}}>
                                <button align="right" style={{
                                      paddingTop:"0.7rem",
                                      paddingRight:"2.6rem",
                                      paddingBottom:"0.7rem",
                                      paddingLeft:"2.6rem",
                                      
                                      }}>
                                      <span style={{fontSize:"1.5rem"}}>Login</span></button>
                                    
                          
                           
                            </div>
                            </div>
                            
                    
                    </form>
                </Container>
            </div>
            
            
    );
};

// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;