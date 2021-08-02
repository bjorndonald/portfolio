import React from 'react'
import laptop_1 from './../../images/laptop_1.png'
import laptop_2 from './../../images/laptop_2.png'
import laptop_3 from './../../images/laptop_3.png'
const works = [
  {
    title: 'Thisisafrikan',
    category: 'Website',
    agency: 'Personal',
    year: '2021',
    link: 'https://thisisafrikan.com',
    image: <img src={laptop_1} />,
    description: `Thisisafrikan is a luxury shoe brand based in Toronto, 
      targeting African-American customers in Canada/North America. 
      The startup aims to upset conventional narratives to bring 
      their customers a level of handcrafted luxury previously 
      reserved for locations like New York, London, and Milan.
      I was the key web developer for this project. Working on 
      both the frontend and backend, I programmed the store's 
      backend with Express.js and Node.js. The frontend was built 
      from Figma screens developed by the teams in house UI/UX 
      developer and coded in HTML and SCSS.`
  },
  {
    title: 'CovidAfrik',
    category: 'Website',
    agency: 'Personal',
    year: '2020',
    image: <img src={laptop_2} />,
    link: 'https://corvidafrik.herokuapp.com',
    description:
      'This is a virus tracking platform built using public data on the novel coronavirus in my country, Nigeria. It is a simple site white utilizes javascript to display a number of helpful charts to better understand the covid data.'
  },
  {
    title: 'Ampleefi',
    category: 'Website',
    agency: 'Personal',
    year: '2020',
    image: <img src={laptop_3} />,
    link: 'https://testampleefi.herokuapp.com',
    description:
      'I was in charge of the front end for the website. I made use of HTML, SCSS and React.js.'
  }
]
export { works }
