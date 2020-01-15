import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const RegularWindowMinimize = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </svg>
  );
};

export default generateIcon(RegularWindowMinimize);
