import { Routes, Route } from 'react-router-dom';
import ProductList from "./ProductList";
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';

function RoutingPath() {
    const element =
        <>
            <Routes>
                <Route path='/products' element={<ProductList />} />
                <Route path='/add' element={<AddProduct />} />
                <Route path='UpdateProduct/:id' element={<UpdateProduct />} />
                <Route path='DeleteProduct/:id' element={<DeleteProduct />} />
            </Routes>
        </>
    return element;
}
export default RoutingPath;
