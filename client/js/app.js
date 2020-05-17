import { tsParticles } from "tsparticles";

import fetchPatch from "./patch/fetch";
import generateSVG from "./generateSVG";
import presets from "./presets/polygonMask";
import setNumParticles from "./setNumParticles";

const text = 'unlikely';
setNumParticles(presets, text);

window.fetch = fetchPatch(generateSVG(text));

tsParticles.load('tsparticles', presets)
    .then((container) => {
        console.log('tsParticles config loaded.');
    });