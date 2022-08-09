import { Stack, Avatar, Button, Badge } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";

const UserBox = () => {
  const status = false;
  const notifMail = 5;
  const notif = 0;
  return (
    <Stack
      direction={"row-reverse"}
      color={"whitesmoke"}
      flex={2}
      alignItems={"center"}
    >
      {status ? (
        <>
          <Button
            size="small"
            style={{ textTransform: "none" }}
            color={"inherit"}
          >
            Login
          </Button>
          <Button
            size="small"
            style={{ textTransform: "none" }}
            color={"inherit"}
            variant="outlined"
          >
            Join
          </Button>
        </>
      ) : (
        <>
          <IconButton color="inherit" size="medium">
            <Avatar
            sizes="inherit"
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
          </IconButton>
          <IconButton color="inherit" size="medium">
            {notif ? (
              <Badge badgeContent={notif} color="error">
                <NotificationsNoneTwoToneIcon
                  color="inherit"
                  fontSize="inherit"
                />
              </Badge>
            ) : (
              <NotificationsNoneTwoToneIcon
                color="inherit"
                fontSize="inherit"
              />
            )}
          </IconButton>
          <IconButton color="inherit" size="medium">
            {notifMail ? (
              <Badge badgeContent={notifMail} color="error">
                <EmailTwoToneIcon color="inherit" fontSize="inherit" />
              </Badge>
            ) : (
              <EmailTwoToneIcon color="inherit" fontSize="inherit" />
            )}
          </IconButton>
        </>
      )}
    </Stack>
  );
};

export default UserBox;
