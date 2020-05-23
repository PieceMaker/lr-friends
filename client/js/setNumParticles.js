/**
 * This function determines the number of letters in the given text and then sets
 * the tsparticles configuration to the desired number of particles based on the
 * specified `particlesPerLetter`. Note, this function mutates `presets`.
 *
 * @param {object} presets
 * @param {string} text
 * @param {boolean} isMobile
 * @param {object} [particlesPerLetter={mobile: 30, nonMobile: 40}]
 * @returns {void}
 */
module.exports = function(presets, text, isMobile, particlesPerLetter = {mobile: 30, nonMobile: 45}) {
    const numLetters = text.replace(/\s/g,'').length;
    if(isMobile) {
        presets.particles.number.value = numLetters * particlesPerLetter.mobile;
    } else {
        presets.particles.number.value = numLetters * particlesPerLetter.nonMobile;
    }
}