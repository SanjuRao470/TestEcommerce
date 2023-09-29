import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import { Link } from 'react-router-dom';
// import {RadiusUprightOutlined} from '@ant-design/icons';
// import { NotificationPlacement } from 'antd/es/notification/interface';
import Notification from '../../components/notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../../redux/actions/productActions';
import axios from 'axios';

const ProductDetail = () => {


   const product = useSelector((state) => state.product);
   console.log("SELECTED PRODUCT", product);

  const {productId} = useParams();
  console.log("PID",productId);

  const dispatch = useDispatch();

  const [showNotification, setShowNotification] = useState(false);

  const handleAddToBasketClick = () => {
    // Logic to add item to basket goes here

    // Show the notification
    setShowNotification(true);

    // Hide the notification after 3 seconds (you can adjust the time)
    setTimeout(() => {
      setShowNotification(false);
      window.location.href = '/checkout';
      
    }, 3000);
  };

  
  

  
  // const {title} = products[0];
 

  

    const fetchProductDetail = async()=>{
  try{
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      dispatch(selectedProducts(response.data))
      console.log("Dataa", response);
      
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
    }

    useEffect(()=>{
      if(productId && productId!=="")
      fetchProductDetail();
    }, [productId])

    

    
    
    return (
    <>
    <div className='container' key={product.id}>

    {/* <div className="small-images">
          {imagesOnHover.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`small-image-${index}`}
              onMouseEnter={() => handleImageChange(image)}
              width="50px" // Adjust the size of the small images as needed
              height="50px"
              className="small-image"
            />
          ))}
        </div> */}
    <div className="leftimg" >
    <img
            // src={currentImage} // Use the current image in the src attribute
            src = {product.image}
            alt={product.title}
            width="40%"
            height="40%" 
          />
    </div>

    
    <div className="right">
        <div className="righttext">
    {/* Helios Lia Solid Wood 6-Seater Dining Set with Chairs - Brown */}
    {product.title}
    </div>
    <div class="horizontal-line"></div>
    <div className="rightcontent">
    <div className="rupeesicon">₹</div>
   <div className="price">{product.price}</div>
   <div className="txt">Inclusive of all taxes</div>
   </div>

   <p>
  <del>₹ 46922</del> <span style={{color:'#46b275'}}>Save ₹ {product.price} (50%)</span>
</p>

   <div class="product-overview">
   {/* Make your dining space look aesthetic by adding this 6-seater dining set. It comes with a dining table and six dining chairs. 
   The primary material is rubber wood which is durable, strong, and resilient. It is easy to take care of being more stain-resistant and burn-resistant. The legs are made from rubber wood. The tabletop is made from engineered wood that comes with a smooth surface. It has no grain which makes it easier to work and paint. It is resistant to termites and wood borers. The Solid wood is stained and covered with a protective layer for making the furniture scratch, heat and stain resistant helping to increase durability. */}
{product.description}
</div>

   <div className="btn">
    <button className='btntxt' onClick={handleAddToBasketClick}>Add to Basket</button>
    {showNotification && (
        <Notification
          message="Item added to basket!"
          onClose={() => setShowNotification(false)}
        />
      )}
   </div>

   

   <div class="action-container">
  
  <div class="action-icons">
    
    <span class="action-icon">❤️</span>
    <span class="action-text">Add to Favorites</span>
    

    
    <span class="action-icon" style={{marginLeft:'340px'}}>📤</span>
    <span class="action-text">Share</span>
    
    </div>
  </div>
 
</div>




    </div>
    {/* </div> */}
      
    
    </>
  )

  
    // const imagesOnHover = [
    //     'chairs.jpg', // Default image
    //     'chairs2.jpg', // Add more image URLs as needed
    //     'chairs3.jpg',
    //     'chairs4.jpg',
    //     'chairs5.jpg'
    //     // Add more images here
    //   ];

    //   const [currentImage, setCurrentImage] = useState(imagesOnHover[0]);

    //   const handleImageChange = (image) => {
    //     setCurrentImage(image);
    //   };

      

// return(
//   <>
//   {renderList}
//   </>
// )
}

export default ProductDetail
