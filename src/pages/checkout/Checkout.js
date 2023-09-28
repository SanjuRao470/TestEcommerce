import React from 'react';
import './Checkout.css';
import {MinusCircleOutlined,PlusCircleOutlined} from '@ant-design/icons';
function Checkout() {
  return (
    <>
    <div className="Wrapper">
      <div className="Title">
        <h2>Your Bag</h2>
        {/* Display order items and prices here */}
      </div>
      <div className="Top">
        <div className="TopButton">
            <button>Continue Shopping</button>
            </div>
            <div className="TopTexts">
                <span className="TopText">Shopping Bag(2)</span>
                <span className="TopText">Your WishList(0)</span>
            </div>
            {/* <div className="TopButton">
            <button>Checkout Now</button>
            </div> */}
            
      
      </div>
      <div className="Bottom">
        <div className="productInfo">
            <div className="product">
                <img src='chairs.jpg' alt= "No Image" width='20%' height='20%' />
                <div className="productDetail">
                    <div className="details">
                        <div className="productName">
                        <b>Product:</b> Helios Lia Solid Wood Dining Set with Chairs
                        </div>

                        <div className="productId">
                        <b>ID:</b>  HT34567
                        </div>

                        <div className="productColor">
                        
                        </div>

                        <div className="productSize">
                        <b>Size:</b> 6 Seater
                        </div>
                    </div>
                </div>

                <div className="priceDetail">
                    <div className="amtContainer">
                    <PlusCircleOutlined />
                    <div className="quantity">
                        2
                    </div>
                    <MinusCircleOutlined />
                    </div>

                    <div className="productPrice">
                    ₹ 23496
                    </div>

                   
                </div>
            </div>


            {/* Another Product */}
            <hr/>
            <div className="product">
                <img src='containers.jpg' alt= "No Image" width='20%' height='20%' />
                <div className="productDetail">
                    <div className="details">
                        <div className="productName">
                        <b>Product:</b> Corsica Essentials Set of 6 Storage Containers
                        </div>

                        <div className="productId">
                        <b>ID:</b>  CT102311
                        </div>

                        <div className="productColor">
                        
                        </div>

                        <div className="productSize">
                        <b>Size:</b> 900 ml
                        </div>
                    </div>
                </div>

                <div className="priceDetail">
                    <div className="amtContainer">
                    <PlusCircleOutlined />
                    <div className="quantity">
                       3
                    </div>
                    <MinusCircleOutlined />
                    </div>

                    <div className="productPrice">
                    ₹ 1099
                    </div>

                   
                </div>
            </div>
        </div>
        <div className="summary">
            <div className="summaryTitle" style={{fontSize:'larger'}}>
             ORDER SUMMARY 
            </div>
            <div className="summaryItem">
                <span className="summaryItemTxt">Subtotal</span>
                <span className="summaryItemPrice"> ₹ 24,595</span>
            </div>

            <div className="summaryItem">
                <span className="summaryItemTxt">Estimated Shipping</span>
                <span className="summaryItemPrice"> ₹ 100</span>
            </div>

            <div className="summaryItem">
                <span className="summaryItemTxt">Shipping Discount</span>
                <span className="summaryItemPrice"> -₹ 100</span>
            </div>

            <div className="summaryItem">
                <span className="summaryItemTxt" style={{fontWeight:'500', fontSize:'24px'}}>Total</span>
                <span className="summaryItemPrice"><b>₹ 24,595</b></span>
            </div>
             
             
             <button>CHECKOUT NOW</button>
             
            
          
        </div>

      </div>
    </div>
    
    </>
  );
}

export default Checkout;
