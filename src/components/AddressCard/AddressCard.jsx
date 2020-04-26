import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import './AddressCard.sass'
const AddressCard = (props) => {
    const {checkout, data} = props
    const {id, name, address, country, zip, city,state} = data
	return (
		<div>
			<div className='addressCard'>
				<div className='addressCard__heading'>
					<div className='addressCard__name descriptiveItems'>{name} </div>
					<div className='addressCard__change descriptiveItems'>{checkout ? 'Change' : 'Edit'}</div>
				</div>
				<div className='addressCard__current_address description'>{address} </div>
				<div className='addressCard__current_address description'>{city}, {state} {zip}, {country}</div>
                {!checkout && <div className="addressCard__current">
                    <Checkbox id={id} /> 
                    <p className="addressCard__current_label description">Use as the shipping address</p>
                </div>}
                
			</div>
		</div>
	);
};

AddressCard.propTypes = {};

export default AddressCard;
