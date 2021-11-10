import React from 'react';
import feed from './assets/data/feed';
import Post from './src/components/Post';
import Router from './src/navigation/Router';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen';
import GuestScreen from './src/screens/GuestScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';

const App = () => {
  return <Router />;
};

export default App;
