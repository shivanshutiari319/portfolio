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
    
       <ul>
         <li className="active">C++</li>
         <li className="active">C++</li>
         <li className="active">JavaScript</li>
         <li className="active">NodeJS</li>
         <li className="active">ReactJS</li>
         <li className="active">Express</li>
         <li className="active">MongoDB</li>
         <li className="active">JWT</li>
         <li className="active">Material/UI</li>
         <li className="active">CSS</li>
         <li className="active">HTML</li>
        

       </ul>
      

   </div>
 )
}
