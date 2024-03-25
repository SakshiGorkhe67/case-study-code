import React from "react";
import { Link } from "react-router-dom";

export const AddCustomer = () => {
  /*const[category,setCategory]=useState({
        categoryName:"",
        brandName:""
    });
   const[msg,setMsg]=useState("");

   const handleChange=(e)=>{
    const value=e.target.value;
    setCategory({...category,[e.target.name]:value});
   }
   const CategoryRegister=(e)=>{
    e.preventDefault();//page will not refresh
    categoryservice   
}*/
  return (
    <>
      <Link to="/addcus">
        <button type="button" className="btn btn-lg btn-primary mt-4 ml-4" disabled>
          All Customer
        </button>
      </Link>
    </>
  );
};

export const CustomerHome = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                                Add Customer
                        </div>

                   
                            
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label>First Name</label>
                                    <input type="text" name="productName" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label>Last Name</label>
                                    <input type="text" name="description" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="text" name="description" className="form-control"/>
                                </div>
                               
                                <button className="btn btn-primary col-md-12">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};




