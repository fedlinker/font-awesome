import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
    </svg>
  );
};

export default generateIcon(SolidCircle);
