import React from 'react';

let useClickOutside = (handler: any) => {
  let domNode = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    let maybeHandler = (event: any) => {
      if (!domNode.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);
    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

export { useClickOutside };
