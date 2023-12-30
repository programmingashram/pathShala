// Home.js

import React, { useState } from 'react';
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';
import { Layout,  Avatar,  Card} from 'antd';
import { Carousel } from 'antd';
import { Button} from 'antd';
import banner from './banner.jpg';
import banner1 from './banner1.jpg';
import Mentors from './Mentors';
import ListItems from './ListItems';
// import ResumeForm from './ResumeForm';
// import ResumePreview from './ResumePreview';
const {Content } = Layout;
const Home = () => {
  // Sample courses data
  const [courses] = useState([
    {
      id: 1,
      image: 'https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png',
      title: 'Complete Figma UI/UX Bootcamp',
      description: 'Introduction to UI/UX',
      duration: '45 days',
      rating: 2,
      rate: 160,
      steps: [
        {
          title: 'Introduction',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Basics of UX',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Principles of Design',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Wireframing in Figma',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Responsive Layout',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Components Design',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Project',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        }
      ],
      mentorsDetails: [
        {
          id: 1,
          title:'Ayushman Chourasiya', 
          Position: "Software Engneer",
          exp: '5 Years +',
          skils: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          contact: [
            {
              email: 'ayushman@gmail.com',
              phone: 878787993,
              website: "www.programmingashram.in"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      image: 'https://react.dev/images/home/conf2021/cover.svg',
      title: '100 Days Learn React, Zero to Hero',
      description: 'Advanced concepts in React development',
      duration: '100 days',
      rating: 4,
      rate: 160,
      steps: [
        {
          title: 'Introduction',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Basics of Reacts',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Foundamentols of React',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Hooks',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'API Intrigation',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Deployment',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Project',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        }
      ],
    },
    {
      id: 3,
      image: 'https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png',
      title: '80 Days Learn Angular, Basic to Advance',
      description: 'Advanced concepts in Angular web development',
      duration: '120 days',
      rating:4,
      rate: 180,
      steps: [
        {
          title: 'Introduction',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Basics of Angular',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Foundamentols of Angular',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Directives',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Decorators',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Services',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'API Intrigarition',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Projects',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        }
      ],
    },
    {
      id: 4,
      image: 'https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg',
      title: '200 Days for Web Development (Frontend).',
      description: 'Basic to advance concept, learn a ful website development with moke APIs.',
      duration: '200 days',
      rating:4,
      rate: 140,
      steps: [
        {
          title: 'HTML / CSS',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'SCSS/SASS/LESS',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Javascript',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'JQuery',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        ,
        {
          title: 'Angular Js',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'API Intrigation with Ajax',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Bootstrap Css Framework',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          title: 'Projects',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        }
      ],
    }
    // Add more courses as needed
  ]);

  const gridStyle = {
    width: '16%',
    textAlign: 'center',
  };
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseDetails = () => {
    setSelectedCourse(null);
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  }
  const mentorsData = courses.map(course => course.mentorsDetails).flat();

  return (
    <div>
       <Layout>
        <Content style={{ padding: '0 0px' }}>
          <div className="site-layout-content mb-2">
            <Carousel afterChange={onChange}>
              <div className='flexy  bgn-1 gap-sm align-items-center'>
                  <div className='w-100'>
                    <img  src={banner1} alt='' className='w-100 sliderImg' />
                  </div>
                  <div className='w-100 content-blk p-3'>
                    <h5>Skills that drive you forward</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    <div class='mt-2'>
                      <Button type="primary" size='large'>Get Started</Button>
                      <Button type="default" size='large' className='ms-2'>Mentors</Button>
                    </div>
                  </div>
                </div>
              <div>
              <div className='flexy bgn-2 gap-sm align-items-center'>
                  <div className='w-100'>
                    <img  src={banner} alt='' className='w-100 sliderImg' />
                  </div>
                  <div className='w-100 content-blk p-3'>
                    <h5>Skills that drive you forward</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    <div class='mt-2'>
                      <Button type="primary" size='large'>Get Started</Button>
                      <Button type="default" size='large' className='ms-2'>Mentors</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>

            <div className='container-fluid my-4 px-4'>
              <h5>Stacks</h5>
              <Card >
                <Card.Grid style={gridStyle} ><Avatar  size={64} className='mb-3' src={<img src='https://logowik.com/content/uploads/images/react7473.logowik.com.webp' alt="avatar" />} /><h6>React Js</h6></Card.Grid>
                <Card.Grid style={gridStyle}>  <Avatar size={64} className='mb-3' src={<img src='https://cdn.iconscout.com/icon/free/png-256/free-angularjs-1-1175270.png?f=webp' alt="avatar" />} /><h6>Angular</h6></Card.Grid>
                <Card.Grid style={gridStyle}> <Avatar size={64} className='mb-3' src={<img src='https://static-00.iconduck.com/assets.00/python-icon-512x512-48og66bp.png' alt="avatar" />} /><h6>Python</h6></Card.Grid>
                {/* <Card.Grid style={gridStyle}><Avatar size={64} className='mb-3' src={<img src='https://www.svgrepo.com/show/452088/php.svg' alt="avatar" />} /><h6>PHP</h6></Card.Grid>
                <Card.Grid style={gridStyle}><Avatar size={64} className='mb-3' src={<img src='https://www.svgrepo.com/show/303251/mysql-logo.svg' alt="avatar" />} /><h6>MySql</h6></Card.Grid> */}
                <Card.Grid style={gridStyle}><Avatar size={64} className='mb-3' src={<img src='https://cdn-icons-png.flaticon.com/512/5968/5968705.png' alt="avatar" />} /><h6>Figma</h6></Card.Grid>
                <Card.Grid style={gridStyle}><Avatar size={64} className='mb-3' src={<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png' alt="avatar" />} /><h6>Illustrator</h6></Card.Grid>
                <Card.Grid style={gridStyle}><Avatar size={64} className='mb-3' src={<img src='https://static-00.iconduck.com/assets.00/adobe-xd-icon-2048x2048-n4c7t4w4.png' alt="avatar" />} /><h6>Adobe XD</h6></Card.Grid>
                {/* <Card.Grid style={gridStyle}> <Avatar size={64} className='mb-3' src={<img src='https://repvue.imgix.net/a9yxc48y3ay5dm2udzwizc2bdyph' alt="avatar" />} /><h6>Mango DB</h6></Card.Grid>
                <Card.Grid style={gridStyle}><Avatar size={64} className='mb-3' src={<img src='https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png' alt="avatar" />} /><h6>Node Js</h6></Card.Grid> */}
                {/* <Card.Grid style={gridStyle}><Avatar size={64} className='mb-3' src={<img src='https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' alt="avatar" />} /><h6>Express Js</h6></Card.Grid> */}
              </Card>
            </div>
           

            <div className='container-fluid my-4 px-4'>
              <h5>Mentors</h5>
              <Mentors mentorsDetails={mentorsData} />
            </div>



            <CourseList courses={courses} onViewDetails={handleViewDetails} />
            <CourseDetails course={selectedCourse} onClose={handleCloseDetails} />

            <div className='my-4'>
              <h5 className='px-4'>News and Updates</h5>
              <ListItems />
            </div>

          </div>
        </Content>
      </Layout>
    </div>

   
    
  );
};

export default Home;
