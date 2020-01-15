import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidSortAmountDownAlt = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M240 96h64a16 16 0 0016-16V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v32a16 16 0 0016 16zm0 128h128a16 16 0 0016-16v-32a16 16 0 00-16-16H240a16 16 0 00-16 16v32a16 16 0 0016 16zm256 192H240a16 16 0 00-16 16v32a16 16 0 0016 16h256a16 16 0 0016-16v-32a16 16 0 00-16-16zm-256-64h192a16 16 0 0016-16v-32a16 16 0 00-16-16H240a16 16 0 00-16 16v32a16 16 0 0016 16zm-64 0h-48V48a16 16 0 00-16-16H80a16 16 0 00-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0022.62 0l80-96C197.35 369.26 190.22 352 176 352z" />
    </svg>
  );
};

export default generateIcon(SolidSortAmountDownAlt);
