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
        mb: 15,
        mx: 5,
      }}
    >
      <Typography variant="h4" sx={{ mb: 10 }}>
        Form
      </Typography>

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
          sx={{ width: { xs: "300px", sm: "600px" }, ml: { xs: 14, sm: 1 } }}
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
