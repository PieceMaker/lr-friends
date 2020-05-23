import { tsParticles } from "tsparticles";

import fetchPatch from "./patch/fetch";
import fitSVG from "./fitSVG";
import generateSVG from "./generateSVG";
import presets from "./presets/polygonMask";
import setNumParticles from "./setNumParticles";

const text = 'highly improbable';
setNumParticles(presets, text);
return generateSVG(text)
    .then((svg) => {
        window.fetch = fetchPatch(svg.xml);
        fitSVG(svg, presets);

        tsParticles.load('tsparticles', presets)
            .then((container) => {
                console.log('tsParticles config loaded.');
            });
    });