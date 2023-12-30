import React, { useState } from 'react';
import { Avatar, Col, Divider, Drawer, List, Row ,Layout} from 'antd';
import Profile from './profile.jpeg';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
const Mentors = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const {Content } = Layout;
  return (
    <>
    <Layout >
        <Content>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={8} lg={3} xl={8}>
            <List
                dataSource={[
                  {
                    id: 1,
                    name: 'Ayushman',
                  }
                ]}
                bordered
                renderItem={(item) => (
                  <List.Item
                 
                    key={item.id}
                    actions={[
                      <a onClick={showDrawer} key={`a-${item.id}`}>
                        View Profile
                      </a>,
                      
                    ]}
                  >
                    <List.Item.Meta
                     className='align-items-center'
                      avatar={
                        <Avatar src={Profile} />
                      }
                      title={<a href="blob:https://web.whatsapp.com/f8173ecc-a1f9-4741-811c-adf0cfe92ef4">{item.name}</a>}
                      description="Software Engineer"
                    />
                  </List.Item>
                )}
              />
      
                <Drawer width={640} placement="right" closable={true} onClose={onClose} open={open}>
                  <p
                    className="site-description-item-profile-p"
                    style={{
                      marginBottom: 24,
                    }}
                  >
                    User Profile
                  </p>
                  <p className="site-description-item-profile-p">Personal</p>
                  <Row>
                    <Col span={12}>
                      <DescriptionItem title="Full Name" content="Ayushman Chourasiya" />
                    </Col>
                    <Col span={12}>
                      <DescriptionItem title="Account" content="anshchourasia768@gmail.com" />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <DescriptionItem title="City" content="Bilaspur" />
                    </Col>
                    <Col span={12}>
                      <DescriptionItem title="Country" content="India" />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <DescriptionItem title="Website" content="-" />
                    </Col>
                  </Row>
                  <Divider />
                  <p className="site-description-item-profile-p">Company</p>
                  <Row>
                    <Col span={12}>
                      <DescriptionItem title="Position" content="Programmer" />
                    </Col>
                    <Col span={12}>
                      <DescriptionItem title="Responsibilities" content="Coding" />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <DescriptionItem title="Department" content="Avenue Design Infotech" />
                    </Col>
                  
                  </Row>
                  <Row>
                    <Col span={24}>
                      <DescriptionItem
                        title="Skills"
                        content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                      />
                    </Col>
                  </Row>
                  <Divider />
                  <p className="site-description-item-profile-p">Contacts</p>
                  <Row>
                    <Col span={12}>
                      <DescriptionItem title="Email" content="anshchourasia768@gmail.com" />
                    </Col>
                    <Col span={12}>
                      <DescriptionItem title="Phone Number" content="+91 9343798829" />
                    </Col>
                  </Row>
                  
                </Drawer>
              </Col>
          </Row>
        </Content>
      </Layout>
     
    </>
  );
};
export default Mentors;