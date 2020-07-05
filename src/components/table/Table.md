```js
<Table
    bordered
    columns={[
        {
            title: 'Deletion Date',
            dataIndex: 'deletion_date'
        },
        {
            title: 'Client Name',
            dataIndex: 'client_name'
        }
    ]}
    dataSource={[
        {
            client_name: `Ben and Jerry's`,
            deletion_date: '10/29/2019'
        }
    ]}
/>
```