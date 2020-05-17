export default {
    detectRetina: false,
    fpsLimit: 30,
    particles: {
        color: {
            value: "#ffffff"
        },
        lineLinked: {
            blink: false,
            color: "#ffffff",
            consent: false,
            distance: 30,
            enable: true,
            opacity: 0.4,
            width: 1
        },
        move: {
            attract: {
                enable: false,
                rotate: {
                    x: 600,
                    y: 1200
                }
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.35,
            straight: false
        },
        number: {
            density: {
                enable: false,
                area: 2000
            },
            limit: 0,
            value: 300
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 2,
                sync: false
            },
            random: false,
            value: 0.4
        },
        size: {
            animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false
            },
            random: true,
            value: 1
        }
    },
    polygon: {
        draw: {
            enable: false,
            lineColor: "rgba(255,255,255,0.2)",
            lineWidth: 0.5
        },
        enable: true,
        move: {
            radius: 3
        },
        position: {
            x: 50,
            y: 50
        },
        inlineArrangement: "equidistant",
        scale: 0.5,
        type: "inline",
        url: "xml"
    },
    background: {
        color: "#000000",
        image: "",
        size: "cover"
    }
}