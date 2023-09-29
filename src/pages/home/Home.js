
import { Layout, Space, Col, Card, Row, Typography, Carousel, Tabs } from 'antd';
import { useState, useEffect } from 'react';
import Photo from '../../assets/images/carousel.webp'
import Photo1 from '../../assets/images/c1.webp'
import Photo2 from '../../assets/images/c2.webp'
import { Link } from 'react-router-dom';
const { Content } = Layout;
const { Text } = Typography;

const carouselStyle = {
    height: '240px',
    color: '#7665a0 ',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "#f5f5f5",

};

const contentStyle = {
    textAlign: 'left',
    // minHeight: 120,
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: "#f5f5f5",
};

function Home() {
       // const response = await fetch("https://jsonplaceholder.typicode.com/photos")
            //const response = await fetch("https://fakestoreapi.com/products")
    const [first, setFirst] = useState([])
    async function GetData() {
        try {
         
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'GET',
                headers: {
                    'Origin': 'http://localhost:3000',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer your_token_here'
                },
            })
            const result = await response.json();
            console.log(result.response)
            setFirst(result)
        } catch (err) {
            console.log("catched errors")
        }
    }
    console.log("@@@@@@@@original", first)

    useEffect(() => {
        GetData();
    }, [])

    const FillterhandleChange = (curr) => {
        console.log("******&&&&&&&&", curr)
        const data = first.filter(res => res.category === curr)
        console.log("OOOOO menS clothe", data)
        // setMenclothe(data)
        setFirst(data)
        console.log("@@@@@@@@@filtered", first)

    }
    const Fillterhandle = (e) => {
        console.log("******&&&&&&&&", e)
        const data1 = first.filter((a) => a.category === e)
        console.log("$$$$$$$1234 Women clothe", data1)
        setFirst(data1)
    }
    const FillterPopularity = (e) => {
        console.log("******&&&&&&&&", e)
        const data2 = first.filter((res) => res.category === e)
        console.log("$$$$$$$ jewelary", data2)
        setFirst(data2)
    }
    const FillterNewest = (e) => {
        console.log("******&&&&&&&&", e)
        const data3 = first.filter((res) => res.category === e)
        console.log("$$$$$$$ electronics", data3)
        setFirst(data3)
    }
    const SortPrice = () => {
        const pricedata = first.sort((a, b) => (b.price > a.price ? 1 : -1))
        console.log('!!!@@@ high to low', pricedata)
        setFirst(pricedata)
        console.log('sortingdata', first)
    }
    const style = {
        background: ' #ffffff',
        padding: '8px 0',
    };

    return (

            <Layout >
                <Layout style={{ margin: 'auto', width: '95%' }}>
                    <Row gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}>
                        <Col span={24} style={{ marginTop: '6%' }}>
                            <Carousel autoplay>
                                <div>
                                    <h3 style={carouselStyle}><img src={Photo} alt="avatar" /></h3>
                                </div>
                                <div>
                                    <h3 style={carouselStyle}><img src={Photo1} alt="avatar" /></h3>
                                </div>
                                <div>
                                    <h3 style={carouselStyle}><img src={Photo2} alt="avatar" /></h3>
                                </div>
                                <div>
                                    <h3 style={carouselStyle}><img src={Photo} alt="avatar" /></h3>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div style={{ backgroundColor: 'white', padding: '10px' }}><div style={{ color: '#1a1a1a', fontSize: "15px", fontWeight: 'bold' }}>Showing 1 – 40 of 15,061 results for "kurtas kurtis"</div>
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        {
                                            label: (
                                                <span value="men's clothing" onClick={() => FillterhandleChange("men's clothing")}>
                                                    Sortby
                                                </span>
                                            ),
                                            key: '1',

                                        },
                                        {
                                            label: (
                                                <span value="women's clothing" onClick={() => Fillterhandle("women's clothing")}>
                                                    Relevance
                                                </span>
                                            ),
                                            key: '2',
                                        },
                                        {
                                            label: (
                                                <span value="jewelery" onClick={() => FillterPopularity("jewelery")}>
                                                    papularity
                                                </span>
                                            ),
                                            key: '3',
                                        },
                                        {
                                            label: (
                                                <span value="jewelery" onClick={() => FillterPopularity("jewelery")} >
                                                    Price--Low to High
                                                </span>
                                            ),
                                            key: '4',
                                        },
                                        {
                                            label: (
                                                <span onClick={() => SortPrice("price")}>
                                                    Price--High to Low
                                                </span>
                                            ),
                                            key: '5',
                                        },
                                        {
                                            label: (
                                                <span value="electronics" onClick={() => FillterNewest("electronics")}>
                                                    Newest First
                                                </span>
                                            ),
                                            key: '6',
                                        },
                                    ]}
                                />
                            </div>
                        </Col>
                    </Row>
                    < Content style={contentStyle} >
                        <Row gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}>
                            <Col span={24}>
                                <div >
                                    <Text type="warning"><div> <h3>Best Of Electronics</h3></div></Text>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}>

                            {first.map((user) => (
                                <>
                                    <Col className="gutter-row" span={6}>
                                        <div>{user.price}</div>
                                        <Link to='ProductList'>
                                            <div style={style}><Card style={{ height: '100%' }}
                                                hoverable
                                                cover={<img src={Photo1} alt="avatar" />}>
                                                <Space direction="vertical">
                                                    <Text type="danger"><div>{user.id}</div></Text>
                                                    <Text strong type="secondary"><div>{user.title}</div></Text>
                                                    <Text strong><div>{user.category}</div></Text>
                                                    <Text type="warning"><div>Hot Deal</div></Text>
                                                    <div><Text strong><div>{user.price}</div></Text><Text delete type="secondary">1,999</Text><Text type="success">55% off</Text></div>
                                                    <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
                                                </Space>
                                            </Card>
                                            </div></Link>
                                    </Col>
                                </>
                            ))}
                        </Row>
                        <Row gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}>
                            <Col span={24}>
                                <div >
                                    <Text type="warning"><div> <h3>TVs & Appliances</h3></div></Text>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            {first.map((user) => (
                                <>
                                    <Col className="gutter-row" span={6}>
                                        <div>{user.price}</div>
                                        <div style={style}><Card style={{ height: '100%' }}
                                            hoverable
                                            cover={<img src={Photo2} alt="avatar" />}>
                                            <Space direction="vertical">
                                                <Text type="danger"><div>{user.id}</div></Text>
                                                <Text strong type="secondary"><div>{user.title}</div></Text>
                                                <Text strong><div>{user.category}</div></Text>
                                                <Text type="warning"><div>Hot Deal</div></Text>
                                                <div><Text strong><div>{user.price}</div></Text><Text delete type="secondary">1,999</Text><Text type="success">55% off</Text></div>
                                                <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
                                            </Space>
                                        </Card> </div>
                                    </Col>
                                </>
                            ))}
                        </Row>
                        <Row gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}>
                            <Col span={24}>
                                <div >
                                    <Text type="warning"><div> <h3>Sports & Books</h3></div></Text>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            {first.map((user) => (
                                <>
                                    <Col className="gutter-row" span={6}>
                                        <div>{user.price}</div>
                                        <div style={style}><Card style={{ height: '100%' }}
                                            hoverable
                                            cover={<img src={Photo2} alt="avatar" />}>
                                            <Space direction="vertical">
                                                <Text type="danger"><div>{user.id}</div></Text>
                                                <Text strong type="secondary"><div>{user.title}</div></Text>
                                                <Text strong><div>{user.category}</div></Text>
                                                <Text type="warning"><div>Hot Deal</div></Text>
                                                <div><Text strong><div>{user.price}</div></Text><Text delete type="secondary">1,999</Text><Text type="success">55% off</Text></div>
                                                <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
                                            </Space>
                                        </Card> </div>
                                    </Col>
                                </>
                            ))}
                        </Row>
                        <Row gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}>
                            <Col span={24}>
                                <div >
                                    <Text type="warning"><div> <h3>Home & Funiture</h3></div></Text>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            {first.map((user) => (
                                <>
                                    <Col className="gutter-row" span={6}>
                                        <div>{user.price}</div>
                                        <div style={style}><Card style={{ height: '100%' }}
                                            hoverable
                                            cover={<img src={Photo1} alt="avatar" />}>
                                            <Space direction="vertical">
                                                <Text type="danger"><div>{user.id}</div></Text>
                                                <Text strong type="secondary"><div>{user.title}</div></Text>
                                                <Text strong><div>{user.category}</div></Text>
                                                <Text type="warning"><div>Hot Deal</div></Text>
                                                <div><Text strong><div>{user.price}</div></Text><Text delete type="secondary">1,999</Text><Text type="success">55% off</Text></div>
                                                <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
                                            </Space>
                                        </Card> </div>
                                    </Col>
                                </>
                            ))}
                        </Row>
                    </Content>
                </Layout>
            </Layout>
      
    )
}
export default Home;


