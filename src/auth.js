import React from 'react';
// import ReactDom from 'react-dom'
// import './login.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Group94 from './Group 9454.png'
// import Group68 from './Group 68.png'
// import TextField from '@material-ui/core/TextField';
// import Group65 from './Group 65.png'
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
import { Redirect } from 'react-router-dom';
// import {username,password} from './screens/login/login';
export default class Faci extends React.Component{
        render(){
            if(this.props.location.param1=='nurse' && this.props.location.param2=='nurse@123'){
                return <Redirect to={{pathname:'/n-cards'}} />;
            }
            else if(this.props.location.param1=='facility' && this.props.location.param2=='facility@123'){
                return <Redirect to={{pathname:'/dashboard-facility'}} />;
            }
            else{
                return <Redirect to={{pathname:'/'}} />;
            }
        }

}

