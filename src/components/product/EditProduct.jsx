import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";

const EditProduct = () => {
  const { saveEditedProduct, getOneProduct, oneProduct } =
    useContext(productContext);

  const navigate = useNavigate();

  const { id } = useParams();

  const [productToEdit, setProductToEdit] = useState(oneProduct);

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    setProductToEdit(oneProduct);
  }, [oneProduct]);

  // console.log(oneProduct, "editProduct");

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...productToEdit,
        [e.target.name]: Number(e.target.value),
      };
      setProductToEdit(obj);
    } else {
      let obj = {
        ...productToEdit,
        [e.target.name]: e.target.value,
      };
      setProductToEdit(obj);
    }
  };

  return (
    <Container>
      <h1>EditProduct</h1>
      {productToEdit ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "50px auto",
            width: "40%",
          }}
        >
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="name"
            value={productToEdit.name}
            onChange={handleInp}
            placeholder="name"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="description"
            value={productToEdit.description}
            onChange={handleInp}
            placeholder="description"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="price"
            value={productToEdit.price}
            onChange={handleInp}
            placeholder="price"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="image"
            value={productToEdit.image}
            onChange={handleInp}
            placeholder="image"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="type"
            value={productToEdit.type}
            onChange={handleInp}
            placeholder="type"
          />

          <Button
            variant="contained"
            onClick={() => {
              saveEditedProduct(productToEdit);
              navigate("/");
            }}
          >
            Save Edited Product
          </Button>
        </div>
      ) : null}
    </Container>
  );
};

export default EditProduct;
