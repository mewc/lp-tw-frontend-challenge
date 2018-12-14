import React, { Component } from 'react';
//https://ant.design/components/list/
import { List } from 'antd';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

class App extends Component {
    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="https://github.com/mewc">{item.title}</a>}
                            description={'some desc'}
                        />
                    </List.Item>
                )}
            />
        );
    }
}

export default App;
