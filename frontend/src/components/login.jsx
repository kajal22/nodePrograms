import React, { Component } from 'react';
import '../css/login.css';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
        };
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    render() {
        return (
            <div className="fundooApp">

                <Card style={{
                    marginTop: "7%",
                    display: "inline-block",
                    width: "37%",
                    height: "500px",
                    WebkitBoxShadow: "rgba(0, 0, 0, 0.4) 0 0 0, rgba(0, 0, 0, 0.45) 0 0 5px",
                    WebkitBorderRadius: "6px"
                }}>

                    <div className="fundooApp">
                        <b>
                            <span>
                                <label className="fstyle">f</label>
                                <label className="ustyle">u</label>
                                <label className="nstyle">n</label>
                                <label className="dstyle">d</label>
                                <label className="ostyle">o</label>
                                <label className="Ostyle">o</label>
                                <label className="Astyle">A</label>
                                <label className="pstyle">p</label>
                                <label className="Pstyle">p</label>
                            </span>
                        </b>
                        <div className="signIn">
                            <h1>Sign in</h1>
                        </div>

                    </div>

                    <div className="textInput">
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined" />
                        <br></br>


                        <TextField
                            id="outlined-adornment-password"
                            className="textInput"
                            variant="outlined"
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ?<Visibility /> : <VisibilityOff /> }
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <div className="loginButton">
                        <Button variant="contained" color="primary" >LOGIN</Button>
                    </div>
                    <div className="forgetlink">
                        <Link href="#">Forgot email?</Link>
                    </div>
                    <div className="createAccount">
                        <Link href="#">create account</Link>
                    </div>
                </Card>

            </div>
        );
    }
}

