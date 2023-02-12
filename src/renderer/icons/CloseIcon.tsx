import * as React from 'react';

const SvgCloseIcon: React.FC = (props: any) => {

   return (
      <svg
         width="1em"
         height="1em"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}>
         <g
            opacity={1}
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17" />
         </g>
         <path
            d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};
export default SvgCloseIcon;
