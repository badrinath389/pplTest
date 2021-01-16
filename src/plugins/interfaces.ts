import * as Hapi from "@hapi/hapi";

export interface IPlugin {
    register(server: Hapi.Server, basePath, title);
    info(): IPluginInfo;
}

export interface IPluginInfo {
    name: string;
    version: string;
}