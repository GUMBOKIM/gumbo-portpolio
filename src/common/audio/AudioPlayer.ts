type SoundKind = 'coin' | 'jump' | 'overworld' | 'ending';
const SoundInfo: {
    [key in SoundKind]: {
        src: string;
        bgm: boolean;
    }
} = {
    'coin': {
        src: 'mario/sound/coin.mp3',
        bgm: false
    },
    'jump': {
        src: 'mario/sound/jump.mp3',
        bgm: false
    },
    'overworld': {
        src: 'mario/sound/overworld.mp3',
        bgm: true
    },
    'ending': {
        src: 'mario/sound/ending.mp3',
        bgm: true
    }
}

class AudioPlayer {
    audioRepository = new Map<SoundKind, HTMLAudioElement>();

    constructor() {
        Object.keys(SoundInfo).forEach((key) => {
            const {src, bgm} = SoundInfo[<"coin" | "jump" | "overworld" | "ending">key];
            const audio = new Audio(src);
            if (bgm) {
                audio.addEventListener('ended', () => {
                    audio.currentTime = 0;
                    audio.play();
                });
            }
            audio.volume = 0.3;
            this.audioRepository.set(<"coin" | "jump" | "overworld" | "ending">key, audio);
        })
    }

    play(kind: SoundKind) {
        const audio = this.audioRepository.get(kind);
        if (audio) {
            if (SoundInfo[kind].bgm && audio.played.length !== 0) {
                return;
            } else {
                audio.currentTime = 0;
                audio.play();
            }
        }
    }

    stop(kind: SoundKind) {
        const audio = this.audioRepository.get(kind);
        if (audio) audio.pause();
    }
}

const audioPlayer = new AudioPlayer();

export default audioPlayer;