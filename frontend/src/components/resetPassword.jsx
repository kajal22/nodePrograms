import React, { Component } from 'react';
import '../css/resetPassword.css';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';


export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPasssword:'',
            showPassword: false,
            showPasswords:false,
        };
    }
    handleChange = prop => event => {
        
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    
    handleChanges = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPasswords = () => {
        this.setState(state => ({ showPasswords: !state.showPasswords }));
    };

    render() {
        return (
            <div className="fundooApp">

                <Card style={{
                    marginTop: "7%",
                    display: "inline-block",
                    width: "37%",
                    height: "400px",
                    WebkitBoxShadow: "rgba(0, 0, 0, 0.9) 0 0 0, rgba(0, 0, 0, 0.50) 0 0 5px",
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
                    </div>
                    <br></br>
                    <div className="resetPass">
                        <label>Reset Password</label>
                    </div><br></br>

                    <TextField
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
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    /><br></br><br></br>

                    <TextField
                        className="textInput"
                        variant="outlined"
                        type={this.state.showPasswords ? 'text' : 'password'}
                        label="confirmPasssword"
                        value={this.state.confirmPasssword}
                        onChange={this.handleChanges('confirmPasssword')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPasswords}
                                    >
                                        {this.state.showPasswords ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    /><br></br><br></br>
                    <Button variant="contained" color="primary" className="resetButton">SUBMIT</Button>

                </Card>

            </div>
        );
    }
}