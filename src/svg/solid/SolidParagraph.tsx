import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidParagraph = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 448 512" width="1em" height="1em" {...props}>
      <path d="M448 48v32a16 16 0 01-16 16h-48v368a16 16 0 01-16 16h-32a16 16 0 01-16-16V96h-32v368a16 16 0 01-16 16h-32a16 16 0 01-16-16V352h-32a160 160 0 010-320h240a16 16 0 0116 16z" />
    </svg>
  );
};

export default generateIcon(SolidParagraph);
