import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = [
  `Hi! I'm George, a software engineer currently in my third year of Computer Engineering @ Queen's University.`,
  `In 2019, I was awarded the Schulich Leaders scholarship, Canada's biggest and most prestigious STEM scholarship.
   I am most passionate about developing integrated solutions to solve existing problems in the world today.`,
  `Previously, I have interned at Genesys - a leader in the Contact Centre as a Service (CCaaS) space creating software
   to analyze and improve millions of customer experiences around the world.
   I also interned as an automation developer at Fleet Complete - a company providing telematic tracking and fleet
   management software for trucks.`,
  `Looking forward, I am extremely passionate about the intersection between business and technology, especially in the
   FinTech space. Personal finance has always been one of my passions and one of my future goals is to create tech in order
   to educate students and young adults about financial literacy.`
];

const AboutMe = () => {
  return (
    <>
      <div>
        <SEO
          title="About"
          description="About George"
          path=""
          keywords={['George', 'Trieu', 'Software Engineer', 'Javascript', 'ReactJS', 'NodeJS']}
        />
        <h1 className="titleSeparate">About Me</h1>
        {
          pageText.map((para) => (
            <p>{para}</p>
          ))
        }
        <h1 className="titleSeparate">Work Experience</h1>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="amazon.png"
            height={60}
            alt="Amazon Logo"
            textH4="Incoming Software Engineering Intern"
            textH3="Amazon"
            date="Expected Summer 2022"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="genesys.png"
            height={60}
            alt="Genesys Logo"
            textH4="Software Engineering Intern"
            textH3="Genesys"
            date="May 2021 - August 2021"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="genesys.png"
            height={60}
            alt="Genesys Logo"
            textH4="Software Engineering Intern"
            textH3="Genesys"
            date="May 2020 - August 2020"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="fleetcomplete.png"
            height={60}
            alt="Fleet Complete Logo"
            textH4="Automation Developer Intern"
            textH3="Fleet Complete"
            date="July 2019 - August 2019"
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
