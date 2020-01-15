import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const BrandsYandexInternational = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 320 512" width="1em" height="1em" {...props}>
      <path d="M129.5 512V345.9L18.5 48h55.8l81.8 229.7L250.2 0h51.3L180.8 347.8V512h-51.3z" />
    </svg>
  );
};

export default generateIcon(BrandsYandexInternational);
