import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidGripLinesVertical = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 256 512" width="1em" height="1em" {...props}>
      <path d="M96 496V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16zm128 0V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16z" />
    </svg>
  );
};

export default generateIcon(SolidGripLinesVertical);
