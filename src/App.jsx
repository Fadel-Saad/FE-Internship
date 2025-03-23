import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Toolbar from "@mui/material/Toolbar";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Navbar />
        <Box
          component="Main"
          sx={{
            my: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Profile />
          <Form />
          <Products />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
