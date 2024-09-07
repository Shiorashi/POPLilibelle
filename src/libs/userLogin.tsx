export default async function userLogIn(
  username:string,
) {
  const response = await fetch(`http://localhost:5000/api/v1/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to login');
  }
  return await response.json();
}