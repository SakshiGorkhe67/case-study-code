import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import productservice from "../Service/productservice";

const AddProduct = () => {
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: "",
    });

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const ProductRegister = (e) => {
        e.preventDefault();
        productservice
            .saveProduct(product)
            .then((res) => {
                setMsg("Product Added Successfully");

                

                // Reset form fields after successful submission
                setProduct({
                    productName: "",
                    description: "",
                    price: "",
                    status: "",
                });
                setTimeout(() => {
                    setMsg("");
                }, 3000);

                navigate("/"); // Navigate to AllProductList page after successful addition
               
            })
            .catch((error) => {
                console.log(error);
                setMsg("Failed to add product. Please try again later.");
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                            Add Product
                            {msg && (
                            <p className="fs-4 text-center text-success">
                                {msg}
                            </p>
                        )}
                        </div>

                       

                        <div className="card-body">
                            <form onSubmit={ProductRegister}>
                                <div className="mb-3">
                                    <label>Enter Product Name</label>
                                    <input
                                        type="text"
                                        name="productName"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={product.productName}
                                    required />
                                </div>
                                <div className="mb-3">
                                    <label>Enter Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={product.description}
                                   required />
                                </div>
                                <div className="mb-3">
                                    <label>Enter Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={product.price}
                                    required/>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Status</label>
                                    <input
                                        type="text"
                                        name="status"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={product.status}
                                   required />
                                </div>
                                <button className="btn btn-primary col-md-12">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
