import React from 'react';

import { Pagination } from "@mui/material";

type TP = {
  pageQty: number,
  pageNumber: number,
  setPageNumber: (pageNumber: number) => void
}

export const PagePagination = ({ pageQty, pageNumber, setPageNumber }: TP) => {
  return (
    <>
      <Pagination
        count={pageQty}
        page={pageNumber}
        onChange={(_, num: number) => setPageNumber(num)}
        siblingCount={0}
        boundaryCount={1}
        // showFirstButton 
        // showLastButton
        sx={{ mb: 4, }}
      />
    </>
  )
}