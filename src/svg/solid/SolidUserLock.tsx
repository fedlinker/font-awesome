import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidUserLock = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 640 512" width="1em" height="1em" {...props}>
      <path d="M224 256A128 128 0 1096 128a128 128 0 00128 128zm96 64a63.08 63.08 0 018.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 01-145.8 0h-16.7A134.43 134.43 0 000 422.4V464a48 48 0 0048 48h280.9a63.54 63.54 0 01-8.9-32zm288-32h-32v-80a80 80 0 00-160 0v80h-32a32 32 0 00-32 32v160a32 32 0 0032 32h224a32 32 0 0032-32V320a32 32 0 00-32-32zM496 432a32 32 0 1132-32 32 32 0 01-32 32zm32-144h-64v-80a32 32 0 0164 0z" />
    </svg>
  );
};

export default generateIcon(SolidUserLock);
