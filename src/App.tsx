import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
