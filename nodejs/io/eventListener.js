const events = require('events');

const eventEmitter = events.EventEmitter;

const event = new eventEmitter()

event.on('mahmut', (data) => {
    console.log(data)
});

event.emit('mahmut', 'bu bir parametre');
