import React, { Component } from 'react';
import '../css/registration.css';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import {registration} from '../services/userServices'
export  class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            loginType: "",
            password: "",
            confirmPasssword: "",
            showPasswords: false,
        };
    }
    initiateRegistration = () => {
        console.log("register");

        if (this.state.password !== this.state.confirmPasssword) {
            console.log("pass not match");

        } else {
            let registrationObject = {};
            registrationObject.firstName = this.state.firstName
            registrationObject.lastName = this.state.lastName
            registrationObject.email = this.state.email
            registrationObject.password = this.state.password
            registrationObject.confirmPasssword = this.state.confirmPasssword

            console.log("registrationObjectt", registrationObject);

            registration(registrationObject).then((data) => {

                console.log("responseeee=>>>>", data);

            })
        }
    }



    handleChangefirst = firstName => event => {
        this.setState({

            firstName: event.target.value,
        });
    };
    handleChangesecond = lastName => event => {
        this.setState({
            lastName: event.target.value,
        });
    };
    handleChangethird = email => event => {
        this.setState({
            email: event.target.value,
        });
    };
    handleChangefourth = password => event => {
        console.log("pass", event.target.value);
        this.setState({
            password: event.target.value
        });
    };
    handleChangefifth = confirmPasssword => event => {
        console.log("confirmPasssword", event.target.value);
        this.setState({
            confirmPasssword: event.target.value
        });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPasswords: !state.showPasswords }));
    };


    render() {
        return (
            <div className="fundooApp">

                <Card style={{
                    marginTop: "7%",
                    display: "inline-block",
                    width: "50%",
                    height: "420px",
                    WebkitBoxShadow: "rgba(0, 0, 0, 0.9) 0 0 0, rgba(0, 0, 0, 0.50) 0 0 5px",
                    WebkitBorderRadius: "6px"
                }}>

                    <div>
                        <b>
                            <span className="fundoo">
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
                    <label className="label">Create your fundoo Account</label>

                    <br></br>
                    <div className="leftMargin">
                        <TextField
                            label="firstName"
                            className="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChangefirst('firstName')}
                            margin="normal"
                            variant="outlined"
                        />&nbsp;&nbsp;&nbsp;

                        <TextField
                            label="lastName"
                            className="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChangesecond('lastName')}
                            margin="normal"
                            variant="outlined"
                        /></div><br></br><br></br><br></br>

                    <div className="leftMargin">
                        <TextField
                            label="email"
                            className="email"
                            value={this.state.email}
                            onChange={this.handleChangethird('email')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div><br></br><br></br><br></br>

                    <div className="leftMargin">
                        <TextField
                            className="textInput"
                            variant="outlined"
                            type={this.state.showPasswords ? 'text' : 'password'}
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChangefourth('password')}

                        />&nbsp;&nbsp;&nbsp;

                    <TextField
                            className="textInput"
                            variant="outlined"
                            type={this.state.showPasswords ? 'text' : 'password'}
                            label="confirmPasssword"
                            value={this.state.confirmPasssword}
                            onChange={this.handleChangefifth('confirmPasssword')}

                        /><IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                        >
                            {this.state.showPasswords ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </div><br></br>



                    <div className="leftMargin">
                        <label className="label2">Use 8 or more characters with a mix of letters, numbers & symbols</label>
                    </div><br></br><br></br><br></br>
                    <div className="leftMargin">
                        <Button variant="contained" color="primary" className="register" onClick={this.initiateRegistration}>REGISTER</Button>
                    </div>
                    <div className="rightMargin">
                        <Button variant="contained" color="secondary">CANCEL</Button>
                    </div>

                    <div className="rightMargin1" >
                        <Link href="#">sign in instead</Link>
                    </div>
                </Card>
            </div>
        );
    }
}