import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidSortAmountUpAlt = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M240 96h64a16 16 0 0016-16V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v32a16 16 0 0016 16zm0 128h128a16 16 0 0016-16v-32a16 16 0 00-16-16H240a16 16 0 00-16 16v32a16 16 0 0016 16zm256 192H240a16 16 0 00-16 16v32a16 16 0 0016 16h256a16 16 0 0016-16v-32a16 16 0 00-16-16zm-256-64h192a16 16 0 0016-16v-32a16 16 0 00-16-16H240a16 16 0 00-16 16v32a16 16 0 0016 16zM16 160h48v304a16 16 0 0016 16h32a16 16 0 0016-16V160h48c14.21 0 21.39-17.24 11.31-27.31l-80-96a16 16 0 00-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160z" />
    </svg>
  );
};

export default generateIcon(SolidSortAmountUpAlt);
