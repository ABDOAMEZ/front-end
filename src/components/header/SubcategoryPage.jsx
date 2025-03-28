import { useParams } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/api/categorieApi";
import { useGetProductsQuery } from "../../services/api/productsApi";
import { useGetProductsImageQuery } from "../../services/api/productImagesApi";
import "../../styles/subcategory.css";

const SubcategoryPage = () => {
  const { id } = useParams();
  const { data: categories, isLoading: isCategoriesLoading, isError: isCategoriesError } = useGetCategoriesQuery();
  const { data: products, isLoading: isProductsLoading, isError: isProductsError } = useGetProductsQuery();
  const { data: productImages, isLoading: isImagesLoading, isError: isImagesError } = useGetProductsImageQuery();

  if (isCategoriesLoading || isProductsLoading || isImagesLoading)
    return <div className="loading">⏳ Loading...</div>;
  if (isCategoriesError || isProductsError || isImagesError)
    return <div className="error">❌ Error loading data</div>;

  // Find the current category or subcategory
  const currentCategory = categories.find((category) => category.id === parseInt(id));

  // Filter products that belong to the current category or subcategory
  const categoryProducts = products.filter((product) => product.category_id === parseInt(id));

  return (
    <div className="subcategory-page">
      <h2 className="products-heading">🛍 Products in {currentCategory ? currentCategory.name : 'Category'}</h2>
      {categoryProducts.length > 0 ? (
        <div className="products-grid">
          {categoryProducts.map((product) => {
            // Find the image for each product
            const productImage = productImages.find((image) => image.product_id === product.id);
            const imageUrl = productImage ? productImage.image_url : "/default-product.jpg";

            return (
              <div key={product.id} className="product-card">
                <img src={imageUrl} alt={product.name} className="product-image" />
                <div className="product-info">
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">💰 Price: ${product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="no-products">⚠️ No products found in this category.</p>
      )}
    </div>
  );
};

export default SubcategoryPage;
