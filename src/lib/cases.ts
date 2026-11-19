import { getCollection, type CollectionEntry } from 'astro:content';

export type Case = CollectionEntry<'cases'>;

const byOrder = (a: Case, b: Case) => a.data.order - b.data.order;

/**
 * Published case studies in editorial order. Drafts are dropped from production
 * builds only, so `astro dev` still previews them.
 */
export async function getCases(): Promise<Case[]> {
  const all = await getCollection('cases', (entry) => import.meta.env.DEV || !entry.data.draft);
  return all.sort(byOrder);
}
