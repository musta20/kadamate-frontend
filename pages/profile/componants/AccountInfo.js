import { Card, CardContent, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import {
  useProfileQuery,
  useUpdateUserMutation,
} from "../../../generated/graphql";
import InputField from "../../../utils/input";
import CircularProgress from "@mui/material/CircularProgress";
import { SaveIcon } from "@mui/icons-material";
export default function AccountInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [{ data, fetching, error }] = useProfileQuery();
  const [, update] = useUpdateUserMutation();
  useEffect(() => {
    if (data?.Profile) {
      setName(data?.Profile?.name);
      setEmail(data?.Profile?.email);
      setPhone(data?.Profile?.phone);
    }
  }, [data]);

  const handleUpdate = async () => {
    const response = await update({
      userInput: {
        email,
        name,
        phone,
        password,
      },
    });
    console.log(response);
  };

  if (fetching) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <>
      <Card sx={{ width: "60%" }}>
        <CardContent>
          <Stack spacing={1}>
            <InputField
              type={"text"}
              lable={"name"}
              id={"name_id"}
              onChange={(e) => setName(e.target.value)}
              value={name}
              helpe={"nameHelp"}
            />

            <InputField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type={"text"}
              lable={"Phone"}
              id={"phone_id"}
              helpe={"phoneHelp"}
            />

            <InputField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
              lable={"Email"}
              id={"email_id"}
              helpe={"emailHelp"}
            />

            <InputField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              lable={"Password"}
              id={"password_id"}
              helpe={"password"}
            />

            <Button onClick={() => handleUpdate()} variant="contained">
              Update
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
