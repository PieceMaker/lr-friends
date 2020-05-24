import { ParticlesPerLetter } from "./interfaces/ParticlesPerLetter";

const defaultParticlesPerLetter: ParticlesPerLetter = {mobile: 30, nonMobile: 45};

export default {
    yes: [
        {
            particlesPerLetter: defaultParticlesPerLetter,
            response: "absolutely!"
        }
    ],
    no: [
        {
            particlesPerLetter: defaultParticlesPerLetter,
            response: "hell no!"
        },
        {
            particlesPerLetter: defaultParticlesPerLetter,
            response: "improbable"
        }
    ],
    maybe: [
        {
            particlesPerLetter: defaultParticlesPerLetter,
            response: "uncertain"
        }
    ]
}