// Sound utility for UI interactions
class SoundManager {
  private static instance: SoundManager;
  private audio: HTMLAudioElement;

  private constructor() {
    this.audio = new Audio();
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  public playSound(type: 'click' | 'send' | 'receive' | 'error' | 'hover') {
    const sounds = {
      // New shorter, softer click sound
      click: 'data:audio/wav;base64,UklGRh4BAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YfoAAAAAAAAgACAAQABgAIAAoADAAOAA/wD/AP8A/wDgAMAAoACAAGAAQAAgAAAA//8A4ACgAIAAYABAACAAAAAA/wDgAMAAgABgAEAAIAAAAP//AOAAoACAAGAAQAAgAAAA//8A4ACgAGAAQAAgAAAAAP8A4ACAAGAAQAAgAAAAAP8A4ACAAEAAIAAAAADgAMAAgABgAEAAIAAAAADgAKAAYABAACAAAAAAwACgAGAAQAAgAAAAAMAAgABgAEAAIAAAAACgAGAAQAAgAAAAAIAAYABAACAAAAAAgABAACAAAAAAACAAAAAAAAAA',
      send: 'data:audio/wav;base64,UklGRpIEAABXQVZFZm10...',  // ... keep existing code (send sound)
      receive: 'data:audio/wav;base64,UklGRpQGAABXQVZFZm10...',  // ... keep existing code (receive sound)
      error: 'data:audio/wav;base64,UklGRpQGAABXQVZFZm10...',  // ... keep existing code (error sound)
      // New chime sound for hover
      hover: 'data:audio/wav;base64,UklGRqYDAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YYIDAAAAAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w=='
    };

    this.audio.src = sounds[type];
    this.audio.volume = 0.2; // Adjust volume (0.0 to 1.0)
    this.audio.play().catch(e => console.log('Audio playback failed:', e));
  }
}

export const soundManager = SoundManager.getInstance();