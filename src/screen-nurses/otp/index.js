import React from 'react';
import ReactDom from 'react-dom'
import './styles.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';




const Page5 = () => {
    return (

        <div >
            <Container style={{ width: "800px", marginTop: "5rem" }}>
                <form>
                    <div> <h2 className="oops" style={{ color: "#1082CB" }}>Enter OTP</h2> </div>

                    <p className="ffoont" style={{ marginTop: "2rem" }}> Enter the verification code sent to you on your<br />registered Email address</p>


                    <Grid>
                        <Grid item xs={12}>
                            <div>
                                <p className="ffoont" style={{ marginTop: "2rem" }}> Didn't recieve the code? <a  style={{ color:'#1082CB'}}href="https://google.com/">Resend</a></p>
                            </div>
                        </Grid>
                    </Grid>
                    <div>
                        <button className="button" type="submit" style={{paddingTop:"0.7rem",
                                      paddingRight:"2.6rem",
                                      paddingBottom:"0.7rem",
                                      paddingLeft:"2.6rem", marginTop:"3rem",marginLeft:"28rem"}}>Next</button>
                    </div>
                </form>
            </Container>

        </div>





    );
}
// ReactDom.render(<Page5 />, document.querySelector('#root'))
export default Page5;