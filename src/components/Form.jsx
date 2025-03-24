import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import CountrySelect from "./CountrySelect";
import BasicDatePicker from "./DatePicker";
import GenderSelection from "./GenderSelection";
import { TextField, Typography } from "@mui/material";

function Form() {
  return (
    <Box
      id="Form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "320px", sm: "auto" },
        my: 10,
        mx: 5,
      }}
    >
      <Typography variant="h4" sx={{ mb: 8 }}>
        Form
      </Typography>

      {/* Used Grid components for responsive view. 2 fields per row on desktop */}
      {/* and 1 field per row on mobile view */}
      <Grid container columnSpacing={5} rowSpacing={3} sx={{ maxWidth: "700px" }}>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ textAlign: "center" }}>
          <TextField label="Email" required fullWidth sx={{ width: "320px" }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ textAlign: "center" }}>
          <TextField label="Name" required fullWidth sx={{ width: "320px" }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ textAlign: "center" }}>
          <BasicDatePicker />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CountrySelect />
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{
            mx: { xs: "auto", sm: 1 },
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          <GenderSelection />
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{ width: "fit-content", mx: { xs: "auto", sm: 1 } }}
        >
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Form;
