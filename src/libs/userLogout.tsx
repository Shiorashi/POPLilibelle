export default async function userLogOut() {
    const response = await fetch(`http://localhost:5000/api/v1/users/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (!response.ok) {
        throw new Error('Failed to logout');
    }
    return await response.json();
}
