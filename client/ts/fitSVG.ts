import { Preset } from "./interfaces/Preset";

/**
 * Rounds the given number to two decimal places.
 *
 * @param {number} number
 * @return {number}
 */
function twoDecimalRound(number: number): number {
    return Math.round(number * 100) / 100;
}

/**
 * Take the svg object and make sure the width falls within the screen. If not, calculate a scale
 * factor that will be used to shrink the svg inside the screen. This scale factor will be applied
 * to the passed-in `presets`.
 *
 * May mutate `presets`.
 *
 * @param svg
 * @param presets
 * @returns {void}
 */
export default function(svg: {width: number, xml: string}, presets: Preset): void {
    if(svg.width > window.innerWidth) {
        const maxWidth = 0.9 * window.innerWidth;
        presets.polygon.scale = twoDecimalRound(maxWidth / svg.width);
    }
}