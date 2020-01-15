import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidCaravan = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 640 512" width="1em" height="1em" {...props}>
      <path d="M416 208a16 16 0 1016 16 16 16 0 00-16-16zm208 112h-48V160A160 160 0 00416 0H64A64 64 0 000 64v256a64 64 0 0064 64h32a96 96 0 00192 0h336a16 16 0 0016-16v-32a16 16 0 00-16-16zM192 432a48 48 0 1148-48 48.05 48.05 0 01-48 48zm64-240a32 32 0 01-32 32H96a32 32 0 01-32-32v-64a32 32 0 0132-32h128a32 32 0 0132 32zm192 128H320V128a32 32 0 0132-32h64a32 32 0 0132 32z" />
    </svg>
  );
};

export default generateIcon(SolidCaravan);
