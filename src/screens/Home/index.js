import React from 'react';
import Header from './components/HeaderComponent/Header';
import Farmers from './components/FarmersComponent/Farmers/Farmers';

export default function Home() {
  return <Farmers header={Header} />;
}
