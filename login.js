import React, { useState} from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography, Link, } from '@material-ui/core';
import LockClockIcon from '@material-ui/icons/LockOutlined';
const Login=()=>{
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor: 'blue'}
    const btnstyle={margin: '8px 0'}
    return(
       <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
               <Avatar style={avatarStyle}><LockClockIcon/></Avatar>
               <h6>Dashboard Kit</h6>
               <h2>Log In to Dashboard Kit</h2>
               <h6>Enter your email and password below</h6>

                 </Grid>
                 <TextField label='EMAIL' placeholder='Email address' fullWidth required/>
                 <TextField label='PASSWORD' placeholder='password' type={passwordIsVisible ? 'text' : 'password'} fullWidth required/>
                 <button onClick={() => setPasswordIsVisible((prevState) => !prevState)}>{passwordIsVisible ? 'Hide' : 'Show'}</button> 
            <Button type onClick="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Log In</Button>
            <Typography >
                <Link href="#" >
                    Forgot password ?
                </Link>
            </Typography>
            <Typography >
                Do you have an account ?
                <Link href="#" >
                    Sign Up?
                </Link>
            </Typography>
            </Paper>
        </Grid>

    );
}
export default Login;