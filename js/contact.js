function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    window.location.href = `mailto:ikbal30042005@gmail.com?subject=Hallo&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
}