var elForm = document.querySelector(".speed__form");
var elInput = elForm.querySelector(".speed__input");
var elBoyResult = document.querySelector(".speed__strong--boy");
var elVeloResult = document.querySelector(".speed__strong--velo");
var elCarResult = document.querySelector(".speed__strong--car");
var elPlaneResult = document.querySelector(".speed__strong--plane");
// console.log(elForm, elInput, elResult);
elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    var userText = Number(elInput.value);
    // var userTextIndex=userText.charCodeAt(userText);
    /*  speed km/soat */
    var boySpeed = 3.6;
    var veloSpeed = 20.1;
    var carSpeed = 70;
    var planeSpeed = 800;
    var Minut = 60;
    if (userText > 0 ) {
        function myTime(lenght, speed) {
            var boyTime = Math.trunc(userText / boySpeed);
            var boyTimeMinut = Math.trunc(((userText / boySpeed - Math.trunc(userText / boySpeed)) * Minut));
            var veloTime = Math.trunc(userText / veloSpeed);
            var veloTimeMinut = Math.trunc(((userText / veloSpeed - Math.trunc(userText / veloSpeed)) * Minut));
            var carTime = Math.trunc(userText / carSpeed);
            var carTimeMinut = Math.trunc(((userText / carSpeed - Math.trunc(userText / carSpeed)) * Minut));
            var planeTime = Math.trunc(userText / planeSpeed);
            var planeTimeMinut = Math.trunc(((userText / planeSpeed - Math.trunc(userText / planeSpeed)) * Minut));
            /*  boy */
            if (boyTime == 0) {
                elBoyResult.textContent = ` ${boyTimeMinut} minut`
            }
            else if (boyTimeMinut == 0) {
                elBoyResult.textContent = ` ${boyTime} soat`;

            }
            else {
                elBoyResult.textContent = ` ${boyTime} soat ${boyTimeMinut} minut`
            }

            /*  velo */
            if (veloTime == 0) {
                elVeloResult.textContent = ` ${veloTimeMinut} minut`
            }
            else if (veloTimeMinut == 0) {
                elVeloResult.textContent = ` ${veloTime} soat`;

            }
            else {
                elVeloResult.textContent = ` ${veloTime} soat ${veloTimeMinut} minut`
            }
            /*  car */
            /*   elCarResult.textContent = ` ${carTime} soat ${carTimeMinut} minut`; */
            if (carTime == 0) {
                elCarResult.textContent = `${carTimeMinut} minut `
            }
            else if (carTimeMinut == 0) {
                elCarResult.textContent = `${carTime} soat `
            }
            else {
                elCarResult.textContent = `${carTime} soat ${carTimeMinut} minut`
            }
            /* plane */
            if (planeTime == 0) {
                elPlaneResult.textContent = `${planeTimeMinut} minut `
            }
            else if (planeTimeMinut == 0) {
                elPlaneResult.textContent = `${planeTime} soat`
            }
            else {
                elPlaneResult.textContent = `${planeTime} soat ${planeTimeMinut} minut`
            }
        }
        myTime(userText, boySpeed);
        myTime(userText, veloSpeed);
        myTime(userText, carSpeed);
        myTime(userText, planeSpeed);

    }
    else if(Number(userText)>0){
        alert(`siz raqam kiritmadingiz !!!`)
    }
    else{
        alert(` siz manfiy son kiritdingiz yol uzunligi musbat son boladi `)
    }

})

