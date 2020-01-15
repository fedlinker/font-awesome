import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidGenderless = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 288 512" width="1em" height="1em" {...props}>
      <path d="M144 176c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80m0-64C64.5 112 0 176.5 0 256s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z" />
    </svg>
  );
};

export default generateIcon(SolidGenderless);
