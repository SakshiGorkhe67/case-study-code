import React, { useEffect, useState } from "react";
import productservice from "../Service/productservice";
import { Link } from 'react-router-dom';

const AllProductList = () => {
    const [productList, setProductList] = useState([]);
    const [msg, setMsg] = useState("");
    /*for displaying element on home screen*/
    useEffect(() => {
        init();
    }, []);
    //whenever an operation is performed in the page useState method is called

    const init = () => {
        productservice.getAllProduct().then((res) => {

            setProductList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }


    //code for delete button fuction

    const deleteProduct = (id) => {
        productservice.deleteProduct(id).then((res) => {
            setMsg("Delete Successfully");
            init();
            setTimeout(() => {
                    setMsg("");
                }, 3000);
        }).catch((error) => {
            console.log(error);
        })


    }


    return (

        <>
        <Link to="/addProduct" class="btn btn-primary mt-4">Add Product</Link>
        
            <div className="container mt-3">

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3text-center">
                                All Product List
                                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>

                                        <tr>
                                            <th scope="col">Sl No</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productList.map((p, num) => (
                                                <tr>
                                                    <td>{num + 1}</td>
                                                    <td>{p.productName}</td>
                                                    <td>{p.description}</td>
                                                    <td>{p.price}</td>
                                                    <td>{p.status}</td>
                                                    <td>
                                                        <Link to={'editProduct/' + p.id} className="btn btn-sm btn-primary">Edit</Link>
                                                        <button onClick={() => deleteProduct(p.id)} className="btn btn-sm btn-danger ms-1">Delete</button>

                                                    </td>
                                                </tr>

                                            ))
                                        }


                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AllProductList;