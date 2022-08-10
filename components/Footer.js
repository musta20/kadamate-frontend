import { Box , Typography } from "@mui/material"

import Copyright from "@mui/icons-material/Copyright"
export default function Footer (){
    return <Box sx={{ bgcolor: 'GrayText', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Something here to    <Copyright />
 give the footer a purpose!
    </Typography>
  </Box>

}