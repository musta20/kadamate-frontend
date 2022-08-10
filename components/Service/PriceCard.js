import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function PriceCard({ spacing }) {
  return (
    <Box flex={spacing}>
      <Card sx={{ position: "sticky", zIndex: 5, top: 0 }}>
     
        <CardContent>
        <Typography variant="h5" color="text.secondary">
        355   :       السعر
</Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" size="small">شراء</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
