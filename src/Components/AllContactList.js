import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Container } from '@material-ui/core';
import ContactCard from "./ContactCard";
import { getContactData } from "../Actions/ContactActions"
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";

const styles = () => {
    const $quoteSym = " ";

    return {
        pageHeader: {
            margin: "20px",
            fontSize: "22px",
            fontWeight: "bold",
            paddingBottom: "5px",
            position: "relative",
            "&:after": {
                top: "32px",
                left: "0px",
                width: "42px",
                borderBottom: "3px solid #fb0",
                content: `'${$quoteSym}'`,
                position: "absolute"
            }
        }
    }
}

function AllContactList(props) {
    const { classes } = props;
    const [allContact, setallContact] = useState([]);
    console.log("props", allContact);

    // get all contact data 
    useEffect(() => {
        props.getContactData(2);
    }, []);
    // set data into state
    useEffect(() => {
        setallContact(props.allContact);
    }, [props.allContact]);

    return (
        <Container maxWidth="lg">
            <div className={classes.pageHeader}>
                <p>All Contact</p>
            </div>
            {/* display user card  */}
            <Grid container spacing={2}>
                {allContact.map((item, key) => {
                    return (<Grid item sm={6} lg={4}>
                        <ContactCard data={item} />
                    </Grid>
                    )
                })}
            </Grid>

        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        allContact: state.allContact.allContact
    };
};


export default connect(mapStateToProps, {
    getContactData,
})(withStyles(styles)(AllContactList));