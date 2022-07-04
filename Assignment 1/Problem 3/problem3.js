const generatecard = document.getElementById("btn");
generatecard.addEventListener("click", showidcard);

function showidcard() {

    const leftname = document.getElementById("leftname").value
    const leftcollege = document.getElementById("leftcollege").value
    const leftlocation = document.getElementById("leftlocation").value


    const rightname = document.getElementById("rightname")
    const rightcollege = document.getElementById("rightcollege")
    const rightlocation = document.getElementById("rightlocation")

    rightname.innerText = leftname
    rightcollege.innerText = leftcollege
    rightlocation.innerText = leftlocation



}
showidcard()
function loadImage(event) {

    const leftfile = document.getElementById("imagedisplayed")
    leftfile.src = URL.createObjectURL(event.target.files[0]);
};


