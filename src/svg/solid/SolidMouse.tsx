import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidMouse = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 384 512" width="1em" height="1em" {...props}>
      <path d="M0 352a160 160 0 00160 160h64a160 160 0 00160-160V224H0zM176 0h-16A160 160 0 000 160v32h176zm48 0h-16v192h176v-32A160 160 0 00224 0z" />
    </svg>
  );
};

export default generateIcon(SolidMouse);
