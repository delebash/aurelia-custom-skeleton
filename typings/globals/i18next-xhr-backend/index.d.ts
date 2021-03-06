// Generated by typings
// Source: node_modules/i18next-xhr-backend/typings/i18next-xhr-backend.d.ts
declare module 'i18next-xhr-backend' {

    interface Interpolator {
        interpolate: () => string
    }
    interface Services {
        interpolator: Interpolator
    }

    export default class Backend {
        type: 'backend';
        services: Services;
        options: {
            loadPath: string | Function,
            addPath:  string,
            allowMultiLoading: boolean,
            parse: () => {},
            crossDomain: boolean,
            ajax: () => void
        };
        constructor(services: Services, options?: {});
        init(services: Services, options?: {}): void;
        readMulti(languages: any[], namespaces: any[], callback: () => void): void;
        read(language: {}, namespace: {}, callback: () => void): void;
        loadUrl(url: string, callback: () => void): void;
        create(languages: any[], namespace: string, key: string, fallbackValue: string): void;
    }
}
