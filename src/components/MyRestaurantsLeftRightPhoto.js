import React from 'react';
import { Paper } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import useWindowDimensions from './WindowResize';

export function MyRestaurantsGallaryPhotos(props) {
    
    const {width} = useWindowDimensions()
    return (
        <Paper style={{overflowY: 'scroll', maxHeight: width <= 922 ? '400px' : '700px', padding: '20px'}}>
        <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{margin: '0', padding: '0', textAlign: 'center'}}>Restaurant {props.restname} Gallary</h1>
            {props.data.avatar.map((e) => {
                return (
                    <li style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <img style={{width: width <= 1258 ? width <= 1020 ? '230px' :'280px' : '350px', height: width <= 1258 ?width <= 1020 ? '100px' : '140px' : '200px'}} src={e} alt='img'/>
                        <DeleteIcon style={{ color: "red" }} />
                    </li>
                )
            })}
        </ul>
    </Paper>
    );
}


export function MyRestaurantsMenuPhotos(props) {
    const {width} = useWindowDimensions()
    return (
        <Paper style={{overflowY: 'scroll', maxHeight: width <= 922 ? '400px' : '700px', padding: '20px'}} >
        <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{padding: '0', margin: '0', textAlign: 'center'}}>Restaurant {props.restname} Menu</h1>
            {props.data.menuPhotos.map((e) => {
                return (
                    <li style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <img style={{width: width <= 1258 ? width <= 1020 ? '230px' :'280px' : '350px', height: width <= 1258 ?width <= 1020 ? '100px' : '140px' : '200px'}} src={e} alt='img'/>
                        <DeleteIcon style={{ color: "red" }} />
                    </li>
                )
            })}
        </ul>
    </Paper>
    );
}

