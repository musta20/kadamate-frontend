import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useAllOrderQuery } from "../../../generated/graphql";
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Stack,
} from "@mui/material";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const [{ data, fetching, error }] = useAllOrderQuery();

  React.useEffect(() => {
    console.log(data);
  }, [data]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  if (fetching) {
    return <CircularProgress></CircularProgress>;
  }
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Pending Orders" />
        <Tab label="Completed Orders" />
        <Tab label="Canceled orders" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {data?.AllOrder && (
          <Stack gap={5}>
            {data.AllOrder.filter((o) => o.isDone == 0).map((item) => (
              <OrderItem key={item._id} item={item}></OrderItem>
            ))}
          </Stack>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {data?.AllOrder && (
          <Stack gap={5}>
            {data.AllOrder.filter((o) => o.isDone == 1).map((item) => (
              <OrderItem key={item._id} item={item}></OrderItem>
            ))}
          </Stack>
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {data?.AllOrder && (
          <Stack gap={5}>
            {data.AllOrder.filter((o) => o.isDone == 2).map((item) => (
              <OrderItem key={item._id} item={item}></OrderItem>
            ))}
          </Stack>
        )}{" "}
      </TabPanel>
    </Box>
  );
}

const OrderItem = ({ item }) => {
  console.log(item);
  return (
    <Card>
      <CardHeader>
        <Typography color={"black"}>id:{item._id}</Typography>
      </CardHeader>
      <CardContent color={"black"}>{item.User_id}</CardContent>
    </Card>
  );
};
