import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import animationData from "../../animations/landinganimation/data";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "40rem",
    minWidth: "20rem",
    marginTop: "1rem",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "28rem",
    },
  },
  buttonContainer: {
    marginTop: "1rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    width: 145,
    height: 45,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
  },
  mainContainer: {
    marginTop: "4rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
  heroTextContainer: {
    minWidth: "21rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0rem",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.arcOrange,
  },
  subtitle: {
    marginBottom: "0.5rem",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "9rem",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {" "}
        {/*-----Hero Block-----*/}
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.estimateButton}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} width="100%" height="100%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Custom Software Block-----*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "4.5rem",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={customSoftwareIcon}
              alt="custom software icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----iOS/Android Block-----*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}
              with either mobile platform.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "4.5rem" }}>
            <img
              src={mobileAppIcon}
              alt="mobile app icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Websites Block-----*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "4.5rem",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={websiteIcon}
              alt="website icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
