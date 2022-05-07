import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import "./About.scss";
import { urlFor, client } from '../../client';


const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  

  return (
    <>
      <h2 className="head-text">First, <span>solve the problem </span><br />then, <span>write the code</span></h2>
        <h3 style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}><em>- John Johnson</em></h3>
        <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;