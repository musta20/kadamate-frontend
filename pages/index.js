import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Layout from "../components/layout";

import ServicesCard from "../components/Service/ServicesCard";

export default function Home() {

  const ServicesList = [
    {
      title: "Lizadrd",
      des: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      title: "Lizdard",
      des: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      title: "Lizardd",
      des: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      title: "Lizard23",
      des: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      title: "Ka4bsa4a",
      des: ` This impressive paella is a perfect party dish and a fun meal to cook
  together with your guests. Add 1 cup of frozen peas along with the mussels,
  if you like.`,
    },
    {
      title: "Kabs4aa",
      des: ` This impressive paella is a perfect party dish and a fun meal to cook
  together with your guests. Add 1 cup of frozen peas along with the mussels,
  if you like.`,
    },
    {
      title: "Kab4sa4a",
      des: ` This impressive paella is a perfect party dish and a fun meal to cook
  together with your guests. Add 1 cup of frozen peas along with the mussels,
  if you like.`,
    },
  ];

  

  return (
  
        <Layout title={"خدماتي لانجاوز الخدمات الالكترونية"}>
        <Stack>
          <Box
            p={10}
            justifyContent={"center"}
            bgcolor={(theme) => theme.palette.primary.main}
          >
            <Typography textAlign={"center"} variant="h3">
              انجاز الخدمات الالكترونية
            </Typography>
          </Box>
      
          <Grid

            container
            justifyContent={"space-evenly"}
            bgcolor={"whitesmoke"}
p={2}           
          >
            {ServicesList.map((i) => (
              <Grid p={1} key={i.title} item  >
                <ServicesCard title={i.title} des={i.des}></ServicesCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
        </Layout>
 
  );
}
