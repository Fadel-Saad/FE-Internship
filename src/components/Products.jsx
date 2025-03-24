import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

// products array with each containig their respective info
const products = [
  {
    id: 1,
    title: "Modern Desk Lamp",
    category: "Home",
    description: "Sleek LED desk lamp with adjustable brightness",
    image:
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    category: "Electronics",
    description: "Premium noise-canceling wireless headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Leather Backpack",
    category: "Fashion",
    description: "Handcrafted genuine leather backpack",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Smart Watch",
    category: "Electronics",
    description: "Feature-rich smartwatch with health tracking",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Ceramic Planter",
    category: "Home",
    description: "Modern ceramic planter for indoor plants",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Sunglasses",
    category: "Fashion",
    description: "Classic aviator sunglasses with UV protection",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
  },
];
// Array of product categories
const categories = ["All", "Home", "Fashion", "Electronics"];

function Products() {
  // States for user search field and selected category
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // a function that filters products based on categories or search field
  function filterProducts(product) {
    // checks if either the title or the description includes the search term of user
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    // checks if All categories or certain category is selected by user
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    // console.log(matchesSearch && matchesCategory);

    // returns true if both are true only.
    return matchesSearch && matchesCategory;
  }

  // Call filter method on every product to check if it return true or false. if true,
  // it is saved inside the filtered products array.
  const filteredProducts = products.filter(filterProducts);
  // console.log(filteredProducts);

  return (
    <Container maxWidth="lg" sx={{ py: 4, px: { xs: 5, sm: 8 }, mb: 5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 8, textAlign: "center" }}>
          Products
        </Typography>
        <Grid container spacing={2}>
          {/* Search Field */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Search products"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>

          {/* Category selection field */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Display filtered product cards by mapping them */}
      {/* Change the number of products per row using Grid size prop */}
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 1, display: "block" }}
                >
                  {product.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
