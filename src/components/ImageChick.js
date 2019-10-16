import React from 'react';
import styled from 'styled-components';

const ImageChicks = styled.img`
  transform: scaleX(-1);
  display: block;
  margin: 2.5rem auto;
  padding: 0 60px;
`

const ImageChick = () => (
  <ImageChicks src='https://www.animatedimages.org/data/media/532/animated-chicken-image-0079.gif' border='0' alt='free-animated-chicken-image-from-animatedimages.org'/>
);

export default ImageChick;
