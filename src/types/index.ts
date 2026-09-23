export type SectionId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface SectionMeta {
  id: SectionId;
  indexStr: string;
  tagline: string;
  title: string;
  subtitle?: string;
  theme: 'peach' | 'chocolate' | 'coral' | 'dark-emergency';
}
