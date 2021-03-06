import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidIceCream = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 448 512" width="1em" height="1em" {...props}>
      <path d="M368 160h-.94a144 144 0 10-286.12 0H80a48 48 0 000 96h288a48 48 0 000-96zM195.38 493.69a31.52 31.52 0 0057.24 0L352 288H96z" />
    </svg>
  );
};

export default generateIcon(SolidIceCream);
