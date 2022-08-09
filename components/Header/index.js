import {  Stack } from "@mui/material";
import Logo from "./logo";
import Search from "./search";
import UserBox from "./userBox";

import { useTheme } from '@mui/material/styles';

const Header = () => {
let theme = useTheme();
  return (
    <Stack justifyContent={"space-between"} bgcolor={theme.palette.primary.main} direction={"row"}>
      <Logo></Logo>
      <Search></Search>
      <UserBox></UserBox>
    </Stack>
  );
};

export default Header;

