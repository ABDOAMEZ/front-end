import React, { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from '../../services/api/categorieApi';
import { useGetProductsImageQuery } from '../../services/api/productImagesApi';
import { useGetProductsQuery } from '../../services/api/productsApi';




const ListProductTable = () => {

    const [products,setProducts] = useState([]);
    const [productImage,setProductImage] = useState([]);
    const [categorys,setCategorys] = useState([]);

    const [sellerProducts,setSellerProducts] = useState([]);

    const { data: getProducts } = useGetProductsQuery();
    const { data: getProductImages } = useGetProductsImageQuery();
    const { data: getCategories } = useGetCategoriesQuery();

        const handelFetchCategories =  async () => {
            const response = await getCategories;
            // console.log(response);
            if (response) {
                setCategorys(response);
            }
        }

        const handelFetchProducts =   async () => {
            const response =  await getProducts;
            // console.log(response);
            if (response) {
                let getSllerProducts = response.filter(p => p.seller_id === Number(localStorage.getItem('USER_ID')))
                setProducts(getSllerProducts);
                console.log(getSllerProducts);
            }
        }

        const handelFetchProductImages =   async () => {
            const response =  await getProductImages;
            // console.log(response);
            if (response) {
                setProductImage(response);
            }
        }
    
        useEffect(() => {
            handelFetchCategories();
            handelFetchProducts();
            handelFetchProductImages();
        },[]);


        // if(categorys != undefined){
        //     console.log(categorys);
        // }

        if(products != undefined){
            // console.log(products);
        }

        // if(productImage != undefined){
        //     console.log(productImage);
        // }




    return (
    <main className="table" id="customers_table">
        <section className="table__header">
            <h1>Customer's Orders</h1>
            <div className="input-group">
                <input type="search" placeholder="Search Data..." />
                <img src="images/search.png" alt="" />
            </div>
            <div className="export__file">
                <label htmlFor="export-file" className="export__file-btn" title="Export File"></label>
                <input type="checkbox" id="export-file" />
                <div className="export__file-options">
                    <label style={{color: 'black'}}>Export As</label>
                    <label htmlFor="export-file" id="toPDF">PDF <img src="images/pdf.png" alt="" /></label>
                    <label htmlFor="export-file" id="toJSON">JSON <img src="images/json.png" alt="" /></label>
                    <label htmlFor="export-file" id="toCSV">CSV <img src="images/csv.png" alt="" /></label>
                    <label htmlFor="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt="" /></label>
                </div>
            </div>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Category </th>
                        <th> Nmae </th>
                        <th> Description </th>
                        <th> Image </th>
                        <th> Price </th>
                        <th> Stock </th>
                    </tr>
                </thead>
                <tbody>
                    

                    {
                        products.length > 0  ? (
                        products.map(product => (
                            <tr key={product.id}>
                                <td> {product.id} </td>
                                <td> {categorys !== undefined && categorys.find(c => c.id === product.category_id).name} </td>
                                <td> {product.name} </td>
                                <td> {product.description} </td>
                                <td> photo </td>
                                <td> {product.price} </td>
                                <td> {product.stock_quantity} </td>
                            </tr>
                        ))) : (
                            <tr> <td colSpan="6"> No data found </td> </tr>
                        )
                    
                }
                </tbody>
            </table>
        </section>
    </main>
    )
}

export default ListProductTable
