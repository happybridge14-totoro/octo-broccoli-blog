const {theme} = require("../model/dataProxy");
const render = (user) => {
    if (user) {
        const themeName = theme.getThemeNameById(user.themeId);
        return `<h5>Welcome back, ${user.name}</h5>
        <form action="/changeTheme" method="POST">
            <label class="changeThemeText">Current theme: ${themeName} theme.</label>
            <button type="submit" id="changetheme" name="changetheme">Change theme</button>
        </form>
        <form action="/signout" method="POST">
            <button type="submit" id="signout" name="signout" class="signout">Sign out</button>
        </form>`;
    } else {
        return `<h5>Sign in to continue your saved game and change the theme!</h5>
        <form action="/signin" method="POST">
            <input id="username" name="username" type="text" required>
            <button type="submit" class="signin">Sign in</button>
        </form>`
    }
};
module.exports = render;