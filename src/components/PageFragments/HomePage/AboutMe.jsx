import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello !! My name is Rolwin Reevan Monteiro. I'm a full stack web developer who is
    passionate about various web technologies. I like to experiment with different web
    technologies. I have an experience of 3+ years working with LAMP stack, MERN stack
    and ELK stack. Building fancy UI's just like this one that your seeing 😅 and writing blogs about tech stacks
    is what Rolwin loves to do. Check my blog which I update every week for some Javascript and some
    cool notes on web technologies.`,
  paraTwo: `Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also
    have hands on experience working with cloud infrastructures like <b>AWS/GCP</b> and have deployed applications
    keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['George', 'Trieu', 'Software Engineer', 'Javascript', 'ReactJS', 'NodeJS']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
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
