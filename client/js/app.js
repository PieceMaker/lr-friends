import { tsParticles } from "tsparticles";

import fetchPatch from "./patch/fetch";
import presets from "./presets/polygonMask";

window.fetch = fetchPatch(presets.polygon.svg);

tsParticles.load('tsparticles', presets)
    .then((container) => {
        console.log('tsParticles config loaded.');
    });