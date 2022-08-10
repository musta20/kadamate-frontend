import {
  CardHeader,
  Avatar,
  Card,
  CardActions,
  Button,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const ServicesCard = ({ title, des }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>

<CardContent>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: "red",
                width: "25px",
                height: "25px",
                backgroundColor: "whitesmoke",
              }}
              src="https://mui.com/static/images/avatar/3.jpg"
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
        />
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {des}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ServicesCard;
