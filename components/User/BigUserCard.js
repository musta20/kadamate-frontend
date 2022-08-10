import {
  Avatar,
  Box,
  CardContent,
  Stack,
  CardMedia,
  Card,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";

export default function BigUserCard({ spacing }) {
  return (
    <Box flex={spacing}>
      {" "}
      <Card>
        <CardMedia
          component="img"
          height="194"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/EdithburghPostOffice.JPG/1024px-EdithburghPostOffice.JPG"
          alt="Paella dish"
        />
        <CardHeader
          sx={{ marginTop: "-45px" }}
          avatar={
            <Avatar
              sx={{ bgcolor: "red", width: 100, height: 100 }}
              src="https://mui.com/static/images/avatar/3.jpg"
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          title="chamika"
          titleTypographyProps={{ variant: "h6" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <Stack direction={"row"} spacing={2} m={2} justifyItems={"center"}>
            <Button p={1} variant="contained">
              contact{" "}
            </Button>
            <Button p={1} variant="outlined">
              get in touch
            </Button>
          </Stack>
        </CardContent>

        <CardContent>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
