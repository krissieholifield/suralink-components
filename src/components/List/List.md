List Example:

Lists with no data will render an empty icon

```js
<List data={[]}/>
```


Lists with data will render as shown below
```js
<List data={[
    {
        description: 'Hello',
        extra: 'South Jordan, UT',
        actions: ['Send']
    },
    {
        description: 'World',
        extra: 'Salt Lake City, UT',
        actions: ['Edit', 'Delete']
    },
    {
        description: '',
        extra: 'Park City, UT',
        actions: ['View']
    }
]} />
```