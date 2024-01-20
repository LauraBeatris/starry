import { getUser } from '@/app/lib/auth';

export default async function GenerateImagePage() {
  const { isAuthenticated } = await getUser();

  if (!isAuthenticated) {
    return <p>Bleh</p>;
  }

  return <p>Hello!</p>;
}
