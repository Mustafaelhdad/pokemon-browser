export const pokemonKeys = {
  list: ({ page, limit }: { page: number; limit: number }) =>
    ["pokemon", "list", { page, limit }] as const,

  loadMore: ({ limit }: { limit: number }) =>
    ["pokemon", "load-more", { limit }] as const,

  detail: (id: string | number) => ["pokemon", "detail", id] as const,
};
