import server from "./server";

export default class Bootstrapper {
    public static async load(workingDir) {
        try {
            await server.initialize();
        } catch (error) {
            console.error(error);
        }
    }
}
