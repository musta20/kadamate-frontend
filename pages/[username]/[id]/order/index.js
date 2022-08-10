import {
  Box,
  Button,
  Typography,
  Card,
  TextField,
  InputLabel,
  Input,
  CardContent,
} from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import Layout from "../../../../components/layout";
import BigServicesCard from "../../../../components/Service/BigServicesCard";
import PriceCard from "../../../../components/Service/PriceCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Order = () => {
  const cat = [
    "Govt",
    "PostOffice",
    "PostOffice",
    "PostOffice",
    "PostOffice",
    "mail",
  ];
  return (
    <Layout title={"the repo"}>
      <Box bgcolor={"whitesmoke"} justifyItems={"center"} p={2}>

        <Card >
            <CardContent >
                <Stack direction={"row"}>
     
        <Box flex={4}> 
        <Typography variant="h4">Post order</Typography>

        <TextField
        sx={{width:"80%"}}
          id="outlined-multiline-static"
          label="Detail"
          multiline
          rows={5}

          />
        <Stack p={2} sx={{width:"40%"}}  >
          {cat.map((i) => (
            <>
              <InputLabel htmlFor="my-input">{i}</InputLabel>
              <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden />
              </Button>{" "}
              
            </>
          ))}
        </Stack>
        <hr></hr>
        <Button size="large" color="success"  p={2} m={2} variant="contained" >
                Post Order 
               
              </Button>
              </Box>
              <Box flex={4}> 
        <Typography variant="h4">requirement : </Typography>
        <Typography  paragraph>
      
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is
          absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
          shrimp and mussels, tucking them down into the rice, and cook again
          without stirring, until mussels have opened and rice is just tender, 5
          to 7 minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
        </Box>
      
              </Stack>
              </CardContent>

              </Card>
      </Box>
    </Layout>
  );
};

export default Order;
