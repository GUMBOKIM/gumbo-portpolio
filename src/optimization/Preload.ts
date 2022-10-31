type ResourceType = 'image' | 'audio';

interface ResourceInfo {
    location: string;
    type: ResourceType;
}

const CurtainSceneSrcArr: ResourceInfo[] = [
    {location: './scene/0/curtain2.png', type: 'image'}
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

const InfoSceneSrcArr: ResourceInfo[] = [
    {location: './scene/3/bubble.png', type: "image"},
    {location: './scene/3/mushroom.png', type: "image"},
    {location: './scene/3/bubble.png', type: "image"},
]

const preload = (srcArrArr: ResourceInfo[][]) => {

    const load = (resource: ResourceInfo) => {
        return new Promise((resolve) => {
            if (resource.type === "image") {
                loadImage(resource, resolve);
            } else if (resource.type === "audio") {
                loadAudio(resource, resolve);
            }
        })
    }

    const loadImage = (resource: ResourceInfo, resolve: (value: unknown) => void) => {
        const img = new Image();
        img.onload = () => {
            resolve(true)
        };
        img.src = resource.location;
    }

    const loadAudio = (resource: ResourceInfo, resolve: (value: unknown) => void) => {
        const audio = new Audio(resource.location);
        audio.oncanplaythrough = () => {
            resolve(true);
        }
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
        [...StartSceneSrcArr, ...HelloSceneSrcArr],
        InfoSceneSrcArr
    ]
);


export default Preload;