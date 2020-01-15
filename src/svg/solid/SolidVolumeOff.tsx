import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidVolumeOff = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 256 512" width="1em" height="1em" {...props}>
      <path d="M215 71l-89 89H24a24 24 0 00-24 24v144a24 24 0 0024 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z" />
    </svg>
  );
};

export default generateIcon(SolidVolumeOff);
