import React from "react";
import "./Checkout.css";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Layout, Row, Space, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
const { Text } = Typography;

const contentStyle = {
    textAlign: 'left',
    // minHeight: 120,
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: '	#ffffff',
};

function Checkout() {
  const cartProducts = useSelector((state) => state.cartProducts.products);
  console.log("Products Added In Cart", cartProducts);

  // Convert the object values into an array
  // const cartProductsArray = Object.values(cartProductsObject);
  // console.log("CART ARRAY", cartProductsArray);

  return (
//     <Space
//     direction="vertical"
//     style={{
//         minheight: '100%',
//         // position: 'fixed',
//         overflowY: 'scroll',
//         overflowX: 'hidden',
//         top: 0,
//         bottom: 0,
//         width: '100%',
//     }}
//     size={[0, 48]}
// >
//     <Layout  >
//         <Layout  style={{ marginTop:'6%'}} >
//             <Layout style={{ marginTop:'0%'}}>
              
//                 < Content style={contentStyle} >
//                     <Row gutter={[16, 16]}>
//                     {Array.isArray(cartProducts) &&
//             cartProducts.map((product, index) => (
//                             <>
//                                 <Col className="gutter-row" span={6} key={product.id}>
//                                 <div>{product.price}</div>
//                                 <Link  to={`/product/${product.id}`}>
//                                     <div><Card style={{ height: '100%' }}
//                                         hoverable
//                                         cover={<img src={product.image}   alt={product.title} />}>
//                                         <Space direction="vertical">
//                                             <Text type="danger"><div>{product.id}</div></Text>
//                                             <Text strong type="secondary"><div>{product.title}</div></Text>
//                                             <Text strong><div>{product.category}</div></Text>
//                                             <Text type="warning"><div>Hot Deal</div></Text>
//                                             <div><Text strong><div>{product.price}</div></Text><Text delete type="secondary">1,999</Text><Text type="success">55% off</Text></div>
//                                             <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
//                                         </Space>
//                                     </Card>
//                                     </div>
//                                     </Link>
//                                 </Col>

//                             </>
//                         ))}
//                     </Row>
//                 </Content>
//             </Layout>
//         </Layout>
//     </Layout>
// </Space>
    <>
      Your Shopping Basket
      <div className="Wrapper">
        <div className="Title">
          <h2>Your Shopping Basket</h2>
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
          <div className="productsList">
            {Array.isArray(cartProducts) &&
              cartProducts.map((product, index) => (
                <div className="BottomCard">
                  <div className="productInfo" key={index}>
                    <div className="product">
                      <img
                        src={product.image}
                        alt={product.title}
                        width="5%"
                        height="5%"
                      />
                      <div className="productDetail">
                        <div className="details">
                          <div className="productName">
                            <b>Product:</b> {product.title}
                          </div>

                          <div className="productId">
                            <b>ID:</b> {product.id}
                          </div>

                          <div className="productColor"></div>

                          <div className="productSize">
                            <b>Size:</b> 6 Seater
                          </div>
                        </div>
                      </div>

                      <div className="priceDetail">
                        <div className="amtContainer">
                          <PlusCircleOutlined />
                          <div className="quantity">2</div>
                          <MinusCircleOutlined />
                        </div>

                        <div className="productPrice">₹{product.price}</div>
                      </div>
                    </div>

                    {/* Add a horizontal line between products */}
                    {index < cartProducts.length - 1 && <hr />}
                  </div>
                </div>
              ))}
          </div>
          <div className="summary">
            <div className="summaryTitle" style={{ fontSize: "larger" }}>
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
              <span
                className="summaryItemTxt"
                style={{ fontWeight: "500", fontSize: "24px" }}
              >
                Total
              </span>
              <span className="summaryItemPrice">
                <b>₹ 24,595</b>
              </span>
            </div>

            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
