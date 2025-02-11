import { InjectionToken } from "@angular/core";

export interface InjectableConfig {
    apiUrl: string;
    cache: number;
}

export const INJ_CONFIG: InjectableConfig = {
    apiUrl: "http://localhost/api",
    cache: 100
}

export const CONFIG_TOKEN = new InjectionToken<InjectableConfig>('CONFIG_TOKEN')