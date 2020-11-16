import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface PaginationProps {
  pageNo: number;
  pagesCount: number;
  setPageNo: Dispatch<SetStateAction<number>>;
  setPagesCount: Dispatch<SetStateAction<number>>;
  loadNextPage: () => void;
  loadPreviousPage: () => void;
}

const usePagination = (): PaginationProps => {
  const [pageNo, setPageNo] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number>(1);

  const loadNextPage = useCallback(() => {
    if (pageNo < pagesCount) {
      setPageNo((page) => page + 1);
    }
  }, [pageNo, pagesCount]);

  const loadPreviousPage = useCallback(() => {
    if (pageNo > 1) {
      setPageNo((page) => page - 1);
    }
  }, [pageNo]);

  return { pageNo, setPageNo, pagesCount, setPagesCount, loadNextPage, loadPreviousPage } as const;
};

export default usePagination;
