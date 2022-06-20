import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import useWindowDimensions from './WindowResize';

function RestaurantInfoDialogTopPart(props) {
    const { data } = props;
    const {width} = useWindowDimensions()
    return (
        <div style={{ width: width <= 550 ? '380px' : '470px', display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
            <img style={{ width: width <= 570 ? '250px' : '300px', maxHeight:  '320px' }} src={data.photos.avatar} alt='img' />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', padding: '0 5px'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', color: '#fff', padding: '7px', borderRadius: '5px'}}>
                <div>For Reservation </div><span>{data.options.includes("Delivery") ? 'Or Delivery' : null}</span>
                <a style={{display: 'flex', alignItems: 'center'}} href={`tel:${data.phoneNumber}`}><CallIcon />{ data.phoneNumber}</a>
            </div>
            <div style={{ color: '#000', fontSize: '18px' }}><span style={{ color: 'green' }}>city:</span> {data.city}</div>
            <div style={{color: '#000', fontSize: '18px'}}><span style={{color: 'green'}}>address:</span> { data.address}</div>
                <div style={{ color: '#000', fontSize: '18px' }}><span style={{ color: 'green' }}>price:</span> {data.priceInfo}</div>
                <div style={{ color: '#000', fontSize: '18px', display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}><span style={{ color: 'green' }}>cousine:</span> {data.foodTypes.map(e => <div>{e + ', '}</div>)}</div>
                <div style={{ color: '#000', fontSize: '13px' }}><span style={{ color: 'green' }}>open:</span> {data.openTime + ' am : ' + data.closeTime + ' pm'}</div>
        </div>
    </div>
    );
}

export default RestaurantInfoDialogTopPart;