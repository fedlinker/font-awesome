import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidHeading = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M448 96v320h32a16 16 0 0116 16v32a16 16 0 01-16 16H320a16 16 0 01-16-16v-32a16 16 0 0116-16h32V288H160v128h32a16 16 0 0116 16v32a16 16 0 01-16 16H32a16 16 0 01-16-16v-32a16 16 0 0116-16h32V96H32a16 16 0 01-16-16V48a16 16 0 0116-16h160a16 16 0 0116 16v32a16 16 0 01-16 16h-32v128h192V96h-32a16 16 0 01-16-16V48a16 16 0 0116-16h160a16 16 0 0116 16v32a16 16 0 01-16 16z" />
    </svg>
  );
};

export default generateIcon(SolidHeading);
