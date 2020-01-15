import React, { SVGProps } from 'react';
import generateIcon from '../../generateIcon';

const SolidChessRook = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 384 512" width="1em" height="1em" {...props}>
      <path d="M368 32h-56a16 16 0 00-16 16v48h-48V48a16 16 0 00-16-16h-80a16 16 0 00-16 16v48H88.1V48a16 16 0 00-16-16H16A16 16 0 000 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32V48a16 16 0 00-16-16zM224 320h-64v-64a32 32 0 0164 0zm144 128H16a16 16 0 00-16 16v32a16 16 0 0016 16h352a16 16 0 0016-16v-32a16 16 0 00-16-16z" />
    </svg>
  );
};

export default generateIcon(SolidChessRook);
