import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidOm = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M360.6 60.94a10.43 10.43 0 0014.76 0l21.57-21.56a10.43 10.43 0 000-14.76L375.35 3.06c-4.08-4.07-10.68-4.07-14.76 0l-21.57 21.56a10.43 10.43 0 000 14.76l21.58 21.56zM412.11 192c-26.69 0-51.77 10.39-70.64 29.25l-24.25 24.25c-6.78 6.77-15.78 10.5-25.38 10.5H245c10.54-22.1 14.17-48.11 7.73-75.23-10.1-42.55-46.36-76.11-89.52-83.19-36.15-5.93-70.9 5.04-96.01 28.78-7.36 6.96-6.97 18.85 1.12 24.93l26.15 19.63c5.72 4.3 13.66 4.32 19.2-.21 8.45-6.9 19.02-10.71 30.27-10.71 26.47 0 48.01 21.53 48.01 48s-21.54 48-48.01 48h-31.9c-11.96 0-19.74 12.58-14.39 23.28l16.09 32.17c2.53 5.06 7.6 8.1 13.17 8.55h33.03c35.3 0 64.01 28.7 64.01 64s-28.71 64-64.01 64c-96.02 0-122.35-54.02-145.15-92.03-4.53-7.55-14.77-3.58-14.79 5.22C-.09 416 41.13 512 159.94 512c70.59 0 128.02-57.42 128.02-128 0-23.42-6.78-45.1-17.81-64h21.69c26.69 0 51.77-10.39 70.64-29.25l24.25-24.25c6.78-6.77 15.78-10.5 25.38-10.5 19.78 0 35.88 16.09 35.88 35.88V392c0 13.23-18.77 24-32.01 24-39.4 0-66.67-24.24-81.82-42.89-4.77-5.87-14.2-2.54-14.2 5.02V416s0 64 96.02 64c48.54 0 96.02-39.47 96.02-88V291.88c0-55.08-44.8-99.88-99.89-99.88zm42.18-124.73c-85.55 65.12-169.05 2.75-172.58.05-6.02-4.62-14.44-4.38-20.14.55-5.74 4.92-7.27 13.17-3.66 19.8 1.61 2.95 40.37 72.34 118.8 72.34 79.92 0 98.78-31.36 101.75-37.66 1.02-2.12 1.53-4.47 1.53-6.83V80c0-13.22-15.14-20.69-25.7-12.73z" />
    </svg>
  );
};

export default generateIcon(SolidOm);
