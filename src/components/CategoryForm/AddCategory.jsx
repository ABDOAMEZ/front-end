import React, { useEffect, useState } from "react";
import { useGetMainCategoriesQuery, useCreateCategoreiMutation } from "../../services/api/categorieApi";

const AddCategoryForm = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newCategoryIconUrl, setNewCategoryIconUrl] = useState("");




  const { data: getCategorys } = useGetMainCategoriesQuery();
  const [createNewCategory] = useCreateCategoreiMutation();


  const fetchManCategorys = async () => {
    const response = await getCategorys;
    console.log(response);
    setCategoryData(response);
  } 

  const handelAddCategory = async (e) => {
    e.preventDefault();
    const newCategoryData = {
      "name": newCategory,
      "parent_id": category !== '' ? Number(category) : null,
      "categorie_icon_url" : newCategoryIconUrl
    };

    const response = await createNewCategory(newCategoryData);
    // console.log(response);
    if(response.Status === 201) {
      setNewCategory("");
      setCategory("");
      setNewCategoryIconUrl("");
    }

    fetchManCategorys();

  }

  

  useEffect(() => {
    fetchManCategorys();
  },[]);


  return (
    <section className="addCategryForm">
      <form className="productForm" onSubmit={handelAddCategory}>
        <h1>Add Products</h1>

        <div>
          <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Main Category</option>
            {categoryData !== undefined ?
                categoryData.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                )): <option value="">Loading...</option>
            }
          </select>
        </div>

        <div>
          <label htmlFor="">Category Name</label>
          <input type="text" onChange={(e) => setNewCategory(e.target.value)} value={newCategory} />
        </div>

        <div>
          <label htmlFor="">Category Icon URL</label>
          <input type="url" onChange={(e) => setNewCategoryIconUrl(e.target.value)} value={newCategoryIconUrl}/>
        </div>

        <button>
          Add Category
        </button>
      </form>
    </section>
  );
};

export default AddCategoryForm;
