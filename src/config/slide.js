export const slides = (selectedID) => {

    let slide = []
    const imageCount = 17;

    for (let i = 1; i <= imageCount; i++) {
        slide.push({
            src: "../images/" + i + ".webp"
        })
    }
    slide = [slide[selectedID - 1], ...slide.filter(item => item !== selectedID)];
    console.log("slide", selectedID)
    return slide;
}