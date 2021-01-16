import Bootstrapper from "./bootstrapper";
import server from './server';

Bootstrapper.load(__dirname).then(async () => {
    try {
        await server.start();
        console.log('Server started');
    } catch (error) {
        console.error(error);
    }
});