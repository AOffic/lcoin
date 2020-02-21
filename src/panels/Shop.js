import React from 'react';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { Group, Cell, Avatar, Button, Header, Separator, Tabs, TabsItem, HorizontalScroll } from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';



//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//  host     : 'localhost',
//  user     : 'me',
//  password : 'secret',
//  database : 'my_db'
//});
 
//connection.connect();


 //connection.query("UPDATE posts SET title = :title",  {  title:  "Hello MySQL" } );


import './Home.css';

const osName = platform();

const Shop = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Магазин
		</PanelHeader>
		
		<Group title="Магазин" className="font">
		
		
		<Tabs>
              <HorizontalScroll>
                <TabsItem
                  selected={true}
                >
                  Магазин
                </TabsItem>
                <TabsItem
                  onClick={props.go}
                  selected={false}
				  data-to="obmen"
                >
                  Обмен
                </TabsItem>
              </HorizontalScroll>
            </Tabs>
			<Separator wide />	
	<Group header={<Header mode="secondary">Клики</Header>}>
        <Cell
          size="l"
          description="+0.005 за 1 клик"
          before={<Avatar src="https://sun9-70.userapi.com/c204624/v204624278/73ec5/Xe5OCoidauU.jpg"/>}
          bottomContent={<Button>Приобрести</Button>}
        >
          Мышь за 5 рублей
        </Cell>
<Separator wide />	
		<Cell
          size="l"
          description="+0.05 за 1 клик"
          before={<Avatar src="https://sun9-26.userapi.com/c204624/v204624278/73ed9/viTlCU6GuDs.jpg"/>}
          bottomContent={<Button>Приобрести</Button>}
        >
          Мышь за 50 рублей
        </Cell>
<Separator wide />	
		<Cell
          size="l"
          description="+0.3 за 1 клик"
          before={<Avatar src="https://sun9-61.userapi.com/c204624/v204624278/73ef3/GYhnVD5fcE0.jpg"/>}
          bottomContent={<Button>Приобрести</Button>}
        >
          Мышь за 100 рублей
        </Cell>
<Separator wide />	
		<Cell
          size="l"
          description="+0.5 за 1 клик"
          before={<Avatar src="https://sun9-7.userapi.com/c204624/v204624278/73efc/BnOsTgMarjo.jpg"/>}
          bottomContent={<Button>Приобрести</Button>}
        >
          Мышь за 200 рублей
        </Cell>
<Separator wide />	
		<Cell
          size="l"
          description="+1 за 1 клик"
          before={<Avatar src="https://sun9-11.userapi.com/c204624/v204624278/73f05/E9JPMQ-BBHQ.jpg"/>}
          bottomContent={<Button>Приобрести</Button>}
        >
          Мышь за 500 рублей
        </Cell>	
		
      </Group>
</Group>
	</Panel>
);



export default Shop;
