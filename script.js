// storing values and Elements in variables
var myform = document.getElementById("myform");
var myinput = document.getElementById("myinput");
var mylist = document.getElementById("mylist");

myform.addEventListener("submit",
    function(event){
        event.preventDefault();
        if (myinput.value == ""){
            alert("Enter a task!");
        }
        else{
        createItem(myinput.value)
        }
    }
)

function createItem(value) {
    var items = `<li>${value}<button class="text-light btn btn-outline-danger ml-1" onclick="deleteitem(this)">Delete</button></li>`;
    mylist.insertAdjacentHTML("beforeend",items);
    myinput.value = "";
    myinput.focus();
}

function deleteitem(elementtodelete) {
    elementtodelete.parentElement.remove();
}