import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

function Profile() {
  return (
    <Box
      id="Profile"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        minHeight: "60vh",
        width: "50%",
        mb: 10,
      }}
    >
      <Typography variant="h4"> Profile </Typography>

      <Box
        component="img"
        src="./profile-man.jpg"
        sx={{ width: 500, objectFit: "cover" }}
      />

      <Typography variant="span"> John Doe </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ lineHeight: 1.5, maxWidth: "50%" }}
      >
        Web developer and designer passionate about creating clean, user-friendly
        interfaces. Currently working at Tech Corp and learning new front-end
        technologies.
      </Typography>
    </Box>
  );
}

export default Profile;
