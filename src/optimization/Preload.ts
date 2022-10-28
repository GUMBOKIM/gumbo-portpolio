type ResourceType = 'image' | 'audio';

interface ResourceInfo {
    location: string;
    type: ResourceType;
}

const CurtainSceneSrcArr: ResourceInfo[] = [
    {location: './scene/0/curtain.png', type: 'image'}
]

const StartSceneSrcArr: ResourceInfo[] = [
    {location: './scene/1/overworld.mp3', type: "audio"},
]

const HelloSceneSrcArr: ResourceInfo[] = [
    {location: './scene/2/coin.mp3', type: "audio"},
    {location: './scene/2/jump.mp3', type: "audio"},
    {location: './scene/2/groundTile.png', type: "image"},
    {location: './scene/2/cloud.png', type: "image"},
    {location: './scene/2/block.png', type: "image"},
    {location: './scene/2/mario.png', type: "image"},
]

const preload = (srcArrArr: ResourceInfo[][]) => {

    const load = (resource: ResourceInfo) => {
        return new Promise((resolve) => {
            if (resource.type === "image") {
                const img = new Image();
                img.onload = () => {
                    resolve(true)
                };
                img.src = resource.location;
            } else if (resource.type === "audio") {
                const audio = new Audio();
                audio.preload = "auto";
                audio.oncanplaythrough = () => {
                    resolve(true);
                }
                audio.src = resource.location;

            }
        })
    }

    const parallel = (srcArr: ResourceInfo[]) => {
        return Promise.all(srcArr.map(src => load(src)));
    }

    const sequential = async (srcArrArr: ResourceInfo[][]) => {
        for await (const srcArr of srcArrArr) {
            await parallel(srcArr);
        }
    }
    sequential(srcArrArr);
}

const Preload = () => preload([
        CurtainSceneSrcArr,
        StartSceneSrcArr,
        HelloSceneSrcArr
    ]
);


export default Preload;