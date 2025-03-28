import React, { useEffect, useState } from 'react';
import { useGetSousCategoriesQuery, useGetMainCategoriesQuery } from '../../services/api/categorieApi';
import { useCreateProductMutation } from '../../services/api/productsApi';
import { useCreateProductImageMutation } from '../../services/api/productImagesApi';
import { TbFlagSearch } from 'react-icons/tb';


const AddProductForm = () => {
    const [categoryData, setCategoryData] = useState([]);

    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState([]);
    const [qaunt,setqaunt] = useState('');

    const handelUrlImage  = (event) =>{
        const {
            target: {value}
        } = event;

        setImage(
            typeof value === 'string' ? value.split(' ') : value
        );

        // console.log(image);
    }


    const {data: getSousCategorys} = useGetSousCategoriesQuery();
    const [createNewProduct]= useCreateProductMutation();
    const [createNewProductImages]= useCreateProductImageMutation();


    const handelAddProduct = async (e) => {
        e.preventDefault();
        let newProduct = {
            "seller_id": Number(localStorage.getItem('USER_ID')),
            "category_id" : Number(category),
            "name" : name,
            "description" : desc,
            "price" : Number(price),
            "stock_quantity": Number(qaunt)
        };

        const productResponse = await createNewProduct(newProduct);
        // console.log(productResponse);
        handelAddProductImages(productResponse.data.products.id);

  
    }

    const handelAddProductImages = async (id) => {

        for(let i = 0; i <= image.length; i++){
            if(i === 0){
                const ImageResponse =  await createNewProductImages({
                    "product_id": Number(id),
                    "image_url": image[i],
                    "is_primary": true
                });
            }

            const ImageResponse =  await createNewProductImages({
                "product_id": Number(id),
                "image_url": image[i],
                "is_primary": false
            });
        }

    } 

    useEffect( 
         () => {
            const fetchCaetgorys = async () => {
                const response = await getSousCategorys;
                // console.log(response);
                setCategoryData(
                    response
                );
            }
            fetchCaetgorys();
    },[])
    // console.log(categoryData)
    return (
    <form className='productForm' onSubmit={handelAddProduct}>
        <h1>Add Products</h1>
        
        <div>
            <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                {
                    categoryData !== undefined ?
                    categoryData.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    )): <option value="">Loading...</option>
                }
            </select>
        </div>

        <div>
            <label htmlFor="">Product Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Product Description</label>
            <textarea name="" id="" onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>
        <div>
            <label htmlFor="">Product Price</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Product Primary Image</label>
            <input type="url" onChange={(e) => handelUrlImage(e)} />
            <span>this input accept multi link of image youre, the first link muste be primary image of your product. you may use ' '(espace) to separy between links</span>
        </div>


        <div>
            <label htmlFor="">Stock Quantity</label>
            <input type="number" onChange={(e) => setqaunt(e.target.value )}/>
        </div>
        <button type="submit">Add Product</button>
    </form>
  )
}

export default AddProductForm
