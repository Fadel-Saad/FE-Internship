import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";

function Footer() {
  return (
    // A footer that displays text on left side & icons on right side in desktop view
    // and in mobile view they come to the middle on the same column
    <Box
      component="footer"
      sx={{
        p: 5,
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography>
          © {new Date().getFullYear()} Fadel Saad - All right reserved
        </Typography>
      </Box>

      <Box>
        <Box sx={{ display: "flex", gap: 2, mb: { xs: 2, sm: 0 } }}>
          <LinkedInIcon />
          <XIcon />
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
