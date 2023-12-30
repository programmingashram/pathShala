// CourseList.js

import React from 'react';
import { Card, Row, Col, Layout } from 'antd';
import { EllipsisOutlined} from '@ant-design/icons';
import './courseList.css';
import { Rate } from 'antd';
import { FaWhatsapp } from "react-icons/fa";
const { Content } = Layout;
const { Meta } = Card;


const CourseList = ({ courses, onViewDetails }) => {
  return (
    <div>
      <Layout style={{ padding: '24px' }}>
        <h5>Fetured Courses</h5>
        <Content>
          <Row gutter={16}>
            {courses.map(course => (
              <Col key={course.id} xs={24} sm={12} md={8} lg={3} xl={5}>
                <Card
                  style={{ margin: '10px 0' }}
                  cover={<img alt={course.title} src={course.image} />} // Add image here
                  actions={[
                    <FaWhatsapp key="whastapp" />,
                    <EllipsisOutlined key="ellipsis" onClick={() => onViewDetails(course)} />,
                  ]}
                  
                >
                   <div className='mb-2'> <Rate disabled defaultValue={course.rating} /></div>
                  <Meta title={course.title} description={`₹ `+ course.rate + `/class`}/>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default CourseList;
