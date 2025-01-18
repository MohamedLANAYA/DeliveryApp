import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownLoad from '../../components/AppDownLoad'
import Categories from '../../components/Categories';
import Hire from '../../components/Hire';
import Statistics from '../../components/Statistics';




const Home = () => {

  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <Categories />
      <FoodDisplay category={category}/>
       <AppDownLoad/>
       <Hire />
       <Statistics/>
    </div>
  )
}

export default Home
