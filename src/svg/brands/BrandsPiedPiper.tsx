import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const BrandsPiedPiper = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 480 512" width="1em" height="1em" {...props}>
      <path
        className="prefix__cls-1"
        d="M455.93 23.2c-26.7 6.8-68.14 28.49-114.58 67.46A206 206 0 00240 64C125.13 64 32 157.12 32 272s93.13 208 208 208 208-93.13 208-208a207.25 207.25 0 00-58.75-144.81 155.35 155.35 0 00-17 27.4A176.16 176.16 0 01417.1 272c0 97.66-79.44 177.11-177.09 177.11a175.81 175.81 0 01-87.63-23.4c82.94-107.33 150.79-37.77 184.31-226.65 5.79-32.62 28-94.26 126.23-160.18 8.08-5.43 2.43-18.08-6.99-15.68zM125 406.4A176.66 176.66 0 0162.9 272c0-97.66 79.45-177.1 177.1-177.1a174 174 0 0176.63 17.75C250.64 174.76 189.77 265.52 125 406.4z"
      />
    </svg>
  );
};

export default generateIcon(BrandsPiedPiper);
