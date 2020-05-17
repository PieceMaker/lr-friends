import { tsParticles } from "tsparticles";

import fetchPatch from "./patch/fetch";
import generateSVG from "./generateSVG";
import presets from "./presets/polygonMask";

window.fetch = fetchPatch(generateSVG());

tsParticles.load('tsparticles', presets)
    .then((container) => {
        console.log('tsParticles config loaded.');
    });