// Example usage in any component
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import {Space } from 'antd';
import { FiAlignLeft } from "react-icons/fi";
import { Layout,  Menu,  Drawer} from 'antd';
import { useState } from 'react';

const { Header, Content } = Layout;

const HeaderApp = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout>
      <Header style={{ background: '#fff', display: 'flex', justifyContent: 'space-between' }}>
          <div className="logo">
            {/* <img src="https://programmingashram.in/assets/images/logo.png" alt="Logo" /> */}
            <h5 style={{ lineHeight: '64px' }} >
              <Link to='/home'>
                <strong>
                    <span style={{color:'#f50'}}>P</span>
                    <span style={{color:'#2db7f5'}}>A</span>
                    <span style={{color:'#87d068'}}>T</span>
                    <span style={{color:'#108ee9'}}>H</span>
                    <span style={{color:'#108ee9'}}>S</span>
                    <span style={{color:'#108ee9'}}>A</span>
                    <span style={{color:'#2db7f5'}}>L</span>
                    <span style={{color:'#f50'}}>A</span>
                </strong>
              </Link>

            </h5>
          </div>
          <Space>
          <Menu theme="light"  style={{ lineHeight: '64px' }}>

            <Menu.Item key="1">
                <Link to="/reactdocs">React App</Link>
            </Menu.Item>
          </Menu>

        {/* <ul>
          <li>
            <Link to="/reactdocs">React doc</Link>
          </li>
        </ul> */}

            <FiAlignLeft size={20} onClick={showDrawer} />
          </Space>
        </Header>
         
        <Drawer
          title="Pathsala Menu Items"
          placement={placement}
          closable={true}
          onClose={onClose}
          open={open}
          key={placement}
          
        >
          <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">Contact Us</Menu.Item>
            <Menu.Item key="2">Subscribe Pathsala</Menu.Item>
            <Menu.Item key="3">Talk with mentor</Menu.Item>
            <Menu.Item key="4">Get Course Info</Menu.Item>
          </Menu>
        </Drawer>
       
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>

  );
};

export default HeaderApp;
