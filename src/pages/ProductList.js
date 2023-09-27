import React from 'react'
import { Layout} from 'antd';
import FooterFile from "../../src/components/footer/FooterFile"
import HeaderFlie from "../../src/components/header/HeaderFile"


const {  Content } = Layout;

 function ProductList() {
  return (
    <Layout>
     <HeaderFlie/>
    <Layout>
      <Content>main content</Content>
    </Layout>
    <FooterFile/>
  </Layout>
  )
}
export default ProductList;
