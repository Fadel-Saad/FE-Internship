import * as React from "react";
import Box from "@mui/material/Box";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Used in Form component
export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box components={["DatePicker"]}>
        <DatePicker
          label="Pick a date"
          slotProps={{
            textField: { sx: { width: "320px" } },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
