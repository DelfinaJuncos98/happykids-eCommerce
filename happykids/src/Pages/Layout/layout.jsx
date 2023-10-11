import React from 'react';
import { Layout} from 'antd';
import { Link } from 'react-router-dom';
import { Dropdown, Space, Typography } from 'antd'
import { ShoppingCartOutlined} from '@ant-design/icons';


const { Header, Footer, Content } = Layout;

const items2 =['Inicio', 'Catalogo', 'Tabla de talles']
const items = [
  {
    key: '1',
    label: 'Perfil',
  },
  {
    key: '2',
    label: 'Log Out',
  }
];

const LayoutFunc = (props) => (
    <Layout style={{backgroundColor:"white"}}>
      <Header className='header'>
      
            <img className='logo' src='../../../public/happyKidsLogo.png'/>
            
            <ul style={{display:'flex', flexDirection:'row' , marginRight:'150px'}}>
              {
                items2.map((item, index) => (
                  item == 'Inicio'?
                  <Link key={index} to='/inicio' style={{margin: '20px 15px 0px', color:'#606060'}}><ol  className='custom-link' >{item}</ol></Link>
                  : item == 'Catalogo'?
                  <Link key={index} to='/categorias' style={{margin: '20px 15px 0px', color:'#606060'}}><ol  className='custom-link'>{item}</ol></Link>
                  : item == 'Tabla de talles' ?
                  <Link key={index} to='/tabla-de-talles' style={{margin: '20px 15px 0px' , color:'#606060'}}><ol  className='custom-link'>{item}</ol></Link>
                  : null
                ))
              }
            </ul>
            <div>
            <Typography.Link style={{fontSize:"22px", margin:"12px 15px 0px 0px"}}>
            <ShoppingCartOutlined  />
                </Typography.Link>

              <Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ['2'],
                }}
              >
                <Typography.Link>
                  <Space>
                    User
    
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>


            </Header>
            
      <Content >{props.children}</Content>
    </Layout>

);
export default LayoutFunc;