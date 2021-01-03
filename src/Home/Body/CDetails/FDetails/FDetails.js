import React from 'react';
import '../Css/Style.css';
import CDetails from '../CDetails'

import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import StarRatings from 'react-star-ratings';
import {
  withStyles,
  Radio,
  Checkbox,
  Fab, CircularProgress, Hidden, Link
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function FDetails() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Header />

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <CDetails />
          </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">

              Nike Blazer Mid '77 Vintage
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p" >
              <del>370$</del>   <span style={{ color: "red" }}> $ 189.00  (-30%)</span>
            </Typography>
            <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="15px"
                starRatedColor="black"

              />
            </Typography>
            <br />

            <Typography component="p">
              Dans les années 70, Nike nDans les années 70, Nike n'en était encore qu'à ses débuts. À l'époque, nous n'avions pas encore percé dans l'univers du basketball et nous expérimentions nos prototypes sur les joueurs de notre équipe locale. .

             </Typography>

               <br/><br/>
            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 60, height: 60, width: 220, backgroundColor: "black" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div>
                <br/>
              
          </div>

        <img src="https://addismercato.com/images/category_banner/Sports%20Shoes%20Banner.jpg" />

        </div>

      </div>




      {/* 
       <div id="main">
       <div id="box1">
        <CDetails/>
       </div>
       <div id="box1">
         <h1>CONVERSE JACK PURCELLS</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0001</p>
         <p>$120.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>

       <div id="box2">
        <CDetails/>
       </div>
       <div id="box2">
       <h1> GREAT ROYALE</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0002</p>
         <p>$179.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>
       </div>  
     
       <div id="main2"> 
       <div id='box3'>
        <CDetails/>
       </div>
       <div id="box3">
         <h1>NIKE</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0003</p>
         <p>$189.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>

       <div id="box4">
        <CDetails/>
       </div>
       <div id="box4">
         <h1>RE/DONE</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0004</p>
         <p>$21O.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>
       </div>  
  
       <div id="main3">
       <div id="box5">
        <CDetails/>
       </div>
       <div id="box5">
       <h1>ADIDAS</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0005</p>
         <p>$449.90.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>

       <div id="box6">
        <CDetails/>
       </div>
       <div id="box6">
         <h1>BALENCIAGA</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0006</p>
         <p>$550.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>
       </div>  

       <div id="main4">
       <div id="box7">
        <CDetails/>
       </div>
       <div id="box7">
        <h1>NIKE</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0007</p>
         <p>$320.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>

       <div id="box8">
        <CDetails/>
       </div>
       <div id="box8">
       <h1>ASIC</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0008</p>
         <p>$275.90</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div> 
       </div>  
       
      <div id='main5'>
      <div id="box9">
        <CDetails/>
      </div>
       <div id="box9">
       <h1>NEW BALANCE</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0009</p>
         <p>$220.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>

       <div id="box10">
        <CDetails/>
       </div>
       <div id="box10">
       <h1>ADIDAS</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0010</p>
         <p>$190.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div> 
       </div>  

      <div id='main6'>
      <div id="box11">
        <CDetails/>
      </div>
       <div id="box11">
       <h1>TIGERS</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0011</p>
         <p>$220.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>

       <div id="box12">
        <CDetails/>
      </div>
       <div id="box12">
       <h1>PUMA</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0012</p>
         <p>$220.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div> 
       </div>  

      <div id='main7'>
      <div id="box13">
        <CDetails/>
      </div>
       <div id="box13">
       <h1>CHLOE</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0013</p>
         <p>$720.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>

       <div id="box14">
        <CDetails/>
      </div>
       <div id="box14">
       <h1>MONCLER GENIUS</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0014</p>
         <p>$755.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div> 
       </div>  

      <div id='main8'>
      <div id="box15">
        <CDetails/>
      </div>
       <div id="box15">
       <h1>GUUCI</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0015</p>
         <p>$1400.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div>

       <div id="box16">
        <CDetails/>
      </div>
       <div id="box16">
       <h1>BALENGIAGA</h1>
         <p>White</p>
         <p>In stock</p>
         <p>Style SN 0016</p>
         <p>$1820.00</p>
         <p>30% Discount Free Shipping included</p>
         <p>US SIZES</p>
         <p>CHECKOUT</p>
       </div> 
       </div>    */}
<br/>
      <Footer />
    </div>
  )
}
export default FDetails;