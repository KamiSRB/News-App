import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill'; // Could be lazy loaded only when needed and split up in the separate chunk

type ComponentSize = Pick<DOMRect, 'width' | 'height'>;

const initialSize: ComponentSize = {
  height: 0,
  width: 0,
};

/**
 * Get always the actual size of the DOM element using the ResizeObserver
 * @param refObject Reference of the DOM element
 */
const useComponentSize = (refObject?: React.RefObject<HTMLElement>): ComponentSize => {
  const innerRef = useRef();
  const ref = refObject || innerRef;

  const [size, setSize] = useState<ComponentSize>(initialSize);
  const [observer, setObserver] = useState<ResizeObserver>();

  useEffect(() => {
    setObserver(new ResizeObserver(([entry]) => setSize(entry.contentRect as ComponentSize)));
  }, []);

  useEffect(() => {
    if (!observer) return () => undefined;

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return size;
};

export default useComponentSize;
