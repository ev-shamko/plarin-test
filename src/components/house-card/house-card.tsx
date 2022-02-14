import React, { useEffect, useState } from 'react';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import { THouse } from '../../utils/types';
import SvgIcon from '@mui/material/SvgIcon';
import './house-card.scss';
import { getFavouriteHousesFromLS, isHouseFavourite } from '../../utils/localStorage';
import defaultStore from '../../stores/defaultStore';

type THouseCardProps = {
  houseData: THouse
}

export const HouseCard = ({ houseData }: THouseCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const checkIsInFavourites = () => {
    setIsFavorite(isHouseFavourite(houseData, getFavouriteHousesFromLS()))
  }

  // проверит, находится ли карточка в избранном, после первичной загрузки карточки
  useEffect(() => {
    checkIsInFavourites()
  }, []);

  const getTitle = () => {
    return (
      houseData.words.length > 0 ?
        <p className="houseWords">«{houseData.words}»</p>
        :
        null
    );
  }

  const handleClick = () => {
    defaultStore.toggleFaveHouse(houseData);
    checkIsInFavourites()
  }

  return (
    <li className='houseCard'>

      <div className='starButton' onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SvgIcon component={isFavorite ? StarPurple500SharpIcon : StarBorderPurple500SharpIcon} fontSize="large" />
      </div>

      <span className='houseRegion'>{houseData.region}</span>
      <h2>{houseData.name}</h2>
      {getTitle()}
      
    </li>
  )
}
