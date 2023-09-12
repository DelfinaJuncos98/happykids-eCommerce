import React from 'react';
import { Layout} from 'antd';
import Link from 'antd/es/typography/Link';
import { Dropdown, Space, Typography } from 'antd'



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
    <Layout>
      <Header className='header'>
      
            <img className='logo' src='happyKidsLogo.png'/>
            
            <ul style={{display:'flex', flexDirection:'row' , marginRight:'150px'}}>
              {
                items2.map((item, index) => (
                  item == 'Inicio'?
                  <Link href='/inicio' style={{margin: '20px 15px 0px', color:'#606060'}}><ol key={index} className='custom-link' >{item}</ol></Link>
                  : item == 'Catalogo'?
                  <Link href='/catalogo' style={{margin: '20px 15px 0px', color:'#606060'}}><ol key={index} className='custom-link'>{item}</ol></Link>
                  : item == 'Tabla de talles' ?
                  <Link href='/tabla-de-talles' style={{margin: '20px 15px 0px' , color:'#606060'}}><ol key={index} className='custom-link'>{item}</ol></Link>
                  : null
                ))
              }
            </ul>
       
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

            </Header>
            
      <Content >{props.children}</Content>
    </Layout>

);
export default LayoutFunc;