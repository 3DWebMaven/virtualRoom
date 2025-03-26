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

export const indicatorProps = [
    {
        name: "1",
        rotation: [0, 2.5, 0],
        position: [-38, 3, 35]
    },
]