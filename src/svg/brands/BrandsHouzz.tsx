import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const BrandsHouzz = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 448 512" width="1em" height="1em" {...props}>
      <path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z" />
    </svg>
  );
};

export default generateIcon(BrandsHouzz);
