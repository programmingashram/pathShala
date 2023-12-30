import React from 'react';
import { Avatar, List, Space } from 'antd';
const data = [
  {
  href: 'https://s3-alpha.figma.com/hub/file/647890736/bec9b9ac-b872-4f35-9388-a53ea7728bd8-cover.png',
  title: `Learn How To Create Wireframe in Figma`,
  avatar: `https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png`,
  description:
    'Use basic shapes, text tools, and icons to represent key elements such as buttons, images, and text boxes. Focus on layout and hierarchy, avoiding detailed design elements.',
  content:
    'To create a wireframe in Figma, start by selecting an appropriate frame size, like a web or mobile template. Use basic shapes, text tools, and icons to represent key elements such as buttons, images, and text boxes. Focus on layout and hierarchy, avoiding detailed design elements. Group related items, annotate functionalities, and organize the wireframe logically. Iterate based on feedback, and once satisfied, save or export the wireframe in preferred formats like PNG or PDF for sharing or further development. Familiarizing yourself with Figma shortcuts and features can significantly streamline the wireframing process.',
    bannerImg: 'https://s3-alpha.figma.com/hub/file/647890736/bec9b9ac-b872-4f35-9388-a53ea7728bd8-cover.png'
},
{
  href: 'https://www.impactqa.com/wp-content/uploads/2020/04/ImpactQA-APIs-Favoring-E-Commerce-Business-.jpg',
  title: `Let's See How Ecommerce API is works`,
  avatar: `https://www.impactqa.com/wp-content/uploads/2020/04/ImpactQA-APIs-Favoring-E-Commerce-Business-.jpg`,
  description:
    'facilitating the exchange of data and functionalities for online stores',
  content:
    'An eCommerce API works as an intermediary that enables communication between different software applications, facilitating the exchange of data and functionalities for online stores. To understand its functioning, an eCommerce API operates through predefined endpoints that allow interactions between the eCommerce platform, external systems, and third-party applications. Through these endpoints, developers can access and manipulate data related to products, orders, customers, and more. APIs handle requests and responses, allowing functionalities like retrieving product information, adding items to a cart, processing payments, managing inventory, and updating customer details. Developers integrate these APIs into their applications or websites, utilizing the provided documentation to understand the available endpoints, their functionalities, and the required data formats. This integration empowers businesses to create customized and seamless online shopping experiences while leveraging the capabilities of the eCommerce platform backend systems..',
    bannerImg:'https://www.impactqa.com/wp-content/uploads/2020/04/ImpactQA-APIs-Favoring-E-Commerce-Business-.jpg'
}];
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const ListItems = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 1,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={272}
            alt="logo"
            src={item.bannerImg}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default ListItems;