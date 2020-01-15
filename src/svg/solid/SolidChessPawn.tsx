import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidChessPawn = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 320 512" width="1em" height="1em" {...props}>
      <path d="M105.1 224H80a16 16 0 00-16 16v32a16 16 0 0016 16h16v5.49c0 44-4.14 86.6-24 122.51h176c-19.89-35.91-24-78.51-24-122.51V288h16a16 16 0 0016-16v-32a16 16 0 00-16-16h-25.1c29.39-18.38 49.1-50.78 49.1-88a104 104 0 00-208 0c0 37.22 19.71 69.62 49.1 88zM304 448H16a16 16 0 00-16 16v32a16 16 0 0016 16h288a16 16 0 0016-16v-32a16 16 0 00-16-16z" />
    </svg>
  );
};

export default generateIcon(SolidChessPawn);
