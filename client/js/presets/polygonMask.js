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
        url: "xml",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2560" height="640"><path fill="none" stroke="black" d="M46.88 437.81L46.88 226.56L94.38 226.56L94.38 432.81Q94.38 498.75 146.56 498.75L146.56 498.75Q180.31 498.75 205.94 473.75L205.94 473.75Q229.06 451.56 229.06 415.31L229.06 415.31L229.06 226.56L276.56 226.56L276.56 530.63L241.25 530.63L232.81 494.69Q190.94 543.44 135.94 543.44L135.94 543.44Q88.13 543.44 64.06 506.88L64.06 506.88Q46.88 480 46.88 437.81L46.88 437.81ZM366.88 226.56L404.69 226.56L411.88 265.63Q460 214.38 506.88 214.38L506.88 214.38Q559.06 214.38 583.13 260.31L583.13 260.31Q596.56 286.25 596.56 323.13L596.56 323.13L596.56 530.63L549.06 530.63L549.06 337.19Q549.06 259.69 499.38 259.69L499.38 259.69Q465.63 259.69 440.63 284.06L440.63 284.06Q414.38 310.31 414.38 344.38L414.38 344.38L414.38 530.63L366.88 530.63L366.88 226.56ZM825 82.50L825 460.63Q825 488.13 851.25 488.13L851.25 488.13Q872.81 488.13 898.44 483.13L898.44 483.13L898.44 530.94Q860.63 536.25 842.81 536.25L842.81 536.25Q775 536.25 775 469.69L775 469.69L775 82.50L825 82.50ZM1091.88 140L1091.88 82.50L1148.13 82.50L1148.13 140L1091.88 140ZM1095 530.63L1095 226.56L1145 226.56L1145 530.63L1095 530.63ZM1330.63 530.63L1330.63 82.50L1378.13 82.50L1378.13 357.19L1490 226.56L1549.69 226.56L1453.13 334.69L1574.69 530.63L1515 530.63L1423.44 368.44L1378.13 417.19L1378.13 530.63L1330.63 530.63ZM1831.56 436.25L1881.56 436.25Q1853.75 543.13 1760.63 543.13L1760.63 543.13Q1702.81 543.13 1669.06 495L1669.06 495Q1638.44 450.94 1638.44 378.75L1638.44 378.75Q1638.44 309.69 1667.19 265.63L1667.19 265.63Q1700.94 214.38 1760 214.38L1760 214.38Q1875.31 214.38 1882.81 388.44L1882.81 388.44L1686.56 388.44Q1690.31 500.31 1761.25 500.31L1761.25 500.31Q1817.50 500.31 1831.56 436.25L1831.56 436.25ZM1688.44 347.50L1831.56 347.50Q1821.25 257.19 1760 257.19L1760 257.19Q1700.94 257.19 1688.44 347.50L1688.44 347.50ZM2105 82.50L2105 460.63Q2105 488.13 2131.25 488.13L2131.25 488.13Q2152.81 488.13 2178.44 483.13L2178.44 483.13L2178.44 530.94Q2140.63 536.25 2122.81 536.25L2122.81 536.25Q2055 536.25 2055 469.69L2055 469.69L2055 82.50L2105 82.50ZM2385.31 503.75L2277.81 226.56L2332.81 226.56L2409.06 442.81L2476.25 226.56L2531.88 226.56L2406.25 577.81Q2395.94 608.44 2370.63 618.13L2370.63 618.13Q2358.75 622.81 2295 622.81L2295 622.81L2295 576.56L2322.50 576.56Q2332.19 576.56 2336.56 576.56L2336.56 576.56Q2358.13 576.56 2364.69 559.38L2364.69 559.38L2385.31 503.75Z"/></svg>'
    },
    background: {
        color: "#000000",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    }
}