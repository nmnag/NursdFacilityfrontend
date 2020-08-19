import React from 'react';
import ReactDom from 'react-dom'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import logo from './logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import './index.css';



const Faci = ()=>{
    return(
            <div>

                <Container style={{width: "35rem"}}>
                    <form>
                    <div><h1 >Forgot Password?</h1> </div>
                    <div>
                        <div>
                           <img src={logo} alt="Logo" className="logo" />;
                        </div>

                        <div><p> Please enter the Email associated with your account</p></div>

                        <div><p>Email</p></div>
                        <Input className="in" placeholder=" "/>
                        <h4> you will recieve a 4 digit code in your email for verification</h4>




                            <div style={{marginBottom:"10rem", marginTop:"3rem"}}>
                                <button align="right" style={{
                                      paddingTop:"0.7rem",
                                      paddingRight:"2.6rem",
                                      paddingBottom:"0.7rem",
                                      paddingLeft:"2.6rem",

                                      }}>
                                      <span style={{fontSize:"1.1rem"}}>Send</span></button>



                            </div>
                            </div>


                    </form>
                </Container>
            </div>


    );
};

// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;