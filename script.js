let theme="light";

const appDiv = document.querySelector(".App");

function toggleTheme(){
    if(theme === "light") {
        theme = "dark";
        appDiv.removeAttribute("id","light");
        appDiv.setAttribute("id","dark");
    } else {
        theme = "light";
        appDiv.removeAttribute("id","dark");
        appDiv.setAttribute("id", "light");
    }
}