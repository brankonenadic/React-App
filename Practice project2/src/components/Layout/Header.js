import { Fragment } from 'react'
import classes from './Header.module.css'
import maelsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <h1>React Meals</h1>
            <div className={classes['main-image']}>
                <img src={maelsImage} alt="meals" />
            </div>

        </Fragment>
    )
}

export default Header
