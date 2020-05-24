export interface Preset {
    detectRetina: boolean,
    fpsLimit: number,
    particles: {
        color: {
            value: string
        },
        lineLinked: {
            blink: boolean,
            color: string,
            consent: boolean,
            distance: number,
            enable: boolean,
            opacity: number,
            width: number
        },
        move: {
            attract: {
                enable: boolean,
                rotate: {
                    x: number,
                    y: number
                }
            },
            bounce: boolean,
            direction: string,
            enable: boolean,
            outMode: string,
            random: boolean,
            speed: number,
            straight: boolean
        },
        number: {
            density: {
                enable: boolean,
                area: number
            },
            limit: number,
            value: number // Updated later based on the display text
        },
        opacity: {
            animation: {
                enable: boolean,
                minimumValue: number,
                speed: number,
                sync: boolean
            },
            random: boolean,
            value: number
        },
        size: {
            animation: {
                enable: boolean,
                minimumValue: number,
                speed: number,
                sync: boolean
            },
            random: boolean,
            value: number
        }
    },
    polygon: {
        draw: {
            enable: boolean,
            lineColor: string,
            lineWidth: number
        },
        enable: boolean,
        move: {
            radius: number
        },
        position: {
            x: number,
            y: number
        },
        inlineArrangement: string,
        scale: number,
        type: string,
        url: string
    },
    background: {
        color: string,
        image: string,
        size: string
    }
}