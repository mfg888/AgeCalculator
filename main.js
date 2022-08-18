let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let birth = new Date(document.getElementById("birth").value);
    let dateNow = new Date();
    
    if(birth.getTime()){
        result.classList.remove('bg-red-100')
        result.classList.add('bg-slate-100')
        let difference = dateNow.getTime() - birth.getTime();
        let inDays = (Math.floor(difference / (1000 * 3600 * 24)));
        result.style.display = "block";
        result.innerHTML = `Your Age is <span>${inDays}</span> days`;
    } else {
        result.style.display = "block";
        result.classList.remove('bg-slate-100')
        result.classList.add('bg-red-100')
        result.innerHTML = `Please select your birth date`;
    }
})