import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import { Hidden } from "@material-ui/core";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "17.5rem",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "12rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "8.5rem",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "1.5rem",
  },
  category: {
    fontFamily: "Arial",
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "black",
    textDecoration: "none",
    color: "white",
  },
  icon: {
    height: "2.5rem",
    width: "2.5rem",
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
      width: "2rem",
    },
  },
  socialContainer: {
    position: "absolute",
    right: "1rem",
    bottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      right: "0.5rem",
      bottom: "0.5rem",
    },
  },
}));

const links = [
  { category: "Home", path: "/", links: [] },
  {
    category: "Services",
    path: "/services",
    links: [
      { name: "Custom Software Development", path: "/customsoftware" },
      { name: "Mobile App Development", path: "/mobileapps" },
      { name: "WebSite Development", path: "/websites" },
    ],
  },
  {
    category: "The Revolution",
    path: "/revolution",
    links: [
      { name: "Vision", path: "/" },
      { name: "Technology", path: "/" },
      { name: "Process", path: "/" },
    ],
  },
  {
    category: "About Us",
    path: "/about",

    links: [
      { name: "History", path: "/" },
      { name: "Team", path: "/" },
    ],
  },
  { category: "Contact Us", path: "/contact", links: [] },
];

const socialMedia = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/",
    icon: facebook,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/",
    icon: instagram,
  },
  {
    name: "Twitter",
    path: "https://www.twitter.com/",
    icon: twitter,
  },
];

export default function Footer({
  setSelectedIndex,
  selectedIndex,
  setValue,
  value,
}) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          {links.map((item, index) => (
            <Grid item key={item.category + index} className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={NavLink}
                  to={item.path}
                  className={classes.category}
                  onClick={() => {
                    setValue(index);
                    setSelectedIndex(0);
                  }}
                >
                  {item.category}
                </Grid>
                {item.links.map((link, index2) => (
                  <Grid
                    item
                    key={link + index2}
                    className={classes.link}
                    component={NavLink}
                    to={link.path}
                    onClick={() => {
                      if (item.category === "Services") {
                        setSelectedIndex(index2 + 1);
                        setValue(index);
                      }
                    }}
                  >
                    {link.name}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>

      <Grid
        container
        justifyContent="flex-end"
        className={classes.socialContainer}
        spacing={1}
      >
        {socialMedia.map((item, index) => (
          <Grid
            item
            component={"a"}
            href={item.path}
            rel="noopener noreferrer"
            target="_blank"
            key={item.name + index}
          >
            <img alt={item.name} src={item.icon} className={classes.icon} />
          </Grid>
        ))}
      </Grid>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
}
