const btnMake = document.getElementById("makeFriend");

let i = 0;

btnMake.addEventListener("click", () => {
    i++;
    const friendsNumber = document.getElementById("friendsNumber");
    let currentFriends = parseInt(friendsNumber.textContent);
    if(i % 2 == 1){
        
        btnMake.style.backgroundColor = "gray";
        btnMake.innerHTML = "Друг";
        friendsNumber.textContent = currentFriends + 1;
    } else {
        
        btnMake.style.backgroundColor = "#7549EA";
        btnMake.innerHTML = "Подружиться";
        friendsNumber.textContent = currentFriends - 1;
    }
    
});