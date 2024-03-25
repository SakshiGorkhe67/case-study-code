
import './App.css';
import Navbar from './component/navbar';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import { AddCategory,CategoryHome } from './component/AddCategory';
import{Routes,Route}from 'react-router-dom'
import { AddCustomer,CustomerHome } from './component/AddCustomer';
import AllProductList from './component/AllProductList';

function App() {
  return (
    <div>
      <Navbar/>
      
      
      <Routes>
      <Route path='/home' element={<Home/>}> </Route>
        <Route path='/' element={<AllProductList/>}> </Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
        <Route path='/addcategory' element={<AddCategory/>}></Route>
        <Route path='/addCustomer' element={<AddCustomer/>}></Route>
        
        <Route path='/addc' element={<CategoryHome/>}></Route>
         
        <Route path='/addcus' element={<CustomerHome/>}></Route>
        <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
        
       
      </Routes>
    </div>
   
  );
}

export default App;
