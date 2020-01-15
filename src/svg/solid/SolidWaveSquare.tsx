import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidWaveSquare = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 640 512" width="1em" height="1em" {...props}>
      <path d="M476 480H324a36 36 0 01-36-36V96h-96v156a36 36 0 01-36 36H16a16 16 0 01-16-16v-32a16 16 0 0116-16h112V68a36 36 0 0136-36h152a36 36 0 0136 36v348h96V260a36 36 0 0136-36h140a16 16 0 0116 16v32a16 16 0 01-16 16H512v156a36 36 0 01-36 36z" />
    </svg>
  );
};

export default generateIcon(SolidWaveSquare);
