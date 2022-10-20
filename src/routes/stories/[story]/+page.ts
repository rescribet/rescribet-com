import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import { stories } from '$lib/stories';

export const load: PageLoad = ({ params }) => {
  const post = stories.stories.find((it) => it._id.split('/').pop() === params.story);

  if (post === undefined) {
    throw error(404, 'Not found');
  }

  return post;
};
