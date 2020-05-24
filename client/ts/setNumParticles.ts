import {ParticlesPerLetter } from "./interfaces/ParticlesPerLetter";
import { Preset } from "./interfaces/Preset";

/**
 * This function determines the number of letters in the given text and then sets
 * the tsparticles configuration to the desired number of particles based on the
 * specified `particlesPerLetter`. Note, this function mutates `presets`.
 *
 * @param presets
 * @param text
 * @param isMobile
 * @param [particlesPerLetter={mobile: 30, nonMobile: 40}]
 */
export default function(presets: Preset, text: string, isMobile: boolean,
                        particlesPerLetter: ParticlesPerLetter = {mobile: 30, nonMobile: 45}): void {
    const numLetters: number = text.replace(/\s/g,'').length;
    if(isMobile) {
        presets.particles.number.value = numLetters * particlesPerLetter.mobile;
    } else {
        presets.particles.number.value = numLetters * particlesPerLetter.nonMobile;
    }
}