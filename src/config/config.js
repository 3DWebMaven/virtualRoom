export const slides = (selectedID) => {

    let slide = []
    const imageCount = 18;
    if (selectedID == 1) {
        return slide = [
            {
                src: "../images/1.webp"
            },
            {
                type: "video",
                width: 1280,
                height: 720,
                autoPlay : true,
                loop:true,
                sources: [
                  {
                    src: "/intro.webm",
                    type: "video/webm",
                  },
                ],
              },
        ]
    } else {
        for (let i = 1; i <= imageCount; i++) {
            slide.push({
                src: "../images/" + i + ".webp"
            })
        }
        console.log('slide[selectedID ]: ',selectedID, slide[selectedID ]);
        if (selectedID === -1) return slide;
        return [...slide.slice(selectedID -1 ), ...slide.slice(0, selectedID)];
    }
}
const indicatorYpos = 6;
export const INITIATOR_CONFIGS = [
    {
        name: "1",
        rotation: [0, 2.5, 0],
        position: [-41, indicatorYpos, 35]
    },
    {
        name: "2",
        rotation: [0, Math.PI, 0],
        position: [-85.5, indicatorYpos, 42]
    },
    {
        name: "3",
        rotation: [0, Math.PI, 0],
        position: [-96.6, indicatorYpos, 42]
    },
    {
        name: "4",
        rotation: [0, Math.PI, 0],
        position: [-107.7, indicatorYpos, 42]
    },
    {
        name: "5",
        rotation: [0, Math.PI, 0],
        position: [-118.9, indicatorYpos, 42]
    },
    {
        name: "6",
        rotation: [0, Math.PI, 0],
        position: [-130, indicatorYpos, 42]
    },
    {
        name: "7",
        rotation: [0, Math.PI / 2, 0],
        position: [-149.5, indicatorYpos, 26]
    },
    {
        name: "8",
        rotation: [0, Math.PI / 2, 0],
        position: [-149.5, indicatorYpos, 13.5]
    },
    {
        name: "9",
        rotation: [0, Math.PI / 2, 0],
        position: [-149.5, indicatorYpos, 1.5]
    },
    {
        name: "10",
        rotation: [0, Math.PI / 2, 0],
        position: [-149.5, indicatorYpos, -10]
    },
    {
        name: "11",
        rotation: [0, Math.PI / 2, 0],
        position: [-149.5, indicatorYpos, -21]
    },
    {
        name: "12",
        rotation: [0, Math.PI, 0],
        position: [-129.5, indicatorYpos, -40.5]
    },
    {
        name: "13",
        rotation: [0, Math.PI, 0],
        position: [-118.5, indicatorYpos, -40.5]
    },
    {
        name: "14",
        rotation: [0, Math.PI, 0],
        position: [-107.5, indicatorYpos, -40.5]
    },
    {
        name: "15",
        rotation: [0, Math.PI, 0],
        position: [-96.5, indicatorYpos, -40.5]
    },
    {
        name: "16",
        rotation: [0, Math.PI, 0],
        position: [-85.5, indicatorYpos, -40.5]
    },
    {
        name: "17",
        rotation: [0, 2.5, 0],
        position: [-66.5, indicatorYpos - 2, -39]
    },
    {
        name: "18",
        rotation: [0, Math.PI/2, 0],
        position: [-57.3, indicatorYpos + 3, 39]
    }
]