```javascript
function showMessage() {
    alert("Welcome to PVG College Student Portal!");
}

function searchNotices() {
    let input = document.getElementById("search");
    let filter = input.value.toLowerCase();

    let list = document.getElementById("noticeList");
    let items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();

        if (text.includes(filter)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

document.getElementById("year").textContent =
    new Date().getFullYear();
```
