type SoundKind = 'coin' | 'jump' | 'overworld' | 'ending';
const SoundInfo: {
    [key in SoundKind]: {
        src: string;
        autoReplay: boolean;
    }
} = {
    'coin': {
        src: 'mario/sound/coin.mp3',
        autoReplay: false
    },
    'jump': {
        src: 'mario/sound/jump.mp3',
        autoReplay: false
    },
    'overworld': {
        src: 'mario/sound/overworld.mp3',
        autoReplay: true
    },
    'ending': {
        src: 'mario/sound/ending.mp3',
        autoReplay: true
    }
}

class AudioPlayer {
    audioRepository = new Map<SoundKind, HTMLAudioElement>();

    constructor() {
        Object.keys(SoundInfo).forEach((key) => {
            // @ts-ignore
            const {src, autoReplay} = SoundInfo[key];
            const audio = new Audio(src);
            if (autoReplay) {
                console.log(key)
                audio.addEventListener('ended', () => {
                    audio.currentTime = 0;
                    audio.play();
                });
            }
            audio.volume = 0.3;
            // @ts-ignore
            this.audioRepository.set(key, audio);
        })
    }

    play(kind: SoundKind) {
        let audio = this.audioRepository.get(kind);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }
}

const audioPlayer = new AudioPlayer();

export default audioPlayer;