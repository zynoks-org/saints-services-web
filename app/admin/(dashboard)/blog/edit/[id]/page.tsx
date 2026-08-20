import { notFound } from 'next/navigation';
import { getPostById } from '@/lib/posts';
import { PostEditor } from '@/components/admin/PostEditor';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();

  return <PostEditor post={post} />;
}
