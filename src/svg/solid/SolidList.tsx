import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidList = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M80 368H16a16 16 0 00-16 16v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a16 16 0 00-16-16zm0-320H16A16 16 0 000 64v64a16 16 0 0016 16h64a16 16 0 0016-16V64a16 16 0 00-16-16zm0 160H16a16 16 0 00-16 16v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a16 16 0 00-16-16zm416 176H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z" />
    </svg>
  );
};

export default generateIcon(SolidList);
