import React from 'react';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { Group, Div, Header, Button, Link } from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24UserAdd from '@vkontakte/icons/dist/24/user_add';


import './Home.css';

const osName = platform();

const Rules = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="about">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Правила
		</PanelHeader>
		<Group title="Правила" className="font">
		<Group header={<Header mode="secondary">1. Общие правила</Header>}>
	<Div className="font" style={{ paddingTop: 25, paddingBottom: 25, color: 'gray' }}>
			1.1 Заходя в приложение, начиная общение в беседе LeetCoin Вы соглашатесь со всеми правилами LeetCoin;<br/>
			1.2 Незнание правил не освобождает Вас от ответственности за нарушение правил LeetCoin;<br/>
			1.3 Администрация не обязана уведомлять Вас о том, что правила были изменены;<br/>
			1.4 Все отправленные деньги в LeetCoin являются пожертвованием нам и возврату не подлежат;<br/>
			1.5 Администрация имеет право исключить или выдать предупреждение пользователю по своему усмотрению;
          </Div>
		  </Group>
		  <Group header={<Header mode="secondary">2. Правила сервиса</Header>}>
	<Div className="font" style={{ paddingTop: 25, paddingBottom: 25, color: 'gray' }}>
			2.1 Запрещается создание препятствия развития других пользователей в виде накрутки валюты и карается блокировкой в приложении;<br/>
			2.2 IP, которые "дудосят" наше приложение, будут автоматически блокироваться без возможности разблокировки;<br/>
			2.3 Запрещается подмена запроса, которая любым образом:<br/>
				- Изменяет Ваш ник в сервисе;<br/>
				- Изменяет Ваш баланс;<br/>
				- Дает Вам какие-нибудь плюсы;
	</Div>
	</Group>
	<Group header={<Header mode="secondary">3. Правила чата</Header>}>
	<Div className="font" style={{ paddingTop: 25, paddingBottom: 25, color: 'gray' }}>
			3.1 Запрещается оскорбление в беседе:<br/>
				- Администрации;<br/>
				- Участников;<br/>
			3.2 Запрещается производить рекламу;<br/>
			3.3 Публиковать текстовые, графические, аудио и видео материалы, если эти материалы:<br/>
				- носят рекламный характер;<br/>
				- являются спамом или рассылаются массово ограниченному или неограниченному количеству адресатов;<br/>
				- могут быть отнесены к пропаганде экстремизма, терроризма, сепаратизма, нетерпимости, высказывания расистского характера, разжигание межнациональной и религиозной розни, а также материалы политической направленности;<br/>
				- могут быть отнесены к пропаганде наркотических (включая курение), психотропных и иных веществ, влияющих на сознание и восприятие действительности;<br/>
				- не соответствуют общепринятым нормам приличия и/или законам Российской Федерации, а также могут быть расценены как подстрекательство к нарушению их;<br/>
				- написаны с использованием СПЛОШНЫХ ЗАГЛАВНЫХ букв, кроме аббревиатур и принятых сокращений;<br/>
			3.4 Запрещается препятствие свободному общению путем:<br/>
				- Попрошайничества;<br/>
				- Флуда;<br/>
				- Троллинга;<br/>
				- Угроз, вымогательств;<br/>
				- Деанон инфомарции о пользователе;
	</Div>
	</Group>
	
	<Div title="Беседа" className="font" style={{ paddingTop: 25, paddingBottom: 25, color: 'gray' }}>
	Если Вы хотите пообщаться с пользователями нашего сервиса, не поленитесь и присоеденитесь по кнопки ниже.<br/><br/>
<Link href="https://vk.me/join/AJQ1dxOYvxbLKzXLYGhwi7tR" target="_blank"><Button mode="outline" before={<Icon24UserAdd/>}>Вступить в беседу</Button></Link>	
</Div>
</Group>
	</Panel>
);



export default Rules;
