import { ParticlesPerLetter } from "./ParticlesPerLetter";

export interface Answer {
    particlesPerLetter: ParticlesPerLetter,
    text: string
}

export interface Answers {
    yes: Answer[],
    no: Answer[],
    maybe: Answer[]
}