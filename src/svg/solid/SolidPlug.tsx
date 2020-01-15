import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidPlug = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 384 512" width="1em" height="1em" {...props}>
      <path d="M320 32a32 32 0 00-64 0v96h64zm48 128H16a16 16 0 00-16 16v32a16 16 0 0016 16h16v32a160.07 160.07 0 00128 156.8V512h64v-99.2A160.07 160.07 0 00352 256v-32h16a16 16 0 0016-16v-32a16 16 0 00-16-16zM128 32a32 32 0 00-64 0v96h64z" />
    </svg>
  );
};

export default generateIcon(SolidPlug);
