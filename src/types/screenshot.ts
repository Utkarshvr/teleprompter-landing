export interface AppScreenshot {
  /** Stable identifier, also used as the React key. */
  id: string;
  /** Path relative to `/public`, e.g. `/app-screenshots/screen-1.png`. */
  src: string;
  alt: string;
  caption: string;
}
