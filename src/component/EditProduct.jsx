import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import productservice from "../Service/productservice";

const EditProduct = () => {
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: "",
    });

    const [msg, setMsg] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    };

    const ProductUpdate = (e) => {
        e.preventDefault(); // page will not refresh
        productservice
            .saveProduct(product)
            .then((res) => {
                setMsg("Product updated Successfully");
                console.log("Product updated Successfully");
              
                setProduct({
                    productName: "",
                    description: "",
                    price: "",
                    status: "",
                });
                navigate("/"); // Navigate to home page after successful addition
                
                // Clear success message after 3 seconds
                setTimeout(() => {
                    setMsg("");
                }, 3000);
            })
            .catch((error) => {
                console.log(error);
                setMsg("Failed to update product. Please try again later.");
            });
    };


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Edit Product
                                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                            </div>

                            

                            <div className="card-body">
                                <form onSubmit={(e) =>ProductUpdate(e)}>
                                    <div className="mb-3">
                                        <label>Enter Product Name</label>
                                        <input type="text" name="productName" className="form-control" onChange={(e) => handleChange(e)} value={product.productName} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Description</label>
                                        <input type="text" name="description" className="form-control" onChange={(e) => handleChange(e)} value={product.description} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Price</label>
                                        <input type="text" name="price" className="form-control" onChange={(e) => handleChange(e)} value={product.price} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter status</label>
                                        <input type="text" name="status" className="form-control" onChange={(e) => handleChange(e)} value={product.status} />
                                    </div>
                                    <button className="btn btn-primary col-md-12">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EditProduct;
