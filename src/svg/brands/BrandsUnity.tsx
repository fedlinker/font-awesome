import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const BrandsUnity = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 576 512" width="1em" height="1em" {...props}>
      <path d="M498.11 206.4l-52.8-191.68L248.2 66.08 219 116.14l-59.2-.43L15.54 256l144.28 140.32 59.17-.43 29.24 50 197.08 51.36 52.8-191.62-30-49.63zm-274.34-82.2l150.78-37.69L288 232.33H114.87zm0 263.63l-108.9-108.12H288l86.55 145.81zm193 14L330.17 256l86.58-145.84L458.56 256z" />
    </svg>
  );
};

export default generateIcon(BrandsUnity);
