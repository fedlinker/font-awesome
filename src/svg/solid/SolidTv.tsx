import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidTv = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 640 512" width="1em" height="1em" {...props}>
      <path d="M592 0H48A48 48 0 000 48v320a48 48 0 0048 48h240v32H112a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16H352v-32h240a48 48 0 0048-48V48a48 48 0 00-48-48zm-16 352H64V64h512z" />
    </svg>
  );
};

export default generateIcon(SolidTv);
