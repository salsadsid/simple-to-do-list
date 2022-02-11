let count = 0;
document.getElementById('add-item').addEventListener('click', function () {
    const inputText = document.getElementById('input-field')
    const inputValue = inputText.value;
    count++;
    if (inputValue == "") {
        alert("Please enter a value");
    } else {
        const createTr = document.createElement('tr');
        createTr.innerHTML =
            `<th>${count}</th>
        <td>${inputValue}</td>
        <td>
            <button class="btn btn-success done-btn">Done</button>
            <button class="btn btn-danger delete-btn">Delete</button>
        <td>
    `
        const listItem = document.getElementById('list-item');
        listItem.appendChild(createTr);

        const doneButton = document.getElementsByClassName('done-btn');
        const deleteButton = document.getElementsByClassName('delete-btn');
        console.log(doneButton);
        for (const button of doneButton) {
            button.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.style.textDecoration = "line-through";
            })
        }
        for (const button of deleteButton) {
            button.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.style.display = "none"
            })
        }
    }
})


