import { Fragment } from 'react'
import classes from './Header.module.css'
import maelsImage from '../../assets/meals.jpg'
import HeaderCartButtun from './HeaderCartButtun'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButtun />
            </header>
            <h1>React Meals</h1>
            <div className={classes['main-image']}>
                <img src={maelsImage} alt="meals image" />
            </div>

        </Fragment>
    )
}

export default Header
