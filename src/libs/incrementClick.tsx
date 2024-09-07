export default async function incrementClick() {
  const response = await fetch(`http://localhost:5000/api/v1/users/click`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies in the request
  });

  if (!response.ok) {
      throw new Error('Failed to increment click');
  }

  return await response.json();
}
