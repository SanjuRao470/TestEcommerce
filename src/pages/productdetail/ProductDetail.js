import React,{useState} from 'react'
import './ProductDetail.css'

const ProductDetail = () => {
    const imagesOnHover = [
        'chairs.jpg', // Default image
        'chairs2.jpg', // Add more image URLs as needed
        'chairs3.jpg',
        'chairs4.jpg',
        'chairs5.jpg'
        // Add more images here
      ];

      const [currentImage, setCurrentImage] = useState(imagesOnHover[0]);

      const handleImageChange = (image) => {
        setCurrentImage(image);
      };
  return (
    <>
    <div className='container'>

    <div className="small-images">
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
        </div>
    <div className="leftimg" >
    <img
            src={currentImage} // Use the current image in the src attribute
            alt="chairs"
            width="85%"
            height="60%" 
          />
    </div>

    
    <div className="right">
        <div className="righttext">
    Helios Lia Solid Wood 6-Seater Dining Set with Chairs - Brown
    </div>
    <div class="horizontal-line"></div>
    <div className="rightcontent">
    <div className="rupeesicon">₹</div>
   <div className="price">23496</div>
   <div className="txt">Inclusive of all taxes</div>
   </div>

   <p>
  <del>₹ 46922</del> <span style={{color:'#46b275'}}>Save ₹ 23496 (50%)</span>
</p>

   <div class="product-overview">
   Make your dining space look aesthetic by adding this 6-seater dining set. It comes with a dining table and six dining chairs. 
   The primary material is rubber wood which is durable, strong, and resilient. It is easy to take care of being more stain-resistant and burn-resistant. The legs are made from rubber wood. The tabletop is made from engineered wood that comes with a smooth surface. It has no grain which makes it easier to work and paint. It is resistant to termites and wood borers. The Solid wood is stained and covered with a protective layer for making the furniture scratch, heat and stain resistant helping to increase durability.
</div>

   <div className="btn">
    <button className='btntxt'>Add to Basket</button>
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
}

export default ProductDetail
