import React from "react";
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
    <>
     <div class="jumbotron text-center " style={{ backgroundColor: '#f8f9fa', padding: '2rem' }}>
                <h1 class="display-4">Welcome back, Admin</h1>
                <p class="lead">Easily manage your data from this admin <span class="bg-warning text-dark p-1">CLA</span></p>
            </div>
            <div className="row">
                <div class="col-sm-3 mt-4">
                    <div class="card">
                        <div class="card-body" >
                            <h5 class="card-title">Categories</h5>
                            <p class="card-text">Manage the categories section here.</p>
                            <Link to="addcategory" class="btn btn-primary">Manage</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mt-4">
                    <div class="card">
                        <div class="card-body" >
                            <h5 class="card-title">Products</h5>
                            <p class="card-text">Manage all the Products here.</p>
                            <Link to="/" class="btn btn-primary">Manage</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mt-4">
                    <div class="card">
                        <div class="card-body" >
                            <h5 class="card-title">Customers</h5>
                            <p class="card-text">Manage all the Customer here.</p>
                     
                            <Link to="/addCustomer" class="btn btn-primary">Manage</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mt-4">
                    <div class="card">
                        <div class="card-body" >
                            <h5 class="card-title">Orders</h5>
                            <p class="card-text">Manage all the Orders here.</p>
                            <a href="#" class="btn btn-primary">Manage</a>
                        </div>
                    </div>
                </div>
                </div>
    </>

    );
}
export default Home;