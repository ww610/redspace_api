const app = require('./app');

const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`);
});
