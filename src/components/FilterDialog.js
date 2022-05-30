import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import CachedIcon from "@mui/icons-material/Cached";
import FoodTypeMenu from "../components/FoodTypeMenu";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WineBarIcon from "@mui/icons-material/WineBar";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import TableBarIcon from "@mui/icons-material/TableBar";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import DeckIcon from "@mui/icons-material/Deck";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccessibleIcon from "@mui/icons-material/Accessible";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import "../App.css";
import { height } from "@mui/system";

export default function FilterDialog() {
	const optionBar = [
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

    const price = ['$','$$','$$$','$$$$']



	/* const attachMoneyIcons = () =>{

        } */

	return (
		<div
			style={{
				alignItems: 'center',
				justifyContent: 'space-left',
				border: '1px solid',
				maxWidth: '280px',
				borderRadius: '8px',
				boxShadow: '0 0 15px black',
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

                        {price.map((elem) => <button>{elem}</button>)}

					</div>
				</li>

				<li className='moodsBar'>
					<h5>Moods</h5>
					<div style={{display: 'flex', flexWrap: 'wrap'}}>
						
							{moodsBar.map(function (element) {
								return (
									<button/*  onclick={useStyles={backgrounColor: 'red'}} */>
										{element.tag}
										<div>{element.title}</div>
									</button>
								);
							})}
						
					</div>
				</li>

				<li>
					<div className='optionBar'>
						<h5>Option</h5>
							<div style={{display: 'flex', flexWrap: 'wrap'}}>
								{optionBar.map(function (element) {
									return (
										<button>
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
