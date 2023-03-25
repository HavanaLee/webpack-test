declare module 'process' {
    global {
        namespace NODEJS {
            export interface ProcessEnv {
                NODE_ENV: 'development' | 'production'
            }
        }
    }
}

declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
