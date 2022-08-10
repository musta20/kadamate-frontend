import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import Layout from "../../../components/layout";
import BigServicesCard from "../../../components/Service/BigServicesCard";
import PriceCard from "../../../components/Service/PriceCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Order = () => {
  const cat = ["Govt", "PostOffice","PostOffice","PostOffice","PostOffice", "mail"];
  return (
    <Layout title={"the repo"}>
      <Box bgcolor={"whitesmoke"} p={1}>
        <Stack
          color={"GrayText"}
          direction={"row"}
          justifyContent={"flex-start"}
        >
          {cat.map((c, i) => (
            <>
              <Link key={i}   href={c}>{c}</Link>
              {i < cat.length - 1 && (
                <KeyboardArrowRightIcon fontSize="small"></KeyboardArrowRightIcon>
              )}
            </>
          ))}
        </Stack>
        <Typography p={1} variant={"h4"}>
          I will open Office code
        </Typography>
        <Stack spacing={2} p={2} direction={"row"}>
          <BigServicesCard spacing={8}></BigServicesCard>
          <PriceCard spacing={4}></PriceCard>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Order;
