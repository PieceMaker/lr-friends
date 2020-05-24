import { tsParticles } from "tsparticles";

import getAnswer from "./getAnswer";
import fetchPatch from "./patch/fetch";
import fitSVG from "./fitSVG";
import generateSVG from "./generateSVG";
import presets from "./presets/polygonMask";
import setNumParticles from "./setNumParticles";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// const text = 'improbable';
const answer = getAnswer();
setNumParticles(presets, answer.text, isMobile);
generateSVG(answer.text)
    .then((svg) => {
        // @ts-ignore
        window.fetch = fetchPatch(svg.xml);
        fitSVG(svg, presets);

        // @ts-ignore
        tsParticles.load('tsparticles', presets)
            .then((container) => {
                console.log('tsParticles config loaded.');
            });
    });