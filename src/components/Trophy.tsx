import * as React from "react";

const Trophy: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    id="图层_1"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      className="st0"
      d="M320 480c0 49.1 19.1 95.4 53.9 130.1 34.8 34.8 81 53.9 130.1 53.9h16c49.1 0 95.4-19.1 130.1-53.9 34.8-34.8 53.9-81 53.9-130.1V184H320v296zM248 232h-64v120c0 41 26.9 75.8 64 87.6V232zM776 439.6c37.1-11.9 64-46.7 64-87.6V232h-64v207.6z"
    />
    <path d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92c-24.3 0-44 19.7-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204c0-24.3-19.7-44-44-44zM184 352V232h64v207.6c-37.1-11.8-64-46.6-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z" />
  </svg>
);

Trophy.displayName = "Trophy";

export default Trophy;