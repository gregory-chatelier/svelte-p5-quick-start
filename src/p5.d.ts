declare module 'p5' {
    export = p5;
}

declare global {
    interface Window {
        p5: typeof p5
    }
}
