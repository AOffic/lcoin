import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import Icon24Info from '@vkontakte/icons/dist/24/info';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';
//import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon16Verified from '@vkontakte/icons/dist/16/verified';
import Icon12FireVerified from '@vkontakte/icons/dist/12/fire_verified';

import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Link from '@vkontakte/vkui/dist/components/Link/Link';




import './Home.css';


//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//  host     : 'localhost',
//  user     : 'me',
//  password : 'secret',
//  database : 'my_db'
//});
 
//connection.connect();


 //connection.query("UPDATE posts SET title = :title",  {  title:  "Hello MySQL" } );

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>LeetCoin</PanelHeader>
		{fetchedUser && 
<Group> 
<Cell size="l" 
description="Ваш баланс : [баланс ]" before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}><div style={{display: 'flex'}}>{`${fetchedUser.first_name} ${fetchedUser.last_name}`}<Icon16Verified fill="red" width="16" height="16" style={{marginLeft: "6px"}}/><Icon12FireVerified fill="red" width="16" height="16" style={{marginLeft: "6px"}}/></div></Cell>
</Group>}
<Group title="AddCoin">
<Link><Button size="l" mode="tertiary" stretched style={{ marginRight: 8 }} before={
		<Icon24AddOutline width={28} height={28} />}>  Кликнуть (+[кол-во])</Button></Link>
</Group>
<Group title="Меню" className="font">
			<FixedLayout vertical="bottom">	
<Separator wide />			
				<Div style={{display: 'flex'}}>
		<Button size="l" mode="tertiary" stretched onClick={go} data-to="shop" before={
<Icon24Market />}>Магазин</Button>
	   <Button size="l" mode="tertiary" stretched style={{ marginRight: 8 }} onClick={go} data-to="about" before={
		<Icon24Info />}>  О сервисе</Button>
     </Div>
			</FixedLayout>
</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
//connection.end();