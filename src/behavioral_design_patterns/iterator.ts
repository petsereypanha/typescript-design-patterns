export class Song {
    constructor(
        public title: string,
        public artist: string,
        public duration: number,
    ) {}

    toString(): string {
        return `${this.title} by ${this.artist} (${this.duration} seconds)`
    }
}
export interface Iterator<T> {
    hasNext(): boolean
    next(): T | null
}
export interface Playlist {
    createIterator(): Iterator<Song>
}

export class PlaylistIterator implements Iterator<Song> {
    private currentIndex: number = 0
    constructor(private playlist: Song[]) {}
    hasNext(): boolean {
        return this.currentIndex < this.playlist.length
    }
    next(): Song | null {
        if (this.hasNext()) {
            return this.playlist[this.currentIndex++]
        }
        return null
    }
}
export class MusicPlaylist implements Playlist {
    private songs: Song[] = []
    addSong(song: Song): void {
        this.songs.push(song)
    }
    createIterator(): Iterator<Song> {
        return new PlaylistIterator(this.songs)
    }
}
const myPlaylist = new MusicPlaylist()
myPlaylist.addSong(new Song("Bohemian Rhapsody", "Queen", 354))
myPlaylist.addSong(new Song("Stairway to Heaven", "Led Zeppelin", 482))
myPlaylist.addSong(new Song("Imagine", "John Lennon", 183))
const iterator = myPlaylist.createIterator()
console.log("My Playlist:")
while (iterator.hasNext()) {
    const song = iterator.next()
    if (song) {
        console.log(song.toString())
    }
}

class AsyncSongIterator {
    private currentIndex: number = 0
    private songs: string[] = []

    constructor() {}

    // Async method to simulate fetching songs from an API
    private async fetchSongs(): Promise<string[]> {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return ["Song 1", "Song 2", "Song 3"]
    }

    async next(): Promise<{ value: string | null; done: boolean }> {
        if (this.currentIndex === 0) {
            this.songs = await this.fetchSongs()
        }

        if (this.currentIndex < this.songs.length) {
            return { value: this.songs[this.currentIndex++], done: false }
        } else {
            return { value: null, done: true }
        }
    }

    [Symbol.asyncIterator]() {
        return this
    }
}

// Example usage of the async iterator
;(async () => {
    const songIterator = new AsyncSongIterator()

    for await (const song of songIterator) {
        console.log(song) // Logs each song after a delay
    }
})()