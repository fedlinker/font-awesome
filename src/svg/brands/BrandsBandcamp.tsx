import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const BrandsBandcamp = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 496 512" width="1em" height="1em" {...props}>
      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm48.2 326.1h-181L199.9 178h181l-84.7 156.1z" />
    </svg>
  );
};

export default generateIcon(BrandsBandcamp);
