import React from 'react'
import PropTypes from 'prop-types'
import './CategoryCard.sass'

const CategoryCard = props => {   
    const {title, photo} = props 
    return (
        <div className='category-card'>
            <div className="category-card__title">
                <span>{title}</span>
            </div>
            <div className="category-card__img">
                <img src={photo} alt="main img card"/>
            </div>
            
        </div>
    )
}

CategoryCard.propTypes = {
    variant: PropTypes.string
}

export default CategoryCard
