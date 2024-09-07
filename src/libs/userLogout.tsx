export default async function userLogOut() {
    const response = await fetch('http://localhost:5000/api/v1/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',  // Include cookies in the request
    });

    if (!response.ok) {
        throw new Error('Logout failed');
    }

    return await response.json();
}
