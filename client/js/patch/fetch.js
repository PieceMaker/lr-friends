/**
 * A function that will replace the native fetch function to avoid making a URL request.
 *
 * @param {string} svg
 * @returns {function(): Promise<{text: (function(): string), ok: boolean}>}
 */
module.exports = function(svg) {
    return function() {
        const response = {
            ok: true,
            text: function () {
                return svg;
            }
        };
        return Promise.resolve(response);
    }
}