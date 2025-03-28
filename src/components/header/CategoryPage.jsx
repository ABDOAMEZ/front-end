import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../services/api/categorieApi';
import { useGetProductsQuery } from '../../services/api/productsApi';
import { useGetProductsImageQuery } from '../../services/api/productImagesApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../../styles/category.css';

const CategoryPage = () => {
  const { id: categoryId } = useParams();
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(4); // Default to 4 slides

  const { data: categories, isLoading: isCategoriesLoading, isError: isCategoriesError } = useGetCategoriesQuery();
  const { data: products, isLoading: isProductsLoading, isError: isProductsError } = useGetProductsQuery();
  const { data: productImages, isLoading: isImagesLoading, isError: isImagesError } = useGetProductsImageQuery();

  useEffect(() => {
    if (!categoryId) {
      setError('⚠️ Error: Category ID is missing in the URL.');
      setIsLoading(false);
      return;
    }

    const parsedCategoryId = parseInt(categoryId, 10);
    if (isNaN(parsedCategoryId)) {
      setError('⚠️ Error: Invalid category ID.');
      setIsLoading(false);
      return;
    }

    if (isCategoriesLoading || isProductsLoading || isImagesLoading) {
      return;
    }

    if (isCategoriesError || isProductsError || isImagesError) {
      setError('❌ An error occurred while fetching data.');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Get subcategory IDs of current category
      const subcategoryIds = categories.filter(cat => cat.parent_id === parsedCategoryId).map(cat => cat.id);
      const relevantCategoryIds = [parsedCategoryId, ...subcategoryIds];
      const filteredProducts = products.filter(prod => relevantCategoryIds.includes(prod.category_id));
      setCategoryProducts(filteredProducts);

      const currentCat = categories.find(cat => cat.id === parsedCategoryId);
      if (currentCat) {
        setCurrentCategory({ id: parsedCategoryId, name: currentCat.name });
      } else {
        setError(`❌ No category found for ID: ${parsedCategoryId}.`);
      }

      // Adjust the Swiper slidesPerView based on the number of subcategories
      const subcategoriesCount = categories.filter(cat => cat.parent_id === parsedCategoryId).length;
      if (subcategoriesCount === 1) {
        setSwiperSlidesPerView(1);
      } else if (subcategoriesCount === 2) {
        setSwiperSlidesPerView(2);
      } else if (subcategoriesCount === 3) {
        setSwiperSlidesPerView(3);
      } else {
        setSwiperSlidesPerView(4); // Default for more than 3 subcategories
      }
    } catch (err) {
      setError('❌ An error occurred while processing data.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [
    categoryId,
    categories,
    products,
    productImages,
    isCategoriesLoading,
    isProductsLoading,
    isImagesLoading,
    isCategoriesError,
    isProductsError,
    isImagesError,
  ]);

  const handleSubcategoryClick = (subcategoryId) => {
    navigate(`/category/${subcategoryId}`);
  };

  if (isLoading) return <p className="loading-message">⏳ Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="category-container">
      <h1 className="category-title">{currentCategory ? currentCategory.name : '❌ Category not found'}</h1>

      {categories.some(cat => cat.parent_id === parseInt(categoryId)) && (
        <div className="subcategory-slider-container">
          <h2>Subcategories</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={swiperSlidesPerView}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            className="subcategory-slider"
          >
            {categories
              .filter(cat => cat.parent_id === parseInt(categoryId))
              .map(subcategory => (
                <SwiperSlide key={subcategory.id}>
                  <div className="subcategory-item" onClick={() => handleSubcategoryClick(subcategory.id)}>
                    {subcategory.name}
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div className="custom-swiper-button-prev">‹</div>
          <div className="custom-swiper-button-next">›</div>
          {/* Custom Pagination */}
          <div className="custom-swiper-pagination"></div>
        </div>
      )}

      {categoryProducts.length > 0 ? (
        <ul className="products-list">
          {categoryProducts.map((product) => {
            const productImage = productImages?.find(img => img.product_id === product.id);
            return (
              <li key={`product-${product.id}`} className="product-item">
                <div className="product-card-inner">
                  {productImage && (
                    <img src={productImage.image_url} alt={product.name} className="product-image" />
                  )}
                  <div className="product-info">
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">Price: ${product.price}</p>
                    <p className="product-stock">Stock: {product.stock_quantity}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="no-products-message">⚠️ No products in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
