function addUser(){
    user_name= document.getElementById("user_name_input").value;

    localStorage.setItem("user_name", user_name);
    

    window.location= "kwitter_room_page.html";
}