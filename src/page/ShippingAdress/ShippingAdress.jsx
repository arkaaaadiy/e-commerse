import React from 'react'
import Heading from '../../components/Heading/Heading'
import AddressCard from '../../components/AddressCard/AddressCard'
import './ShippingAdress.sass'

const ShippingAdress = () => {
    const address = {
        id: 'j12',
        name: 'Jane Doe',
        address: '3 Newbridge Court',
        zip: '91709',
        state: 'CA',
        country: 'United States',
        city: 'Chino Hills'
    }
    return (
        <div className='container'>
            <Heading nosearch>Shipping addresses</Heading>
            <div className="shipping__wrapper">
                <AddressCard data={address} />
                <AddressCard data={address} />
                <AddressCard data={address} />
            </div>
        </div>
    )
}

export default ShippingAdress
