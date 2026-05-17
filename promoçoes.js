document.querySelector('.close').addEventListener("click", function(){
    document.getElementById('form').style.display = 'none'
})

function openForm(){
    document.getElementById('form').style.display = 'flex'
}