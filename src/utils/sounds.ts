class SoundManager {
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private initialized = false;

  constructor() {
    this.initializeSounds();
  }

  private async initializeSounds() {
    if (this.initialized) return;

    const soundEffects = {
      click: 'https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/SoundFX/click.mp3',
      hover: 'https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/SoundFX/hover.mp3',
      send: 'https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/SoundFX/send.mp3',
      receive: 'https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/SoundFX/receive.mp3',
      error: 'https://nifrnbzdjizwmbgatyfr.supabase.co/storage/v1/object/public/SoundFX/error.mp3'
    };

    for (const [key, url] of Object.entries(soundEffects)) {
      const audio = new Audio();
      audio.src = url;
      audio.preload = 'auto';
      this.sounds[key] = audio;
    }

    // Pre-load all sounds
    await Promise.all(
      Object.values(this.sounds).map(audio =>
        audio.load()
      )
    );

    this.initialized = true;
  }

  public async playSound(soundName: 'click' | 'hover' | 'send' | 'receive' | 'error') {
    try {
      if (!this.initialized) {
        await this.initializeSounds();
      }

      const sound = this.sounds[soundName];
      if (!sound) {
        console.warn(`Sound ${soundName} not found`);
        return;
      }

      // Create a new Audio instance for each playback to avoid interruption
      const playSound = new Audio(sound.src);
      await playSound.play();
    } catch (error) {
      // Silently handle audio playback errors to not disrupt the user experience
      console.debug('Audio playback failed:', error);
    }
  }
}

export const soundManager = new SoundManager();