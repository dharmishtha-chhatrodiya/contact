import React from "react";
import { Button, Typography, withStyles } from "@material-ui/core";

const styles = (theme) => {
    return {
        card: {
            display: "flex",
            border: "1px solid #EFEFEF",
            boxShadow: "0px 0px 20px rgba(0,0,0,0.05)",
            transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
            backgroundColor: "#FCFDFE",
            position: "relative",
            alignItems: "flex-start",
            padding: "10px 15px",
            "&:hover": {
                transform: "scale(1.01)",
                boxShadow:
                    "rgb(178 183 187 / 6%) 0px 2px 4px 6px, rgb(212 219 226 / 60%) 0px 2px 10px 0px",
            },
        },
        userImage: {
            width: "60px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "50%"
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
        cardDetail: {
            paddingLeft: "14px",
            width: "100%"
        },
        viewButton: {
            textTransform: "capitalize"
        },
        cardFooter: {
            marginTop: "14px"
        }
    }

}

function ContactCard(props) {
    const { classes, data } = props

    return (
        <div>
            <div className={classes.card} >
                <div className={classes.cardTopSection}>
                    <img src={data.avatar} alt="user" className={classes.userImage} />
                </div>
                <div className={classes.cardDetail}>
                    <Typography
                        component="h2"
                        align="left"
                        className={classes.userName}
                    >
                        {data.first_name} {data.last_name}
                    </Typography>
                    <Typography
                        component="h2"
                        align="left"
                        className={classes.userEmail}
                    >
                        {data.email}
                    </Typography>
                </div>
                <div className={classes.cardFooter}>
                    <Button className={classes.viewButton} variant="contained" color="default" href={`/view-contact/${data.id}`}>
                        View
               </Button>
                </div>

            </div >

        </div>
    );
}


export default withStyles(styles)(ContactCard);
