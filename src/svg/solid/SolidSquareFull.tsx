import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidSquareFull = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M512 512H0V0h512v512z" />
    </svg>
  );
};

export default generateIcon(SolidSquareFull);
