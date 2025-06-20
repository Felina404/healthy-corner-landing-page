const allImages: Record<string, { default: string }> = {
  ...import.meta.glob('../assets/appetizers/*.webp', { eager: true }),
  ...import.meta.glob('../assets/breakfast/*.webp', { eager: true }),
  ...import.meta.glob('../assets/desserts/*.webp', { eager: true }),
  ...import.meta.glob('../assets/dinner/*.webp', { eager: true }),
  ...import.meta.glob('../assets/salads/*.webp', { eager: true }),
  ...import.meta.glob('../assets/smoothies/*.webp', { eager: true }),
  ...import.meta.glob('../assets/yogurtBowls/*.webp', { eager: true }),
};

export const getImageUrl = (category: string, filename: string) =>
  allImages[`../assets/${category}/${filename}`]?.default;