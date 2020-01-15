import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidStrikethrough = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M496 224H293.9l-87.17-26.83A43.55 43.55 0 01219.55 112h66.79A49.89 49.89 0 01331 139.58a16 16 0 0021.46 7.15l42.94-21.47a16 16 0 007.16-21.46l-.53-1A128 128 0 00287.51 32h-68a123.68 123.68 0 00-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16zm-180.24 96A43 43 0 01336 356.45 43.59 43.59 0 01292.45 400h-66.79A49.89 49.89 0 01181 372.42a16 16 0 00-21.46-7.15l-42.94 21.47a16 16 0 00-7.16 21.46l.53 1A128 128 0 00224.49 480h68a123.68 123.68 0 00123-135.64 114.25 114.25 0 00-5.34-24.36z" />
    </svg>
  );
};

export default generateIcon(SolidStrikethrough);
