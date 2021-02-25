import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, withStyles } from "@material-ui/core";
import { Container } from '@material-ui/core';
import { connect } from "react-redux";
import { getSingleContact } from "../Actions/ContactActions";
import bannerImage from "../default_banner.png"

const styles = (theme) => {
    return {
        ViewContact: {
            display: "flex",
            flexDirection: "column",
            border: "1px solid #EFEFEF",
            boxShadow: "0px 0px 20px rgba(0,0,0,0.05)",
            transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
            backgroundColor: "#FCFDFE",
            position: "relative",
            alignItems: "flex-start",
            padding: "10px 15px",
            backgroundColor: "#FCFDFE",
            justifyContent: "center",
            alignItems: "center",
            width: "20%",
            margin: "0 auto",

        },
        viewImage: {
            backgroundImage: `url(${bannerImage})`,
            backgroundColor: "red",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "140px",
            alignItems: "flex-end",
        },
        userImage: {
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "50%",
            marginBottom: "-37px"
        },
        userName: {
            marginTop: 10,
            textTransform: "capitalize",
            color: "#222222 ",
            fontWeight: "600",
        },
        userEmail: {
            color: "#626262"
        },
        viewDetail: {
            paddingLeft: "14px",
            marginTop: "30px"
        },
        content: {
            margin: "7px 0px 14px"
        }
    }

}

function ViewContact(props) {
    const { classes } = props
    const [singleContact, setsingleContact] = useState([]);

    // get single contact data
    useEffect(() => {
        props.getSingleContact(2);
    }, []);

    // store single data in to state
    useEffect(() => {
        setsingleContact(props.singleContact);
    }, [props.singleContact]);

    return (
        <div className={classes.ViewContact}>
            <div className={classes.viewImage}>
                <img src={singleContact.avatar} alt="user" className={classes.userImage} />
            </div>
            <div className={classes.viewDetail}>
                <Typography
                    component="h2"
                    align="left"
                    className={classes.userName}
                >
                    {singleContact.first_name} {singleContact.last_name}
                </Typography>
                <Typography
                    component="h2"
                    align="left"
                    className={classes.userEmail}
                >
                    {singleContact.email}
                </Typography>
                <p className={classes.content}>lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet </p>
            </div>
            <div>
                <Button className={classes.followButton} variant="contained" color="secondary" >
                    Follow
               </Button>
            </div>

        </div>
    );
}



const mapStateToProps = (state) => {
    return {
        singleContact: state.allContact.singleContact
    };
};


export default connect(mapStateToProps, {
    getSingleContact,
})(withStyles(styles)(ViewContact));
