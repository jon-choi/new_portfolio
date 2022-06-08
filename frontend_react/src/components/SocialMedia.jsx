import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiVsco, SiMedium } from 'react-icons/si';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <AiFillGithub href={`https://github.com/jon-choi`}/>
    </div>
    <div>
      <AiFillLinkedin />
    </div>
    <div>
      <SiVsco />
    </div>
    <div>
      <SiMedium />
    </div>
  </div>
);

export default SocialMedia;