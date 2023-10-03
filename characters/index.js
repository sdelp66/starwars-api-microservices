const server = require('./src/server');

const PORT = 8001;

server.listen(PORT, () => {
    console.log(`Characters Service running on port ${PORT}`); // eslint-disable-line no-console
})