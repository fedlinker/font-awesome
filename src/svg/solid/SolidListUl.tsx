import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidListUl = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M48 48a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm448 16H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z" />
    </svg>
  );
};

export default generateIcon(SolidListUl);
