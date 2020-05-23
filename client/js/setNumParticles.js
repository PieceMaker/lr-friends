/**
 * This function determines the number of letters in the given text and then sets
 * the tsparticles configuration to the desired number of particles based on the
 * specified `particlesPerLetter`. Note, this function mutates `presets`.
 *
 * @param {object} presets
 * @param {string} text
 * @param {number} [particlesPerLetter=40]
 * @returns {void}
 */
module.exports = function(presets, text, particlesPerLetter = 25) {
    const numLetters = text.replace(/\s/g,'').length;
    presets.particles.number.value = numLetters * particlesPerLetter;
}