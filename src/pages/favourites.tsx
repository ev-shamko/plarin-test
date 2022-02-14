import React, { useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import defaultStore from '../stores/defaultStore';
import { CardsContainer } from '../components/cards-container/cards-container';

export const FavouritesPage = observer(() => {

  const {
    faveHousesList: housesList,
  } = defaultStore;



  const messageWhyEmty = useMemo(() => {
    return (<p style={{margin: 'auto'}}>Seems like you haven`t add to favourites any Houses. You may come back to the List of all Houses and press star buttons to fave houses.</p>);
  }, []);

  return (
    <>
      {/* В задании не требуется делать пагинацию на этой странице, так что я с большим удовольствием не буду её здесь реализовывать. Не люблю, когда отображается мало элементов и нужно листать страницы */}
      <CardsContainer housesList={housesList} messageWhyEmty={messageWhyEmty}></CardsContainer>
    </>
  )
});