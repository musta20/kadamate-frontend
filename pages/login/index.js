import { Button, Card, CardContent, Stack } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../lib/hooks/Auth";
import InputField from "../../utils/input";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  //useAuth()
  return (
    <Box justifyItems={"center"} p={10} x={{ width: "30%", h: "100vh" }}>
      <Card sx={{ width: "30%", m: "auto" }}>
        <CardContent>
          <Stack spacing={1}>
            <InputField
              onChange={(e) => setusername(e.target.value)}
              type={"email"}
              lable={"Email"}
              id={"email_id"}
              helpe={"emailHelp"}
            />
            <InputField
              onChange={(e) => setpassword(e.target.value)}
              type={"password"}
              lable={"Password"}
              id={"password_id"}
              helpe={"passwordHelp"}
            />

            <Button onClick={() => logInQuery({ username, password })} variant="contained">
              Login
            </Button>
            <Button variant="outlined">Forgt password</Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

const logInQuery = (Obj) => {
  console.log(Obj)
  axios.post(process.env.NEXT_PUBLIC_BACK_END_DEV+"/login", Obj)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
