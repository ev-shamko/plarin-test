import React, { useEffect, useState, useMemo } from 'react';
import './task.scss';
import defaultStore from '../../stores/defaultStore';
import { getPage } from '../../utils/api';
import { observer } from 'mobx-react-lite';
import { Pagination, Grid } from "@mui/material";
import { HouseCard } from './house-card/house-card';
import { THouse } from '../../utils/types';

type TCurrentSection = 'ALL_HOUSES'  | 'FAVOURITE_HOUSES';

export const Task = observer(() => {
  const { link } = defaultStore;
  const [pageNumber, setPageNumber] = useState(1);
  const [currentSection, setCurrentSection] = useState<TCurrentSection>('ALL_HOUSES');
  const [pageQty] = useState(37); // здесь захардкодено максимальное количество страниц (444 дома в бд, на странице отображается по 12 домов)
  // const [houses, setHouses] = useState<any>([]);

  useEffect(() => {
    getPage(pageNumber)
      .then((res) => defaultStore.setHousesData(res.data))
      .catch(err => console.log(err))
  }, [pageNumber]);

  const menu = useMemo(() => {
    return (
      <nav className='menu'>
        <ul>
          <li className={currentSection === 'ALL_HOUSES' ? 'activeMenuItem' : 'inactiveMenuItem'} onClick={() => setCurrentSection('ALL_HOUSES')}>List of all Houses</li>
          <li className={currentSection === 'FAVOURITE_HOUSES' ? 'activeMenuItem' : 'inactiveMenuItem'} onClick={() => setCurrentSection('FAVOURITE_HOUSES')}>My favourites</li>
        </ul>
      </nav>
    );
  }, [currentSection]);

  return (
    <>
      <div className="task">
        <h1>Houses of Ice and Fire</h1>
        {menu}

        <Pagination
          count={pageQty}
          page={pageNumber}
          onChange={(_, num) => setPageNumber(num)}
          siblingCount={0} 
          boundaryCount={1}
          // showFirstButton 
          // showLastButton
          sx={{ mb: 4, }}
        />

        {/* <ul>
        {defaultStore.housesData.length > 0 && defaultStore.housesData.map((house: THouse, index: number) => (<HouseCard houseData={house} key={index} />))}
      </ul> */}

        <Grid container alignItems="stretch" spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ mb: 8, mt: 8 }}>
          {defaultStore.housesData.length > 0 && defaultStore.housesData.map((house: THouse, index: number) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <HouseCard houseData={house} key={index} />
            </Grid>
          ))}
        </Grid>

        <Pagination
          count={pageQty}
          page={pageNumber}
          onChange={(_, num) => setPageNumber(num)}
          siblingCount={0} 
          boundaryCount={1}
          // showFirstButton 
          // showLastButton
          sx={{ mb: 4, }}
        />

      </div>

      <p>This application is using <a target="_blank" rel="noreferrer" href="https://anapioficeandfire.com/#">An API of Ice And Fire</a></p>
      <p>This application was made as a <a href={link} target="_blank" rel="noreferrer">test task for Plarin</a></p>
    </>
  );
});