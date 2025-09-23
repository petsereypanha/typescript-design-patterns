import { Song, MusicPlaylist, PlaylistIterator } from './iterator';
import { test, expect, describe, beforeEach, vi } from "vitest"

describe('MusicPlaylist Iterator', () => {
    let playlist: MusicPlaylist;
    let songs: Song[];

    beforeEach(() => {
        playlist = new MusicPlaylist();
        songs = [
            new Song("Bohemian Rhapsody", "Queen", 354),
            new Song("Stairway to Heaven", "Led Zeppelin", 482),
            new Song("Imagine", "John Lennon", 183)
        ];
        songs.forEach(song => playlist.addSong(song));
    });

    test('createIterator should return a valid iterator', () => {
        const iterator = playlist.createIterator();
        expect(iterator).toBeInstanceOf(PlaylistIterator);
    });

    test('iterator should traverse all songs in the correct order', () => {
        const iterator = playlist.createIterator();
        songs.forEach(song => {
            expect(iterator.hasNext()).toBe(true);
            expect(iterator.next()).toEqual(song);
        });
        expect(iterator.hasNext()).toBe(false);
    });

    test('next() should return null when reaching the end of the playlist', () => {
        const iterator = playlist.createIterator();
        songs.forEach(() => iterator.next());
        expect(iterator.next()).toBeNull();
    });

    test('hasNext() should return false for an empty playlist', () => {
        const emptyPlaylist = new MusicPlaylist();
        const iterator = emptyPlaylist.createIterator();
        expect(iterator.hasNext()).toBe(false);
    });

    test('multiple iterations should produce the same results', () => {
        const iterator1 = playlist.createIterator();
        const iterator2 = playlist.createIterator();

        while (iterator1.hasNext() && iterator2.hasNext()) {
            expect(iterator1.next()).toEqual(iterator2.next());
        }

        expect(iterator1.hasNext()).toBe(false);
        expect(iterator2.hasNext()).toBe(false);
    });

    test('iterator should handle a large number of songs', () => {
        const largePlaylist = new MusicPlaylist();
        const largeSongList = Array.from({ length: 1000 }, (_, i) =>
            new Song(`Song ${i}`, `Artist ${i}`, 180)
        );
        largeSongList.forEach(song => largePlaylist.addSong(song));

        const iterator = largePlaylist.createIterator();
        let count = 0;
        while (iterator.hasNext()) {
            iterator.next();
            count++;
        }
        expect(count).toBe(1000);
    });
});