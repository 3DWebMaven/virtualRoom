export const slides = (selectedID) => {

    let slide = []
    const imageCount = 17;

    for (let i = 1; i <= imageCount; i++) {
        slide.push({
            src: "../images/" + i + ".webp"
        })
    }
    slide = [slide[selectedID - 1], ...slide.filter(item => item !== selectedID)];
    return slide;
}

export const INITIATOR_CONFIGS = [
    {
        name: "1",
        rotation: [0, 2.5, 0],
        position: [-41, 3, 35]
    },
    {
        name: "2",
        rotation: [0, Math.PI, 0],
        position: [-85.5, 6, 42]
    },
    {
        name: "3",
        rotation: [0, Math.PI, 0],
        position: [-96.5, 6, 42]
    }
]