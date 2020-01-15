import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidEgg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 384 512" width="1em" height="1em" {...props}>
      <path d="M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0z" />
    </svg>
  );
};

export default generateIcon(SolidEgg);
