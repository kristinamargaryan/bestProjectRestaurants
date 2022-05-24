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


export default function FilterDialog(props) {


  return (
    <div>
      <Dialog style={{display: 'flex'}} open={props.open} onClose={props.onClose}>
        <DialogTitle style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}><div>Filters</div><Button onClick={props.onClose}><CachedIcon /></Button></DialogTitle>
        <div style={{paddingLeft: '30px', paddingRight: '30px', paddingBottom: '30px'}}>
            <div>
                <h4>Find by restaurnt name</h4>
                <input style={{width: '100%', height: '40px', fontSize: '20px'}} type='text' placeholder='Find restaurant'/>
            </div>
            <div>
                <h4>Find by type of food</h4>
                <FoodTypeMenu />
            </div>
            <div>
                <h4>Select Price</h4>
            <div style={{display: 'flex', justifyContent: 'space-around', textAlign: 'left'}}>
                <button><AttachMoneyIcon fontSize='small'/></button>
                <button ><AttachMoneyIcon fontSize='small' /><AttachMoneyIcon fontSize='small' /></button>
                <button><AttachMoneyIcon fontSize='small'/><AttachMoneyIcon fontSize='small'/><AttachMoneyIcon fontSize='small'/></button>
                <button><AttachMoneyIcon fontSize='small'/><AttachMoneyIcon fontSize='small'/><AttachMoneyIcon fontSize='small'/><AttachMoneyIcon fontSize='small'/></button>
            </div>
            <div>
                <h4>Moods</h4>
                <div style={{display: 'flex', height: '110px', width: '100%', justifyContent: 'space-evenly'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <button style={{display: 'flex', alignItems: 'center'}}><WineBarIcon /> <div>Romantic</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><BusinessCenterIcon /> <div>Busines</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><GroupsIcon /> <div>Groups</div></button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <button style={{display: 'flex', alignItems: 'center'}}><CelebrationIcon /><div>Party</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><ChildCareIcon /><div>Children</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><TableBarIcon /><div>Local</div></button>
                    </div>
                </div>
            </div>
            <div>
                <h4>Option</h4>
                <div style={{display: 'flex', height: '180px', width: '100%', justifyContent: 'space-evenly'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <button style={{display: 'flex', alignItems: 'center'}}><EventSeatIcon /> <div>Reservation</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><TakeoutDiningIcon /> <div>TakeOut</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><CellWifiIcon /><div>WiFi</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><CreditScoreIcon /><div>Credit Card</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><DeckIcon /> <div>Outdoor</div></button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <button style={{display: 'flex', alignItems: 'center'}}><DirectionsCarIcon /> <div>Parking</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><DeliveryDiningIcon /> <div>Delivery</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><AccessibleIcon /> <div>Whellchair</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><SportsBarIcon /> <div>Alcohol</div></button>
                        <button style={{display: 'flex', alignItems: 'center'}}><NightlifeIcon /><div>Bar atmosphere</div></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}