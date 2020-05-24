import { Answer, Answers } from "./interfaces/Answers";
import { ParticlesPerLetter } from "./interfaces/ParticlesPerLetter";

const defaultParticlesPerLetter: ParticlesPerLetter = {mobile: 30, nonMobile: 45};

/**
 * Takes an array of answers and returns a random one.
 *
 * @param answers
 */
function randomAnswer(answers: Answer[]): Answer {
    return answers[Math.floor(Math.random() * answers.length)];
}

const answers: Answers = {
    yes: [
        {
            particlesPerLetter: defaultParticlesPerLetter,
            text: "absolutely!"
        }
    ],
    no: [
        {
            particlesPerLetter: defaultParticlesPerLetter,
            text: "hell no!"
        },
        {
            particlesPerLetter: defaultParticlesPerLetter,
            text: "improbable"
        }
    ],
    maybe: [
        {
            particlesPerLetter: defaultParticlesPerLetter,
            text: "uncertain"
        }
    ]
}

export default function(): {answer: Answer, colors: { background: string, particles: string }} {
    const random = Math.random();
    if(random <= 0.33) {
        return {
            answer: randomAnswer(answers.yes),
            colors: {
                background: "#FFC0CB",
                particles: "#000000"
            }
        }
    } else if (random > 0.33 && random <= 0.67) {
        return {
            answer: randomAnswer(answers.maybe),
            colors: {
                background: "#A9A9B0",
                particles: "#000000"
            }
        };
    } else {
        return {
            answer: randomAnswer(answers.no),
            colors: {
                background: "#000000",
                particles: "#ffffff"
            }
        };
    }
}