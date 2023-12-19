function authenticateUser(username, password) {
    const users = [
        { user: 'user1', pass: 'password123' },
        { user: 'user2', pass: 'password1234' }
    ];

    return users.some(user => user.user === username && user.pass === password);
}
