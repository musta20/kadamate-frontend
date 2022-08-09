import { Box, Stack, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const Search = () => {
  return (
    <Box flex={4} p={0.5} alignItems={"center"}>
      <TextField
      size="small"
        variant="filled"
        fullWidth={true}
        label="search..."
        sx={{ backgroundColor: "#F5F5F5", borderRadius: "3px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};


export default Search;
