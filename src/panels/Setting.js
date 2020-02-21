import React from 'react';
import connect from '@vkontakte/vk-connect';
//import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { Div, Group, Header, Button } from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './Home.css';

const osName = platform();

const Setting = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Настройки
		</PanelHeader>
		<Div className="font" style={{ paddingTop: 5, paddingBottom: 25, color: 'gray' }}> 
		<Group header={<Header mode="secondary">Истории</Header>}>
		<Button onClick={() => {connect.send("VKWebAppShowStoryBox", { "background_type" : "image", "url" : "https://sun9-65.userapi.com/c850136/v850136098/1b77eb/0YK6suXkY24.jpg", "attachment": {"text" : "game", "type" : "url", "url" : "https://vk.com/app7306875"}})}}>Опубликовать историю</Button>
		</Group>
		</Div>
	</Panel>
);


export default Setting;
