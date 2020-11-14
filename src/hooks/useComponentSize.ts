import { useRef, useState, useEffect } from 'react';

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
  const [observer, setObserver] = useState();

  useEffect(() => {
    // ResizeObserver could be polyfilled. For now, we will just ignore the typescript warning
    // We are not interested to the
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setObserver(new ResizeObserver(([entry]) => setSize(entry.contentRect as ComponentSize)));
  }, []);

  useEffect(() => {
    if (!observer) return () => undefined;

    if (ref.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      observer.disconnect();
    };
  }, [ref, observer]);

  return size;
};

export default useComponentSize;
