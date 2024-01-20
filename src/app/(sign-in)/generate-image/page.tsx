import { getUser } from '@/app/auth';

export default async function GenerateImagePage() {
  const { isAuthenticated } = await getUser();

  if (!isAuthenticated) {
    return <p>Bleh</p>;
  }

  return <p>Hello!</p>;
}
