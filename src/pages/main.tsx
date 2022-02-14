import React, { useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import defaultStore from '../stores/defaultStore';
import { PagePagination } from '../components/pagination/pagination';
import { getPage } from '../utils/api';
import { CardsContainer } from '../components/cards-container/cards-container';

export const MainPage = observer(() => {
  const { 
    mainCurrentPageNumber: currentPageNumber, 
    mainTotalPages: totalPages,
    mainHousesList: housesList,
  } = defaultStore;

  useEffect(() => {
    getPage(currentPageNumber)
      .then((res) => defaultStore.setHousesData(res.data))
      .catch(err => console.log(err))
  }, [currentPageNumber]);

  const getPagination = () => {
    return (
      <PagePagination pageQty={totalPages} pageNumber={currentPageNumber} setPageNumber={defaultStore.setMainCurrentPage} />
    );
  }

  const messageWhyEmty = useMemo(() => {
    return 'Couldn`t download data about Houses. Probably something is wrong with the API server (or white walkers destroyed everything). You may try to reload this page or come back later'
  }, []);

  return (
    <>
      {getPagination()}

      <CardsContainer housesList={housesList} messageWhyEmty={messageWhyEmty}></CardsContainer>

      {getPagination()}
    </>
  )
});