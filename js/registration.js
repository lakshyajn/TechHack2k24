document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(registrationForm);
        const formObject = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });

            if (response.ok) {
                const result = await response.json();
                alert('Registration successful! Welcome to TechHack 2024!');
                registrationForm.reset();
            } else {
                const error = await response.json();
                alert(`Registration failed: ${error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});