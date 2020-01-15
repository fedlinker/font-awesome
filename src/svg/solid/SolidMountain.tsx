import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidMountain = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 640 512" width="1em" height="1em" {...props}>
      <path d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 00-1.17 32.64A32.004 32.004 0 0032 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 00-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z" />
    </svg>
  );
};

export default generateIcon(SolidMountain);
