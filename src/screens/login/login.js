import React from 'react';
// import ReactDom from 'react-dom'
import './login.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Group94 from './Group 9454.png'
import Group68 from './Group 68.png'
// import TextField from '@material-ui/core/TextField';
import Group65 from './Group 65.png'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Faci = ()=>{


  const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 5,
        },
        menuButton: {
          marginRight: theme.spacing(5),
        },
      }));

      const classes = useStyles();
      const [values, setValues] = React.useState({

        password: '',
        username: '',
        showUsername: true,
        showPassword: false,
      });

      const handleChange = (prop) => (event) => {
         setValues({ ...values, [prop]: event.target.value });
       };


      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const newTo = { 
        pathname: "/auth", 
        param1: values.username,
        param2: values.password 
      };

  return(
        <div>
        <div>
          <AppBar style={{backgroundColor:'#FFF'}}className="logintopnav" position="static">
            <Toolbar>
              <img src={Group65} alt="Group65" className="loginlogotop"/>

              <p className="loginshifts1">
                For Nurses
              </p>
              <p  className="loginshifts">
                For Facilities
              </p>
              <p  className="loginshifts">
                Covid-19
              </p>
              <p  className="loginshifts">
                About us
              </p>
              <p  className="loginshifts">
                Login
              </p>
              <button style={{
                      paddingTop:"0.3rem",
                      paddingRight:"0.7rem",
                      paddingBottom:"0.3rem",
                      paddingLeft:"0.7rem"
                      }}
                      className="loginbutt30" >
                      <span style={{fontSize:"0.9rem"}}> sign up</span></button>
            </Toolbar>
          </AppBar>
        </div>
            <Container style={{width: "60rem"}}>
                <form>
                 <Grid container>
                 <Grid item xs={6}>
                   <h2> Hello, </h2>
                   <h2> Welcome Back! </h2>
                    <div> 
                        <label className="loginname">
                          <p className="loginp"> Email</p>
                        </label>
                    </div>
                   <Input 
                   type={values.showUsername ? 'text' : 'username'}
                   className="logininp1"
                   onChange={handleChange('username')}
                  //  id={username}
                  // username={this.state.username}
                   value={values.username}
                  //  type="text"
                   />
                   <FormControl className={clsx(classes.margin, classes.textField)}>
          <p> Password</p>
          <Input
            // id={password}
            // password={this.state.password}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            className="logininp"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
                  }
                />
                </FormControl>

                <div style={{display:"inline- block"}}>
                <Checkbox color ="primary" style={{marginLeft: '5px'}} className="loginbox" /> <p className="loginp7"> Remember me </p>


                <p className="loginpass"> Forgot password? </p>
                </div>
                <div>
                <Link to={newTo}
                >
                <button style={{
                        paddingTop:"0.3rem",
                        paddingRight:"0.7rem",
                        paddingBottom:"0.3rem",
                        paddingLeft:"0.7rem"
                        }}
                        className="loginbutt7" >
                        <span style={{fontSize:"1.1rem"}}> Login</span></button></Link>
                  </div>
                  <p className="loginnot"> Not yet registered? </p> <p className="loginsign"> Sign up</p>
                 </Grid>
                   <Grid item xs={6}>
                   <img style={{width: '145%', height:'450px'}} src={Group68} alt="Group68"/>
                   </Grid>
                   <Grid item xs={6}>

                   </Grid>

                 </Grid>
                </form>
            </Container>
        </div>

    );
};
// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;