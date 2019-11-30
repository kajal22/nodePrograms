import React, { Component } from 'react';
import '../css/forget.css';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',

        };
    }

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
                    <div className="ForgetPass">
                        <label>Forget Password</label>
                    </div><br></br>
                    <div className="heading">
                        <label>Enter your registered email</label>
                    </div>


                    <div className="textInput">
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined" />
                    </div>
                        <Button variant="contained" color="primary" className="forgetButton">SEND</Button>
            
                        <Button variant="contained" color="secondary" className="cancelButton" >CANCEL</Button>
                    
                </Card>

            </div>
        );
    }
}