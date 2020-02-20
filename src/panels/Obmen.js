import React from 'react';
//import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import { Group, Tabs, HorizontalScroll, TabsItem, Header, Cell, Avatar, Separator } from '@vkontakte/vkui';

const osName = platform();

const Obmen = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Обмен
		</PanelHeader>
		<Group title="Обмен">
		
		<Tabs>
              <HorizontalScroll>
                <TabsItem
                  onClick={props.go}
                  selected={false}
				  data-to="shop"
                >
                  Магазин
                </TabsItem>
                <TabsItem
                  selected={true}
                >
                  Обмен
                </TabsItem>
              </HorizontalScroll>
            </Tabs>
			<Separator wide />	
			<Group header={<Header mode="secondary">Обмен на LeetCoins</Header>}>
        <Cell
          size="l"
          description="1 VK Point = 10 LeetCoins"
          before={<Avatar src="https://sun9-70.userapi.com/c204624/v204624278/73ec5/Xe5OCoidauU.jpg"/>}
        >
          VK Point в LeetCoins
        </Cell>
		
      </Group>
	  </Group>
	</Panel>
);


export default Obmen;
