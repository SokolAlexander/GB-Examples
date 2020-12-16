import React from 'react';

export default function Image(props) {
  return (
    <img src={props.src} />
  )
}
 
<Image src="/asdasd" />
const source = '';

function withSrc(src) {
  return (Component) => {
    return (...props) => <Component {...props} src={src} />
  }
}

const ImageWithSrc = withSrc(source)(Image);
<ImageWithSrc />