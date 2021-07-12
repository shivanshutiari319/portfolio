import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import PortfolioList from "../portfolioList/PortfolioList";
import "./skills.scss";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import "../../skill"
import {
  featuredPortfolio,
  webPortfolio,
// 
} from "../../data";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));
export default function Portfolio() {
  const classes = useStyles();
 return (
   <div className="portfolioo">
    
     <h1>Skills</h1>
    <div className="containerr">
     <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>C++</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>JavaScript</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>NodeJS</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper} classname="edit">ReactJS</Paper>
        </Grid>
        </div>




   </div>
 )
}
