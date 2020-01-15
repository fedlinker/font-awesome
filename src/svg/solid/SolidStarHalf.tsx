import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidStarHalf = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 576 512" width="1em" height="1em" {...props}>
      <path d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z" />
    </svg>
  );
};

export default generateIcon(SolidStarHalf);
