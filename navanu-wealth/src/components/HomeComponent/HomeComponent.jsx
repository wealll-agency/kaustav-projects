import React from 'react'
import Hero from './Hero'
import Whoweare from './Whoweare'
import OurProducts from './OurProducts'
import OurServices from './OurServices'
import Articles from './Articles'
import Review from './Review'
import Contact from './Contact'

const HomeComponent = () => {
  return (
    <>
        <Hero></Hero>
        <Whoweare></Whoweare>
        <OurProducts></OurProducts>
        <OurServices></OurServices>
        <Articles></Articles>
        <Review></Review>
        <Contact></Contact>
    </>
  )
}

export default HomeComponent