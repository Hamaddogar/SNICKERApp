import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BrowserRouter, Route, Link } from "react-router-dom";

// CSS import
import '../Card/CSS/Style.css'

import w1 from '../../../img/white/w1.jpg'
import w2 from '../../../img/white/w2.jpg'
import w3 from '../../../img/white/w3.jpg'
import w4 from '../../../img/white/w4.jpg'

import t1 from '../../../img/tech/t1.jpg'
import t2 from '../../../img/tech/t2.jpg'
import t3 from '../../../img/tech/t3.jpg'
import t4 from '../../../img/tech/t4.jpg'

import v1 from '../../../img/vintage/v1.jpg'
import v2 from '../../../img/vintage/v2.jpg'
import v3 from '../../../img/vintage/v3.jpg'
import v4 from '../../../img/vintage/v4.jpg'

import c1 from '../../../img/color/c1.jpg'
import c2 from '../../../img/color/c2.jpg'
import c3 from '../../../img/color/c3.jpg'
import c4 from '../../../img/color/c4.jpg'


const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 550,
  // },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (


    <Card >
      {/* <h3>THE ULTIMATE SNEAKERS</h3>
      <p>
        <h4>
         The humble sneaker has been elevated beyond the gym floor and on to the runways. Give your ensumables a luxe finish with our timeless fashion-approved trainers. These are the sneakers that never date.
        </h4>
      </p> */}

      {/* WHITE CARDS */}
      <div style={{ paddingLeft: "100px", paddingTop: "20px" }}><h5 >WHITE</h5></div>

      <div class="container">
        <div class="row">
          <div class="col">

            <CardHeader
              avatar={
                <Avatar aria-label="shop" className={classes.avatar}>
                  S
                </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0003" />

            <CardMedia
              className={classes.media}
              image={w3}
              title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
                $ 189.00  Discount -30%
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>
          <div class="col">
            <CardHeader
              avatar={
                <Avatar aria-label="shop" className={classes.avatar}>
                  S
                </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0003" />

            <CardMedia
              className={classes.media}
              image={w4}
              title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
                $ 189.00  Discount -30%
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>

          </div>

        </div>
      </div>


      <div class="container">
        <div class="row">
          <div class="col">

            <CardHeader
              avatar={
                <Avatar aria-label="shop" className={classes.avatar}>
                  S
                </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0003" />

            <CardMedia
              className={classes.media}
              image={w1}
              title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
                $ 189.00  Discount -30%
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>
          <div class="col">
            <CardHeader
              avatar={
                <Avatar aria-label="shop" className={classes.avatar}>
                  S
                </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0003" />

            <CardMedia
              className={classes.media}
              image={w2}
              title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
                $ 189.00  Discount -30%
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>

          </div>
        </div>
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "20px" }}><h5 >TECH</h5></div>

      <div class="container">
        <div class="row">
          <div class="col">

            <CardHeader
              avatar={
                <Avatar aria-label="shop" className={classes.avatar}>
                  S
          </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0003" />

            <CardMedia
              className={classes.media}
              image={t1}
              title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
                $ 189.00  Discount -30%
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>
          <div class="col">
            <CardHeader
              avatar={
                <Avatar aria-label="shop" className={classes.avatar}>
                  S
          </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0003" />

            <CardMedia
              className={classes.media}
              image={t2}
              title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
                $ 189.00  Discount -30%
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>

          </div>
        </div>
        
      </div>
      <div class="container">
        <div class="row">
          <div class="col">

            <CardHeader
              avatar={
                <Avatar aria-label="shop" className={classes.avatar}>
                  S
          </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0003" />

            <CardMedia
              className={classes.media}
              image={t4}
              title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
                $ 189.00  Discount -30%
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>
          </div>
          <div class="col">
            <CardHeader
              avatar={
                <Avatar aria-label="shop" className={classes.avatar}>
                  S
          </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title="NIKE"
              subheader="Style SN 0003" />

            <CardMedia
              className={classes.media}
              image={t3}
              title="NIKE" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
                $ 189.00  Discount -30%
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
                <Typography paragraph>

                </Typography>
              </CardContent>
            </Collapse>

          </div>
        </div>
        
      </div>


      {/* vintage */}
      <div style={{ paddingLeft: "100px", paddingTop: "20px" }}><h5 >Vintage</h5></div>

<div class="container">
  <div class="row">
    <div class="col">

      <CardHeader
        avatar={
          <Avatar aria-label="shop" className={classes.avatar}>
            S
    </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={v1}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>
    </div>
    <div class="col">
      <CardHeader
        avatar={
          <Avatar aria-label="shop" className={classes.avatar}>
            S
    </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={v2}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>

    </div>
  </div>
  
</div>
<div class="container">
  <div class="row">
    <div class="col">

      <CardHeader
        avatar={
          <Avatar aria-label="shop" className={classes.avatar}>
            S
    </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={v3}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>
    </div>
    <div class="col">
      <CardHeader
        avatar={
          <Avatar aria-label="shop" className={classes.avatar}>
            S
    </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={v4}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>

    </div>
  </div>
  
</div>

<div style={{ paddingLeft: "100px", paddingTop: "20px" }}><h5 >COLOR</h5></div>

<div class="container">
  <div class="row">
    <div class="col">

      <CardHeader
        avatar={
          <Avatar aria-label="shop" className={classes.avatar}>
            S
    </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={c1}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>
    </div>
    <div class="col">
      <CardHeader
        avatar={
          <Avatar aria-label="shop" className={classes.avatar}>
            S
    </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={c2}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>

    </div>
  </div>
  
</div>
<div class="container">
  <div class="row">
    <div class="col">

      <CardHeader
        avatar={
          <Avatar aria-label="shop" className={classes.avatar}>
            S
    </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={c3}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>
    </div>
    <div class="col">
      <CardHeader
        avatar={
          <Avatar aria-label="shop" className={classes.avatar}>
            S
    </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={c4}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>

    </div>
  </div>
  
</div>
      {/* <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography> */}
      {/* <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}

    </Card>


  );
}
