type SoundKind = 'overworld' | 'coin' | 'jump';
const SoundInfo: {
    [key in SoundKind]: {
        src: string;
        bgm: boolean;
    }
} = {
    'overworld': {
        src: './scene/1/overworld.mp3',
        bgm: true
    },
    'coin': {
        src: './scene/2/coin.mp3',
        bgm: false
    },
    'jump': {
        src: './scene/2/jump.mp3',
        bgm: false
    }
}

class Player {
    audioRepository = new Map<SoundKind, HTMLAudioElement>();

    constructor() {
        // @ts-ignore
        Object.keys(SoundInfo).forEach((kind) => this.save(kind));
    }

    play(kind: SoundKind) {
        let audio: HTMLAudioElement;
        if (this.audioRepository.has(kind)) {
            // @ts-ignore
            audio = this.audioRepository.get(kind);
        } else {
            audio = this.save(kind);
        }
        if (!(SoundInfo[kind].bgm && audio.played.length !== 0)) {
            audio.currentTime = 0;
            audio.play();
        }
    }

    stop(kind: SoundKind) {
        const audio = this.audioRepository.get(kind);
        if (audio) audio.pause();
    }

    private save(kind: SoundKind) {
        const {src, bgm} = SoundInfo[kind];
        const audio = new Audio(src);
        if (bgm) {
            audio.addEventListener('ended', () => {
                audio.currentTime = 0;
                audio.play();
            });
        }
        audio.volume = 0.3;
        this.audioRepository.set(kind, audio);
        return audio;
    }
}

const AudioPlayer = new Player();

export default AudioPlayer;