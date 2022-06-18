import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CachedIcon from '@mui/icons-material/Cached';
import FoodTypeMenu from '../components/FoodTypeMenu';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WineBarIcon from '@mui/icons-material/WineBar';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import TableBarIcon from '@mui/icons-material/TableBar';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import DeckIcon from '@mui/icons-material/Deck';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccessibleIcon from '@mui/icons-material/Accessible';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import '../App.css';
import { useState } from 'react';
import useWindowDimensions from '../components/WindowResize';

export default function FilterDialog(props) {
	let style1 = {
		backgroundColor: '#d58c1e',
	};
	let style2 = {
		backgroundColor: 'blue',
	};

	const { width } = useWindowDimensions();
	const optionsBar = [
		{ tag: <EventSeatIcon />, title: 'Reservation' },
		{ tag: <TakeoutDiningIcon />, title: 'TakeOut' },
		{ tag: <CellWifiIcon />, title: 'WiFi' },
		{ tag: <CreditScoreIcon />, title: 'CreditCard' },
		{ tag: <DeckIcon />, title: 'OutDoor' },
		{ tag: <DirectionsCarIcon />, title: 'Parking' },
		{ tag: <DeliveryDiningIcon />, title: 'Delivery' },
		{ tag: <AccessibleIcon />, title: 'WhellChair' },
		{ tag: <SportsBarIcon />, title: 'Alcohol' },
		{ tag: <NightlifeIcon />, title: 'Atmosphere' },
	];

	const moodsBar = [
		{ tag: <WineBarIcon />, title: 'Romantic' },
		{ tag: <BusinessCenterIcon />, title: 'Busines' },
		{ tag: <GroupsIcon />, title: 'Groups' },
		{ tag: <CelebrationIcon />, title: 'Party' },
		{ tag: <ChildCareIcon />, title: 'Children' },
		{ tag: <TableBarIcon />, title: 'Local' },
	];

	const prices = ['$', '$$', '$$$', '$$$$', '$$$$$'];

	return (
		<div
			style={{
				display: width <= 850 ? 'none' : 'block',
				border: '1px solid',
				maxWidth: '280px',
				minWidth: '280px',
				borderRadius: '8px',
				boxShadow: '0 0 15px black',
				maxHeight: '500px',
				position: 'sticky',
				top: '70px',
			}}
		>
			<ul className='filterList'>
				<li>
					<h5>Find by restaurnt name</h5>
					<input
						style={{ width: '90%', height: '20px', fontSize: '18px' }}
						type='text'
						placeholder='Find restaurant'
					/>
				</li>
				<li>
					<h5>Find by type of food</h5>
					<FoodTypeMenu style={{ height: '50px', width: '90%' }} />
				</li>

				<li className='selectPrice'>
					<h5>Select Price</h5>
					<div style={{ display: 'flex', textAlign: 'left' }}>
						{prices.map((element) => {
							return (
								<button
									style={props.filteredPrices.includes(element) ? style1 : null}
									onClick={(ev) => {
										props.filteredPrices.includes(element)
											? props.filterPriceCheckedFunction(element, true)
											: props.filterPriceCheckedFunction(element, false);
									}}
								>
									{element}
								</button>
							);
						})}
					</div>
				</li>

				<li className='moodsBar'>
					<h5>Moods</h5>
					<div style={{ display: 'flex', flexWrap: 'wrap' }}>
						{moodsBar.map(function (element) {
							return (
								<button
									style={
										props.filteredMoods.includes(element.title) ? style1 : null
									}
									onClick={(ev) => {
										props.filteredMoods.includes(element.title)
											? props.filterMoodsCheckedFunction(element.title, true)
											: props.filterMoodsCheckedFunction(element.title, false);
									}}
								>
									{element.tag}
									<div>{element.title}</div>
								</button>
							);
						})}
					</div>
				</li>

				<li>
					<div className='optionBar'>
						<h5>Options</h5>
						<div style={{ display: 'flex', flexWrap: 'wrap' }}>
							{optionsBar.map(function (element) {
								return (
									<button
										style={
											props.filteredOptions.includes(element.title)
												? style1
												: null
										}
										onClick={(ev) => {
											props.filteredOptions.includes(element.title)
												? props.filterOptionsCheckedFunction(
														element.title,
														true
												  )
												: props.filterOptionsCheckedFunction(
														element.title,
														false
												  );
										}}
									>
										{element.tag}
										<div>{element.title}</div>
									</button>
								);
							})}
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}
