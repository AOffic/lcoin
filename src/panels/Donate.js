import React from 'react';
//import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import {Div,Group,Header,Button,Link} from '@vkontakte/vkui';
import connect from '@vkontakte/vk-connect';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';

import './Home.css';

const osName = platform();

const Donate = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="about">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Донат
		</PanelHeader>
        <Group header={<Header mode="secondary">Донат</Header>}>
        <Div className="font" style={{ paddingTop: 25, paddingBottom: 5, color: 'gray' }}>
        Привет!<br/>
        Все мы знаем, что разработчик хочет что-то получать от создания своего проекта или своей работы.<br/>
        Надеюсь наш сервис, наш коин, наша валюта Вам понравилась. Мы никого не принуждаем, но подкиньте копеечку нам.<br/>
        От вашей активности зависят новые обновления!<br/><br/>
        <Button style={{ marginLeft: 8 }} before={<Icon24MoneyTransfer width={20} height={20} />} onClick={() => {connect.send("VKWebAppOpenPayForm", {"app_id": 7306875, "action": "transfer-to-user", "params": {"user_id" : 230558063, "description" : "Пожертвование проекту LeetCoin."}})}}>Пожертвовать через VK Pay</Button> <br/><br/>
        <Link target="_blank" href="https://qiwi.me/leetcoin"><Button style={{ marginLeft: 8 }} before={<Icon24MoneyCircle width={20} height={20} />}>Пожертвовать через QIWI/Карту</Button></Link>
        </Div>
      </Group>
	</Panel>
);

export default Donate;
