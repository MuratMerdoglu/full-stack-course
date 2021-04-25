

app.get('/', (req, res) => {
    res.send('root api -- get')
});

app.post('/', (req, res) => {
    res.send('root api -- post')
});