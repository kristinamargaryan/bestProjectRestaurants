import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import useWindowDimensions from './WindowResize';
import {
	MaindContainer,
	InfoPath,
	MainContent,
	AboutRest,
	InfoTitle,
	InfoPath2,
	InfoHref,
} from './CssFolder/StyleRestInfoDialog';

function RestaurantInfoDialogTopPart(props) {
	const { data } = props;
	const { width } = useWindowDimensions();

	const aboutRest = [
		{ title: 'City:', path: data.city },
		{ title: 'Adress:', path: data.address },
		{ title: 'Price:', path: data.priceInfo },
	];

	return (
		<MaindContainer>
			<div>
				<img
					style={{
						width: width <= 570 ? '250px' : '300px',
						maxHeight: '320px',
					}}
					src={data.photos.avatar}
					alt='img'
				/>
			</div>
			<MainContent>
				<InfoPath>
					<div>For Reservation </div>
					<span>
						{data.options.includes('Delivery') ? 'Or Delivery' : null}
					</span>
					<InfoHref href={`tel:${data.phoneNumber}`}>
						<CallIcon />
						{data.phoneNumber}
					</InfoHref>
				</InfoPath>

				{aboutRest.map(function (element) {
					return (
						<AboutRest>
							<InfoTitle>{element.title}</InfoTitle>
							{element.path}
						</AboutRest>
					);
				})}

				<InfoPath2>
					<InfoTitle>Cousine:</InfoTitle>{' '}
					{data.foodTypes.map((e) => (
						<div>{e + ', '}</div>
					))}
				</InfoPath2>

				<AboutRest>
					<InfoTitle>Open:</InfoTitle>{' '}
					{data.openTime + ' - ' + data.closeTime + ' AM'}
				</AboutRest>
			</MainContent>
		</MaindContainer>
	);
}

export default RestaurantInfoDialogTopPart;
