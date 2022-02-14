import React, { useState, useMemo } from 'react';
import './task.scss';
import { MainPage, FavouritesPage } from '../../pages';

type TCurrentSection = 'ALL_HOUSES' | 'FAVOURITE_HOUSES';

export const Task = () => {
  const [currentSection, setCurrentSection] = useState<TCurrentSection>('ALL_HOUSES');

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

  // возвращает текущую страницу: "список домов" либо "избранное"
  const currentAppSection = useMemo(() => {
    switch (currentSection) {
      case 'ALL_HOUSES': {
        return <MainPage />;
      }
      case 'FAVOURITE_HOUSES': {
        return <FavouritesPage />;
      }
      default: {
        return <MainPage />
      }
    }
  }, [currentSection]);

  return (
    <>
      <div className="task">
        <h1>Houses of Ice and Fire</h1>
        {menu}
        {currentAppSection}
      </div>

      <p>This application is using <a target="_blank" rel="noreferrer" href="https://anapioficeandfire.com/#">An API of Ice And Fire</a></p>
      <p>This application was made as a <a href='https://docs.google.com/document/d/14_55LI1XVgVLXfKQLc6Ihd8URR019B8IeFmSvApWjPQ/edit?usp=sharing' target="_blank" rel="noreferrer">test task for Plarin</a></p>
    </>
  );
};