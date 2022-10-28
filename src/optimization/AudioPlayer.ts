type SoundKind = 'coin' | 'jump' | 'overworld';
const SoundInfo: {
    [key in SoundKind]: {
        src: string;
        bgm: boolean;
    }
} = {
    'coin': {
        src: './scene/2/coin.mp3',
        bgm: false
    },
    'jump': {
        src: './scene/2/jump.mp3',
        bgm: false
    },
    'overworld': {
        src: './scene/1/overworld.mp3',
        bgm: true
    },
}

class Player {
    audioRepository = new Map<SoundKind, HTMLAudioElement>();

    constructor() {
        Object.keys(SoundInfo).forEach((key) => {
            const {src, bgm} = SoundInfo[<"coin" | "jump" | "overworld">key];
            const audio = new Audio(src);
            if (bgm) {
                audio.addEventListener('ended', () => {
                    audio.currentTime = 0;
                    audio.play();
                });
            }
            audio.volume = 0.3;
            this.audioRepository.set(<"coin" | "jump" | "overworld">key, audio);
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

const AudioPlayer = new Player();

export default AudioPlayer;