import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

function Profile() {
  return (
    <Box
      id="Profile"
      sx={{
        px: 5,
        mb: 10,
        maxWidth: "lg",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", mb: 10 }}>
        Profile
      </Typography>

      {/* container of image + text that changes from row to column depending on screen size */}
      <Grid container>
        {/* Image section */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ textAlign: "center", mb: { xs: 3, md: 0 } }}
        >
          <Box
            component="img"
            src="./profile-man.jpg"
            // it changes size in response to screen size
            sx={{ width: { xs: 400, sm: 450, md: 500 }, objectFit: "cover" }}
          />
        </Grid>

        {/* Text section containing name and description */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            John Doe
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ lineHeight: 1.5, maxWidth: { xs: "65%", md: "80%" } }}
          >
            Web developer and designer passionate about creating clean, user-friendly
            interfaces. Currently working at Tech Corp and learning new front-end
            technologies.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
