const server = require('./src/server');

const PORT = 8003;

server.listen(PORT, () => {
    console.log(`Planets Service running on port ${PORT}`); // eslint-disable-line no-console
})