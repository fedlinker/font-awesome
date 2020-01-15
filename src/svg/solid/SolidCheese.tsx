import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidCheese = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M0 288v160a32 32 0 0032 32h448a32 32 0 0032-32V288zM299.83 32a32 32 0 00-21.13 7L0 256h512c0-119.89-94-217.8-212.17-224z" />
    </svg>
  );
};

export default generateIcon(SolidCheese);
