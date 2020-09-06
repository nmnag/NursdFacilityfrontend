import React from 'react';
import 'date-fns';
import './demo.css'
import ReactDom from 'react-dom'
import Bookmark from './bookmark 1.png';
import Calendar from './calendar 1.png';
import Clock from './clock.png';
import Settings from './settings.png';
// import Group from './Group 65.png'
import Divider from './Divider.png'
import Sliders from './sliders.png'
import Facebook from './facebook 1.png'
import Linkedin from './linkedin 1.png'
import Twitter from './twitter 1.png'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Pagination from '@material-ui/lab/Pagination';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import { DateTimePicker, MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker } from "@material-ui/pickers";
import {Link} from 'react-router-dom';
import ShiftMenu from "../ShiftsMenu";
import Group from './Group 65.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Group94 from './Group 9454.png';
import Bell from './bell.png';
import ACCMenu from "../acMenu";

const marks = [
  {
    name: 5,
    value: 0,
    label: '5miles',
  },

  {
    value: 100,
    label: '50 miles',
  },
];

function valuetext(value) {
  return `${value} miles`;
}

const Faci = ()=>{
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const PurpleSwitch = withStyles({
    switchBase: {
      color: blue[300],
      '&$checked': {
        color: blue[500],
      },
      '&$checked + $track': {
        backgroundColor: blue[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
      checkedC: true,
    });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    const GreenRadio = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

    const [selectedValue, setSelectedValue] = React.useState('a');

      const handleChange1 = (event) => {
        setSelectedValue(event.target.value);
      };

    const onClick = (event) => {
      setSelectedValue(event.target.value);
    };
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 5,
      },
      menuButton: {
        marginRight: theme.spacing(5),
      },
    }));


      const classes = useStyles();

    return(
            <div>
            <div>
              <AppBar style={{backgroundColor:'#FFF'}}className="topnav" position="static">
                <Toolbar>
                  <img src={Group} alt="Group" className="logotop"/>
                  <Link to="/n-cards">
                  <button style={{
                          marginLeft: "630px",
                          paddingTop:"0.3rem",
                          paddingRight:"0.7rem",
                          paddingBottom:"0.3rem",
                          paddingLeft:"0.7rem"
                          }}
                          className="cdbutt3" >
                          <span style={{fontSize:"0.9rem"}}>Find a Shift</span></button>
                          </Link>

                  <div className="cdshifts">
                    <ShiftMenu/>
                    </div>

                  <p  className="shifts">
                    Messages
                  </p>
                  <img src={Bell} alt="Bell" className="bell"/>

                  <div className="ac">
                    <ACCMenu/>
                    </div>

                </Toolbar>
              </AppBar>
            </div>
                <Container style={{width: "60rem"}}>
                    <form>
                      <Grid container>
                       <Grid item xs={4}>
                      <p classname="sort">Sort by </p>

                      <div id="basic-select">
                         <select style={{marginLeft:'1px', marginRight:'5px' }}className="arrow">
                             <option value=" ">Smart AI</option>
                             <option value="one">One</option>
                             <option value="two">Two</option>
                             <option value="three">Three</option>
                             <option value="four">Four</option>
                         </select>
                      </div>
                       </Grid>

                       <Grid item xs={4}>
                      <p> Date </p>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                           style={{marginLeft:'5px'}}
                           className = "date"

                           id="date-picker-dialog"
                           label=" "
                           format="MM/dd/yyyy"
                           value={selectedDate}
                           onChange={handleDateChange}
                           KeyboardButtonProps={{
                              'aria-label': 'change date',
                               }}
                      />
                      </MuiPickersUtilsProvider>
                       </Grid>

                       <Grid item xs={4}>
                       <p>End-Date </p>
                       <MuiPickersUtilsProvider utils={DateFnsUtils}>
                       <KeyboardDatePicker
                            style={{marginLeft:'5px'}}
                            className = "date"

                            id="date-picker-dialog"
                            label=" "
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                               'aria-label': 'change date',
                                }}
                       />
                       </MuiPickersUtilsProvider>
                       </Grid>
                      </Grid>
                      <div>
                         <p className="job"> 1200 jobs near you</p>
                         <Pagination className="page" count={3} />
                      </div>
                      <Grid container>
                       <Grid item xs={7}>
                         <Card className="doc">
                           <CardContent>
                           <div>
                             <h2 className="h2"> XYZ Hospital </h2>
                             <img src={Bookmark} alt="Bookmark" className="bookmark"/>
                          </div>
                            <div>
                             <p className="popo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <p className="dou"> July 15th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="clock"/>
                               <p className="time"> 7:00AM - 10:30PM</p>
                               <h3 className="head"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="settings"/>
                              <p className="specs"> Specialisation </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                                      className="butt" >
                                      <span style={{fontSize:"0.9rem"}}>Easy Apply</span></button>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt2">
                                      <span style={{fontSize:"0.9rem"}}> view details</span></button>
                              </div>
                            </div>
                           </CardContent>
                         </Card>
                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> XYZ Hospital </h2>
                             <img src={Bookmark} alt="Bookmark" className="bookmark"/>
                          </div>
                            <div>
                             <p className="popo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <p className="dou"> July 15th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="clock"/>
                               <p className="time"> 7:00AM - 10:30PM</p>
                               <h3 className="head"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="settings"/>
                              <p className="specs"> Specialisation </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                               className="butt" >
                                      <span style={{fontSize:"0.9rem"}}>Easy Apply</span></button>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                               className="butt2">
                                      <span style={{fontSize:"0.9rem"}}> view details</span></button>
                              </div>
                            </div>
                           </CardContent>
                         </Card>
                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> XYZ Hospital </h2>
                             <img src={Bookmark} alt="Bookmark" className="bookmark"/>
                          </div>
                            <div>
                             <p className="popo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <p className="dou"> July 15th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="clock"/>
                               <p className="time"> 7:00AM - 10:30PM</p>
                               <h3 className="head"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="settings"/>
                              <p className="specs"> Specialisation </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt" >
                                      <span style={{fontSize:"0.9rem"}}>Easy Apply</span></button>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt2">
                                      <span style={{fontSize:"0.9rem"}}> view details</span></button>
                              </div>
                            </div>

                           </CardContent>
                         </Card>
                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> XYZ Hospital </h2>
                             <img src={Bookmark} alt="Bookmark" className="bookmark"/>
                          </div>
                            <div>
                             <p className="popo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <p className="dou"> July 15th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="clock"/>
                               <p className="time"> 7:00AM - 10:30PM</p>
                               <h3 className="head"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="settings"/>
                              <p className="specs"> Specialisation </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt" >
                                      <span style={{fontSize:"0.9rem"}}>Easy Apply</span></button>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                               className="butt2">
                                      <span style={{fontSize:"0.9rem"}}> view details</span></button>
                               </div>
                            </div>
                           </CardContent>
                         </Card>
                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> XYZ Hospital </h2>
                             <img src={Bookmark} alt="Bookmark" className="bookmark"/>
                          </div>
                            <div>
                             <p className="popo">Illinoise, USA </p>
                            </div>
                             <div>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <p className="dou"> July 15th </p>

                             </div>
                             <div>
                               <img src={Clock} alt="Clock" className="clock"/>
                               <p className="time"> 7:00AM - 10:30PM</p>
                               <h3 className="head"> $41.00/hr </h3>
                            </div>
                            <div>
                              <img src={Settings} alt="Settings" className="settings"/>
                              <p className="specs"> Specialisation </p>
                              <div>
                              <button style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt" >
                                      <span style={{fontSize:"0.9rem"}}>Easy Apply</span></button>
                              <button  style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.7rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.7rem"
                                      }}
                              className="butt2">
                                      <span style={{fontSize:"0.9rem"}}> view details</span></button>
                              </div>
                            </div>
                           </CardContent>
                         </Card>
                         <Pagination className="page1" count={3} />
                       </Grid>
                       <Grid item xs={5}>
                       <div className="filter">
                       <div>
                         <img src={Sliders} alt="Sliders" className="Sliders"></img>
                       </div>
                         <p className="po">Filters </p>

                       <Button onClick={onClick}
                       onChange={handleChange1}
                       className="pa"> Reset Filters

                       </Button>

                       <p className="h4"> Shift type </p>
                       <div>
                       <div>
                       <p className="radio"> Recommended shifts </p>
                       <GreenRadio className="rad"
                           checked={selectedValue === 'a'}
                           onChange={handleChange1}
                           value="a"
                           name="radio-button-demo"
                           inputProps={{ 'aria-label': 'A' }}
                           size="small"
                       />
                       </div>
                       <div>
                       <p className="radio1"> All shifts </p>
                       <GreenRadio className="rad1"
                           checked={selectedValue === 'b'}
                           onChange={handleChange1}
                           value="b"
                           name="radio-button-demo"
                           inputProps={{ 'aria-label': 'B' }}
                           size="small"
                       />
                       </div>
                       <p className="h4"> Shift type </p>
                       <div>
                       <p className="radio2"> Morning shift </p>
                       <GreenRadio className="rad2"
                           checked={selectedValue === 'c'}
                           onChange={handleChange1}
                           value="c"
                           name="radio-button-demo"
                           inputProps={{ 'aria-label': 'C' }}
                           size="small"
                       />
                       </div>
                       <div>
                       <p className="radio3" > Evening shift </p>
                       <GreenRadio className="rad3"
                           checked={selectedValue === 'd'}
                           onChange={handleChange1}
                           value="d"
                           name="radio-button-demo"
                           inputProps={{ 'aria-label': 'D' }}
                           size="small"
                       />
                       </div>

                       <div>
                       <p className="radio4" > Night shift </p>
                       <GreenRadio className="rad4"
                           checked={selectedValue === 'e'}
                           onChange={handleChange1}
                           value="e"
                           name="radio-button-demo"
                           inputProps={{ 'aria-label': 'E' }}
                           size="small"
                       />
                       </div>
                       <div>
                       <p className="radio5" > All shift </p>
                       <GreenRadio className="rad5"
                           checked={selectedValue === 'f'}
                           onChange={handleChange1}
                           value="f"
                           name="radio-button-demo"
                           inputProps={{ 'aria-label': 'F' }}
                           size="small"
                       />
                       </div>
                       </div>
                       <p className="h4"> Distance </p>
                       <Typography id="continuous-slider" gutterBottom>

                      </Typography>
                      <Slider

                        getAriaValueText={valuetext}
                        aria-labelledby="continuous-slider"
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
                      />

                     </div>
                       </Grid>
                      </Grid>
                    </form>
                </Container>
                <div className="footer">
                  <Container style={{width: "100rem"}}>
                  <Grid container>
                   <Grid item xs={3}>
                   <img src={Group} alt="Group" className="cdlogo"/>
                   </Grid>
                   <Grid item xs={4}>
                    <div className="about">
                     <p className="fop"> About us </p>
                     <p className="fohe"> Simple Flexible Convenient</p>
                     <p className="text">We believe that affinity, common purpose, and trust make powerful networks. NURSD is a secure, private, vetted platform for healthcare facilities looking for high-quality talent and for nurses to explore, identify job opportunities that provide a balance between lifestyle, preferences, and flexibility.</p>
                      <Grid container>
                       <Grid item xs={1}>
                         <img src={Linkedin} alt="Linkedin" className="linkedin"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Facebook} alt="Facebook" className="facebook"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Twitter} alt="twitter" className="twitter"/>
                       </Grid>
                      </Grid>
                     </div>
                   </Grid>

                   <Grid item xs={1}>
                    <img src={Divider} alt="Divider" className="devider" />
                   </Grid>
                   <Grid item xs={3}>
                    <div>
                     <div className="bol">
                     <p className="fool"> For Nurses </p>
                     <p className="fool2"> About </p>
                     </div>
                     <div>
                     <p className="l1"> For Facilities</p>
                     <p className="l12"> Press </p>
                     </div>
                     <div>
                     <p className="l2"> How It Works </p>
                     <p className="l22"> Careers </p>
                     </div>
                     <div>
                     <p className="l3"> Blog </p>
                     <p className="l32"> Events </p>
                     </div>
                     <div>
                     <p className="l4"> FAQs </p>
                     <p className="l42"> Contact Us </p>
                     </div>
                    </div>
                   </Grid>

                   </Grid>

                  </Container>
                </div>
            </div>


    );
};

const top13Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
];

export default Faci;
