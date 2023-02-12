import * as React from 'react';
const SvgMaximizeIcon = (props:any) => (
   <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
         d="M2 9.98V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-1"
         stroke="white"
         strokeWidth={1.5}
         opacity={1}
         strokeLinecap="round"
         strokeLinejoin="round"
      />
      <g
         opacity={0.3}
         stroke="white"
         strokeWidth={1.5}
         strokeLinecap="round"
         strokeLinejoin="round">
         <path d="m13 11 5.01-5.02H14M18.01 5.98v4.01" />
      </g>
      <path
         opacity={0.3}
         d="M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15Z"
         stroke="white"
         strokeWidth={1.5}
         strokeLinecap="round"
         strokeLinejoin="round"
      />
   </svg>
);
export default SvgMaximizeIcon;