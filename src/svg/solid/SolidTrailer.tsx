import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidTrailer = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 640 512" width="1em" height="1em" {...props}>
      <path d="M624 320h-80V80a16 16 0 00-16-16H16A16 16 0 000 80v288a16 16 0 0016 16h49.61c7.83-54.21 54-96 110.39-96s102.56 41.79 110.39 96H624a16 16 0 0016-16v-32a16 16 0 00-16-16zM96 243.68a176.29 176.29 0 00-32 20.71V136a8 8 0 018-8h16a8 8 0 018 8zm96-18.54c-5.31-.49-10.57-1.14-16-1.14s-10.69.65-16 1.14V136a8 8 0 018-8h16a8 8 0 018 8zm96 39.25a176.29 176.29 0 00-32-20.71V136a8 8 0 018-8h16a8 8 0 018 8zM384 320h-32V136a8 8 0 018-8h16a8 8 0 018 8zm96 0h-32V136a8 8 0 018-8h16a8 8 0 018 8zm-304 0a80 80 0 1080 80 80 80 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32z" />
    </svg>
  );
};

export default generateIcon(SolidTrailer);
