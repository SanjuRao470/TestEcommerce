
import { Layout, Space, Col, Card, Row, Typography, Carousel, Tabs } from 'antd';
import { useState, useEffect } from 'react';
import Photo from '../../assets/images/carousel.webp'
import Photo1 from '../../assets/images/c1.webp'
import Photo2 from '../../assets/images/c2.webp'
import { Link } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
const { Content } = Layout;
const { Text } = Typography;

const carouselStyle = {
    height: '240px',
    color: '#7665a0 ',
    lineHeight: '160px',
    textAlign: 'center',
    // backgroundColor: "#f5f5f5",
    // width:"100 rem"
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
                < Content style={contentStyle} >
                    <Row gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }} style={{ backgroundColor: '#F5F5DC', height: '405px', margin: 'auto', marginTop: '5%' }}  >
                        <Col span={24}>
                            <div >
                                <Text type="warning"><div> <h3>Best Of Electronics</h3></div></Text>
                            </div>
                        </Col>
                        <Col span={24} >
                            <Carousel autoplay>
                                {first.slice(0, 12).map((user) => (
                                    <>
                                        <div>
                                            <h3 style={carouselStyle}>
                                                <Row gutter={16} >
                                                    <Link to={`/productlist`}>
                                                        <Col span={6} >
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>

                                                </Row>
                                            </h3>
                                        </div>
                                    </>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <Row gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }} style={{ backgroundColor: '#F5F5DC', height: '405px', margin: 'auto', marginTop: '5%' }} >
                        <Col span={24}>
                            <div >
                                <Text type="warning"><div> <h3>Beauty Food & More</h3></div></Text>
                            </div>
                        </Col>
                        <Col span={24} >
                            <Carousel autoplay>
                                {first.slice(0, 4).map((user) => (
                                    <>
                                        <div>
                                            <h3 style={carouselStyle}>
                                                <Row gutter={16} >
                                                    <Link to={`/productlist`}>
                                                        <Col span={6} >
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>

                                                </Row>
                                            </h3>
                                        </div>
                                    </>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <Row gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }} style={{ backgroundColor: '#F5F5DC', height: '405px', margin: 'auto', marginTop: '5%' }}  >
                        <Col span={24}>
                            <div >
                                <Text type="warning"><div> <h3>Grooming ,Books & More</h3></div></Text>
                            </div>
                        </Col>
                        <Col span={24} >
                            <Carousel autoplay>
                                {first.slice(0, 4).map((user) => (
                                    <>
                                        <div>
                                            <h3 style={carouselStyle}>
                                                <Row gutter={16} >
                                                    <Link to={`/productlist`}>
                                                        <Col span={6} >
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>

                                                </Row>
                                            </h3>
                                        </div>
                                    </>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <Row gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }} style={{ backgroundColor: '#F5F5DC', height: '405px', margin: 'auto', marginTop: '5%' }}   >
                        <Col span={24}>
                            <div >
                                <Text type="warning"><div> <h3>Home & Kitchen</h3></div></Text>
                            </div>
                        </Col>
                        <Col span={24} >
                            <Carousel autoplay>
                                {first.slice(0, 4).map((user) => (
                                    <>
                                        <div>
                                            <h3 style={carouselStyle}>
                                                <Row gutter={16} >
                                                    <Link to={`/productlist`}>
                                                        <Col span={6} >
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>
                                                    <Link to={`/productlist`}>
                                                        <Col span={6}>
                                                            <Card hoverable
                                                                style={{ width: 300 }}
                                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                                <Meta title={user.category} description={user.price} />
                                                            </Card>
                                                        </Col>
                                                    </Link>

                                                </Row>
                                            </h3>
                                        </div>
                                    </>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <Row gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }} style={{ backgroundColor: '#F5F5DC', margin: 'auto', marginTop: '5%' }}  >
                        <Col span={24}>
                            <div >
                                <Text type="warning"><div> <h3>FESTIVE CRAZY OFFERS</h3></div></Text>
                            </div>
                        </Col>
                        <Row gutter={[16, 16]}>
                            {first.slice(0, 12).map((user) => (
                                <>
                                  
                                        <Col className="gutter-row" span={4}>

                                            <div style={style}>
                                                <Card style={{ height: '100%' }}
                                                    hoverable
                                                    cover=<img src={user.image} alt="avatar" style={{ height: '180px' }} />>
                                                    {/* <Space direction="vertical">
                                        <Text type="danger"><div>{user.id}</div></Text>
                                        <Text strong type="secondary"><div>{user.title}</div></Text>
                                        <Text strong><div>{user.category}</div></Text>
                                        <Text type="warning"><div>Hot Deal</div></Text>
                                        <div><Text strong><div>{user.price}</div></Text><Text delete type="secondary">1,999</Text><Text type="success">55% off</Text></div>
                                        <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
                                    </Space> */}
                                                </Card> </div>
                                        </Col>
                              
                                </>
                            ))}
                        </Row>
                    </Row>
                    <Row gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }} style={{ backgroundColor: '#F5F5DC', margin: 'auto', marginTop: '5%', height: '405px' }}  >
                        <Col span={24}>
                            <div >
                                <Text type="warning"><div> <h3>Recenty Viewed</h3></div></Text>
                            </div>
                        </Col>
                        <Row gutter={[16, 16]}>
                            {first.slice(0, 4).map((user) => (
                                <>
                                  <Link to={`/productlist`}>
                                        <Col className="gutter-row" span={6}>
                                            <Card hoverable
                                                style={{ width: 308 }}
                                                cover={<img src={user.image} alt="avatar" style={{ height: '180px' }} />}>
                                                <Meta title={user.category} description={user.price} />
                                            </Card>
                                        </Col>
                                    </Link>
                                </>
                            ))}
                        </Row>
                    </Row>
                </Content>
            </Layout>
        </Layout >

    )
}
export default Home;


