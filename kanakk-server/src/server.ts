import app from './app';

const PORT = 3000;

app.listen(PORT, () => {
    console.info(`Hey AK! I am listening for your commands, ping me at ${PORT}!`);
});