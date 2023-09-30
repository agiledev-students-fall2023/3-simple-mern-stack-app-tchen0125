import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css';

const AboutPage = props => {
  const [aboutPageData, setAboutPageData] = useState({});
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(res => {
        setAboutPageData(res.data);
        setImageSource(res.data.imageUrl);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <>
      <h1 className="about">{aboutPageData.title}</h1>
      {aboutPageData.content && aboutPageData.content.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p className="about">{paragraph}</p>
          {index !== aboutPageData.content.length - 1 && <br />}
        </React.Fragment>
      ))}
      <img className="aboutimg" src={imageSource} alt="About Us" />
    </>
  );
};

export default AboutPage;
