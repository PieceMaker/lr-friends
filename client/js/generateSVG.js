const TextToSVG = require('text-to-svg');

const textToSVGPromise = new Promise((resolve, reject) => {
    TextToSVG.load('../static/font/ipag.ttf', (error, textToSVG) => {
        if(error) {
            reject(error);
        } else {
            resolve(textToSVG)
        }
    });
});

const fontSize = Math.round(window.innerWidth / 3);

/**
 * This function generates and returns an SVG XML string for the specified
 * text string.
 *
 * @param {string} text
 * @returns {Promise<{width: number, xml: string}>}
 */
module.exports = function(text = 'unlikely') {
    const attributes = {fill: 'none', stroke: 'black'};
    const options = {x: 0, y: 0, fontSize, anchor: 'top', attributes: attributes};
    return textToSVGPromise
        .then((textToSVG) => {
            const { width } = textToSVG.getMetrics(text, options);
            return {
                width,
                xml: textToSVG.getSVG(text, options)
            };
        });
}