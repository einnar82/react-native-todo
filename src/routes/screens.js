import React from 'react'
import Home from '../views/home'
import ReviewDetails from '../views/reviewDetails'
import About from '../views/about'

const screens = [
    {
        component: props => <Home {...props}/>,
        name: 'Home',
        options: {
            title: 'Welcome'
        }
    },
    {
        component: props => <ReviewDetails {...props}/>,
        name: 'ReviewDetails',
        options: {
            title: 'ReviewDetails'
        }
    }
]

export default screens;