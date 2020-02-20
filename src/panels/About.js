import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Error from '@vkontakte/icons/dist/24/error';
import Icon24Send from '@vkontakte/icons/dist/24/send';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { Link } from '@vkontakte/vkui';




import './Home.css';

const osName = platform();

const About = props => (
	<Panel id={props.id}>
		<PanelHeader className="font"
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			О сервисе
		</PanelHeader>
		<Div className="font" style={{ paddingTop: 25, paddingBottom: 25, color: 'gray' }}>
            Привет! <br/>
			Это новый сервис,в виде новой валюты.<br />
			Мы были вдохновлены сервисами с виртуальной валюты (VK Coin, VK Point и прочее) и мы решили создать свой сервис с виртуальной валютой LeetCoin от LeetProject
          </Div>
		  <Separator wide />	
		  <Group header={<Header mode="secondary">Кто-же создал это чудо?</Header>}>
        <Cell
          size="l"
          description="Разработчик"
          before={<Avatar src="https://sun9-62.userapi.com/c857620/v857620349/17915e/nFnq1XPlHw0.jpg"/>}
          bottomContent={<Link href="https://vk.com/id230558063" target="_blank"><Button before={<Icon24Send width={20} height={20}/>}> Написать</Button></Link>}
        >
          Евгений Котляров
        </Cell>
		
		<Separator wide />	
		<Cell
          size="l"
          description="Наша группа"
          before={<Avatar src="https://sun9-64.userapi.com/c854020/v854020600/1dc926/uxA4oEDESSE.jpg?ava=1"/>}
          bottomContent={<Link href="https://vk.com/leetproject" target="_blank"><Button before={<Icon24LogoVk width={20} height={20}/>}> Перейти</Button></Link>}
        >
          LeetProject 2.0
        </Cell>
      </Group>
<Separator wide />	
<Div className="font" style={{ paddingTop: 25, paddingBottom: 25, color: 'gray' }}>
	<Group title="Напоминаем">
		Не забывайте про правила проекта, которые находятся по кнопке ниже.<br/><br/>
<Button size="l" mode="destructive" onClick={props.go} data-to="rules" before={
<Icon24Error width={20} height={20} />}> Правила </Button>
</Group>
</Div>
<Separator wide />	
<Div className="font" style={{ paddingTop: 25, paddingBottom: 25, color: 'gray' }}>
Версии<br/><br/>
<Separator wide /><br/>
<Div className="vers">b0.2.6 <div className="verdate">(20.02.2020)</div><br/>
- Наконец-то пофиксили отображение галочки и огонька<br/>
- Теперь пишим версию в самом низу вкладки "О сервисе" (Вы тут сейчас и находитесь)<br/>
- В Магазин добавили верхнее меню<br/>
- В верхнем меню (во вкладке Магазин) добавили "Обмен". Добавили уже один из обменов<br/>
- Немного сделали правила<br/>
- В правилах добавили кнопку на вступление в будущую беседу приложения<br/>
- В ПК версии уменьшили размер приложения<br/><br/>

На данный момент ВСЕ нерабочее, так как мы только начали понимать сам код и мы сейчас работаем над самим шаблоном сервиса.<br/><br/>
</Div>
<Separator wide /><br/>
<Div className="vers">b0.2.5 <div className="verdate">(18.02.2020)</div><br/>
- Добавили галочки для верефицированных (Пока что криво стоят, исправим в следующем обновлении)<br/>
- Добавили особые галочки для администрации<br/>
- Сменили положение баланса пользователя<br/><br/>

Все так-же нерабочее: Мы еще не начали разрабатывать бэкенд.<br/><br/>
</Div>
<Separator wide /><br/>
<Div className="vers">b0.2.1 <div className="verdate">(17.02.2020)</div><br/>
- Добавили кнопку "Кликер"<br/>
- Добавили пример, куда будет писаться баланс пользователя<br/>
- Добавили пример, куда будет писаться о правах пользователя<br/>
- Добавили вкладку "Магазин", заполнили ее, но...<br/> 
- Изменили текст на кнопках о отправке сообещния разработчику и открытия группы<br/><br/>

На данный момент ВСЕ нерабочее, так как мы только начали понимать сам код и мы сейчас работаем над самим шаблоном сервиса.<br/><br/>
</Div>
<Separator wide /><br/>
<Div className="vers">b0.2 <div className="verdate">(17.02.2020)</div><br/>
- В "О сервисе" добавили ссылки на разработчика и ссылку на сообщество.<br/>
- В "О сервисе" добавили кнопку перехода в "Правила" сервиса.<br/>
- В "О сервисе" добавили место, куда будут писаться новые обновления.<br/>
- Добавили правила... Правда... Они еще не созданы... Но вкладку сделали!<br/><br/>
</Div>
<Separator wide /><br/>
<Div className="vers">b0.1 <div className="verdate">(16.02.2020)</div><br/>
- Обновили менюшку: сделали её снизу.<br/>
- В "О сервисе" сделали информацию о сервисе.
</Div>
</Div>
<Separator wide /><br/>
<center className="vers">beta 0.2.6</center><br/>



	</Panel>
);

About.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default About;