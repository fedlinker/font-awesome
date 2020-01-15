import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidAlignJustify = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 448 512" width="1em" height="1em" {...props}>
      <path d="M432 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-128H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-128H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-128H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z" />
    </svg>
  );
};

export default generateIcon(SolidAlignJustify);
