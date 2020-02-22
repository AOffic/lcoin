import React from 'react';
import connect from '@vkontakte/vk-connect';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
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
import Icon28Story from '@vkontakte/icons/dist/28/story';
import Icon24Story from '@vkontakte/icons/dist/24/story';

import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';




import './Home.css';


//var mysql      = require('mysql');
//var connection = mysql.createConnection({
  //host     : '91.121.158.100',
  //user     : 'roolp',
  //password : '3W4L4L7f',
  //database : 'leetproject'
//});
 
//connection.connect();


// connection.query("UPDATE posts SET title = :title",  {  title:  "Hello MySQL" } );
// connection.query("INSERT INTO `leetcoin`(`uid`, `name`, `sname`, `pravo`) VALUES ('{`${fetchedUser.id}`}', '{`${fetchedUser.first_name}`}', '{`${fetchedUser.last_name}`}', '0')");
const osName = platform();


const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader className="font"
			left={<PanelHeaderButton onClick={() => {connect.send("VKWebAppShowStoryBox", { "background_type" : "image", "url" : "https://sun9-36.userapi.com/c854224/v854224813/201d6f/peeOQV7gCYE.jpg", "attachment": {"text" : "game", "type" : "url", "url" : "https://vk.com/app7306875"}})}} data-to="setting" style={{paddingLeft: 10}}>
				{osName === IOS ? <Icon28Story/> : <Icon24Story/>}
			</PanelHeaderButton>}
		>
			LeetCoin
		</PanelHeader>
		{fetchedUser && 
<Group> 
<Cell size="l" 
description="Ваш баланс коинов: [баланс]" before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}><div style={{display: 'flex'}}>{`${fetchedUser.first_name} ${fetchedUser.last_name} ${fetchedUser.id}`} <Icon16Verified fill="red" width="16" height="16" style={{marginLeft: "6px"}}/><Icon12FireVerified fill="red" width="16" height="16" style={{marginLeft: "6px"}}/></div></Cell>
</Group>}
<Group title="AddCoin">
<Link><Button size="l" mode="tertiary" stretched style={{ marginRight: 8 }} before={
		<Icon24AddOutline width={28} height={28} />}>  Кликнуть (+[кол-во за 1 клик])</Button></Link>
</Group>
<Group title="Меню" className="font">
			<FixedLayout vertical="bottom">	
<Separator wide />			
				<Div style={{display: 'flex'}}>
		<Button size="l" mode="tertiary" stretched onClick={go} data-to="shop" before={
<Icon24Market />}>Магазин</Button>
	   <Button size="l" mode="tertiary" stretched style={{ marginRight: 8 }} onClick={go} data-to="about" before={
		<Icon24Info />}> О сервисе</Button>
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