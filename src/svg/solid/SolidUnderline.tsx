import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidUnderline = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 448 512" width="1em" height="1em" {...props}>
      <path d="M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0016-16V16a16 16 0 00-16-16H272a16 16 0 00-16 16v32a16 16 0 0016 16h32v160a80 80 0 01-160 0V64h32a16 16 0 0016-16V16a16 16 0 00-16-16H32a16 16 0 00-16 16v32a16 16 0 0016 16zm400 384H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z" />
    </svg>
  );
};

export default generateIcon(SolidUnderline);
