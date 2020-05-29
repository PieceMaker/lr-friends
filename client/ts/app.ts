import { tsParticles } from "tsparticles";

import getAnswer from "./getAnswer";
import fetchPatch from "./patch/fetch";
import fitSVG from "./fitSVG";
import generateSVG from "./generateSVG";
import presets from "./presets/polygonMask";
import setNumParticles from "./setNumParticles";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const particlesID = 'tsparticles';
const particleDiv = document.createElement('div');
particleDiv.setAttribute('id', particlesID);

const renderParticles = function(svg: {width: number, xml: string}) {
    const existingParticles = document.getElementById(particlesID);
    if(existingParticles) {
        // @ts-ignore
        existingParticles.parentElement.removeChild(existingParticles);
    }
    document.body.append(particleDiv);

    fitSVG(svg, presets);
    // @ts-ignore
    tsParticles.load(particlesID, presets)
        .then((container) => {
            console.log('tsParticles config loaded.');
        });
}

const { answer, colors } = getAnswer();
presets.background.color = colors.background;
presets.particles.color.value = colors.particles;
presets.particles.lineLinked.color = colors.particles;
setNumParticles(presets, answer.text, isMobile);
generateSVG(answer.text)
    .then((svg) => {
        // @ts-ignore
        window.fetch = fetchPatch(svg.xml);
        renderParticles(svg);
    });