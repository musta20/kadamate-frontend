import { Box, Grid, Stack } from "@mui/material";
import Layout from "../../components/layout";

import ServicesCard from "../../components/Service/ServicesCard";
import BigUserCard from "../../components/User/BigUserCard";

const Username = () => {
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
    <Layout title={"user"}>
      <Box bgcolor={"whitesmoke"} >
        <Stack spacing={1} p={1} direction={"row"}>
          <BigUserCard spacing={4}></BigUserCard>
          <Grid
            flex={6}
            container
            justifyContent={"space-evenly"}
            bgcolor={"whitesmoke"}
            spacing={1}
          >
            {ServicesList.map((i) => (
              <Grid key={i.title} item>
                <ServicesCard title={i.title} des={i.des}></ServicesCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Username;
