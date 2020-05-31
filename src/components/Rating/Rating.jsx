import React from 'react'
import PropTypes from 'prop-types'
import star from '../../assets/icon/star.svg'
import fillstar from '../../assets/icon/fillstar.svg'
import './Rating.sass'


const Rating = props => {
    const {stars, voises=0} = props
    const renderStar = () => { 
        let starsArray = []       
        for (let i = 0; i < 5; i++) {             
            if (i < stars) {
                starsArray.push(<img key={i} src={fillstar} alt="star"/>)   
            }else {                
                starsArray.push(<img key={i} src={star} alt="star"/>)                
            }            
        }
        return starsArray
    }
    

    return (
        <div>
            <div className="raiting">
                {renderStar()}
                <span className='voises'>({voises})</span>
            </div>
        </div>
    )
}

Rating.propTypes = {
    stars: PropTypes.number,
    voises: PropTypes.number
}

export default Rating
