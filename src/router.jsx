import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import VoucherDetailPage from "./pages/VoucherDetailPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element : <Layout/>,
        errorElement :<NotFoundPage/>,
        children :[
            {
                path : '/',
                element : <Dashboard/>
            },
            {
                path : '/product',
                element : <ProductPage/>
            },
            {
                path : '/sale',
                element : <SalePage/>
            },
            {
                path : '/voucher',
                element : <VoucherPage/>
            },
            {
                path : '/voucherDetail',
                element : <VoucherDetailPage/>
            }
        ]
    }
]);
export default router;