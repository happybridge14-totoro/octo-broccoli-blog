const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Online Guess Game</title>
    <link id="favicon" rel="shortcut icon" href="/favicon.png" sizes="16x16 32x32 48x48" type="image/png">
    <link rel="stylesheet" href="/css/game.css">
</head>
<body class="{theme}-theme">
    <header>
        <h2>Welcome to word guess game! Enjoy!</h2>
    </header>
    <main class="game-body">
        {body}
    </main>
    <footer>
        <ul class="footer-personal-info">
            <li>© 2020 Yiji Huang</li>
            <li class="footer-divider"></li>
            <li>
                <span>E-mail: </span>
                <a href="mailto:huang.yiji@husky.neu.edu">huang.yiji@husky.neu.edu</a>
            </li>
        </ul>
    </footer>
</body>
</html>
`;

module.exports = template;