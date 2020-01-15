import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidSortAlphaUpAlt = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 448 512" width="1em" height="1em" {...props}>
      <path d="M16 160h48v304a16 16 0 0016 16h32a16 16 0 0016-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 00-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160zm272 64h128a16 16 0 0016-16v-32a16 16 0 00-16-16h-56l61.26-70.45A32 32 0 00432 65.63V48a16 16 0 00-16-16H288a16 16 0 00-16 16v32a16 16 0 0016 16h56l-61.26 70.45A32 32 0 00272 190.37V208a16 16 0 0016 16zm159.06 234.62l-59.27-160A16 16 0 00372.72 288h-41.44a16 16 0 00-15.07 10.62l-59.27 160A16 16 0 00272 480h24.83a16 16 0 0015.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 00407.16 480H432a16 16 0 0015.06-21.38zM335.61 400L352 352l16.39 48z" />
    </svg>
  );
};

export default generateIcon(SolidSortAlphaUpAlt);
