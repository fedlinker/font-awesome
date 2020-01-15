import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidMeh = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 496 512" width="1em" height="1em" {...props}>
      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
    </svg>
  );
};

export default generateIcon(SolidMeh);
