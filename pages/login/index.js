import { Button, Card, CardContent, Stack } from "@mui/material";
import { Box } from "@mui/system";
import InputField from "../../utils/input";

export default function Login() {
  return (
      <Box justifyItems={"center"} p={10}   x={{ width: "30%",h:"100vh"}}  >
        <Card  sx={{ width: "30%",m:"auto"}}>
          <CardContent>
            <Stack spacing={1}>
              <InputField
                type={"email"}
                lable={"Email"}
                id={"email_id"}
                helpe={"emailHelp"}
              />
              <InputField
                type={"password"}
                lable={"Password"}
                id={"password_id"}
                helpe={"passwordHelp"}
              />

              <Button variant="contained">Login</Button>
              <Button variant="outlined">Forgt password</Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
  );
}
