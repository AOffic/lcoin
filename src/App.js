import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import About from './panels/About';
import Rules from './panels/Rules';
import Shop from './panels/Shop';
import Obmen from './panels/Obmen';
import Setting from './panels/Setting';
import Donate from './panels/Donate';


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);


	
	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
		async function CheckUser() {
			fetch("https://aimeofficial.minehosting.xyz/LeetCoin/LeetCoinBackend.php?user_id=$fetchedUser.id")
			.then(response => response.json())
		}
		CheckUser();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	
	
	
	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
			<About id='about' go={go} />
			<Rules id='rules' go={go} />
			<Shop id='shop'go={go} />
			<Obmen id='obmen' go={go} />
			<Setting id='setting' go={go}/>
			<Donate id='donate' go={go}/>
		</View>
	);
	
}

export default App;

