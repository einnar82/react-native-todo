import React from 'react'
import Home from '../views/home'
import ReviewDetails from '../views/reviewDetails'
import About from '../views/about'

const screens = [
    {
        component: props => <Home />,
        name: 'Home',
        options: {
            title: 'Welcome'
        }
    },
    {
        component: props => <ReviewDetails />,
        name: 'ReviewDetails',
        options: {
            title: 'ReviewDetails'
        }
    },
    {
        component: props => <About />,
        name: 'About',
        options: {
            title: 'About'
        }
    }
]

export default screens;