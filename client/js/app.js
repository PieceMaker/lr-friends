import { tsParticles } from "tsparticles";

import fetchPatch from "./patch/fetch";
import fitSVG from "./fitSVG";
import generateSVG from "./generateSVG";
import presets from "./presets/polygonMask";
import setNumParticles from "./setNumParticles";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const text = 'improbable';
setNumParticles(presets, text, isMobile);
return generateSVG(text)
    .then((svg) => {
        window.fetch = fetchPatch(svg.xml);
        fitSVG(svg, presets);

        tsParticles.load('tsparticles', presets)
            .then((container) => {
                console.log('tsParticles config loaded.');
            });
    });