import { tsParticles } from "tsparticles";
import presets from "./presets/polygonMask";

window.fetch = function() {
    console.log('Fetch intercepted.');
    const response = {
        ok: true,
        text: function() { return presets.polygon.svg }
    };
    return Promise.resolve(response);
}

tsParticles.load('tsparticles', presets)
    .then((container) => {
        console.log('tsParticles config loaded.');
    });