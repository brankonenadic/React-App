import React from 'react'
import { Fragment } from 'react'
import AvaibileMeals from './AvaibileMeals'
import MealsSummary from './MealsSummary'

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvaibileMeals />
        </Fragment>
    )
}

export default Meals
