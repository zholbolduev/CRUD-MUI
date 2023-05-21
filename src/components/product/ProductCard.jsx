import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";

const ProductCard = () => {
  const { products, getProduct, deleteProduct } = useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams, "params");

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  useEffect(() => {
    getProduct();
  }, [searchParams]);

  return (
    <div>
      {/* <h1
        style={{
          display: "flex",
          marginLeft: "43%",
          marginBottom: "50px",
          margin: "30px 0",
        }}
      >
        Product Card
      </h1> */}

      <TextField
        style={{
          display: "flex",
          marginLeft: "40%",
          marginBottom: "50px",
          marginTop: "40px",
        }}
        sx={{ width: "300px", height: "70px" }}
        variant="outlined"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          flexFlow: "nowrap",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((item, index) => (
          <Card sx={{ width: 300, marginBottom: "20px" }} key={index}>
            <CardMedia
              sx={{ height: 200 }}
              image={item.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`detail/${item.id}`}>
                <Button size="small" variant="contained" color="secondary">
                  Details
                </Button>
              </Link>

              <Link to={`edit/${item.id}`}>
                <Button size="small" variant="contained">
                  Edit
                </Button>
              </Link>

              <Button
                onClick={() => deleteProduct(item.id)}
                size="small"
                variant="contained"
                color="error"
                style={{ marginLeft: "7px" }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
