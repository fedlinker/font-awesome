import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidToggleOff = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 576 512" width="1em" height="1em" {...props}>
      <path d="M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z" />
    </svg>
  );
};

export default generateIcon(SolidToggleOff);
