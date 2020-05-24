import { svgAttributes, svgOptions, TextToSVG } from "./interfaces/TextToSVG";

// @ts-ignore
import ttsvg from 'text-to-svg';

const textToSVGPromise: Promise<TextToSVG> = new Promise((resolve, reject) => {
    ttsvg.load('../static/font/ipag.ttf', (error: Error, textToSVG: TextToSVG) => {
        if(error) {
            reject(error);
        } else {
            resolve(textToSVG)
        }
    });
});

const fontSize: number = Math.round(window.innerWidth / 3);

/**
 * This function generates and returns an SVG XML string for the specified
 * text string.
 *
 * @param text
 */
export default function(text: string = 'unlikely'): Promise<{width: number, xml: string}> {
    const attributes: svgAttributes = {fill: 'none', stroke: 'black'};
    const options: svgOptions = {x: 0, y: 0, fontSize, anchor: 'top', attributes: attributes};
    return textToSVGPromise
        .then((textToSVG) => {
            const { width } = textToSVG.getMetrics(text, options);
            return {
                width,
                xml: textToSVG.getSVG(text, options)
            };
        });
}