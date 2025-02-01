class SoundManager {
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private initialized = false;
  private isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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

    try {
      // Create and preload all audio elements
      for (const [key, url] of Object.entries(soundEffects)) {
        const audio = new Audio();
        audio.src = url;
        audio.preload = 'auto';
        
        // Set volume lower for better UX
        audio.volume = 0.3;
        
        // For mobile devices, we need to load on user interaction
        if (!this.isMobile) {
          await audio.load();
        }
        
        this.sounds[key] = audio;
      }

      // Initialize audio context on mobile devices
      if (this.isMobile) {
        document.addEventListener('touchstart', () => {
          Object.values(this.sounds).forEach(audio => {
            audio.load();
          });
        }, { once: true });
      }

      this.initialized = true;
      console.log('Sound effects initialized successfully');
    } catch (error) {
      console.error('Error initializing sound effects:', error);
    }
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
      playSound.volume = 0.3;
      await playSound.play();
    } catch (error) {
      // Silently handle audio playback errors to not disrupt the user experience
      console.debug('Audio playback failed:', error);
    }
  }
}

export const soundManager = new SoundManager();