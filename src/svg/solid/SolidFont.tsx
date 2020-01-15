import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidFont = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 448 512" width="1em" height="1em" {...props}>
      <path d="M432 416h-23.41L277.88 53.69A32 32 0 00247.58 32h-47.16a32 32 0 00-30.3 21.69L39.41 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16zM176.85 272L224 142.51 271.15 272z" />
    </svg>
  );
};

export default generateIcon(SolidFont);
