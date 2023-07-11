function displaytime(){
    const dateTime = new Date ();
    const hrs = dateTime.getHours()
    const min = dateTime.getMinutes();

    if(hrs > 12){
        hrs = hrs-12
    }

    document.getElementById("hours").innerHTML = hrs
    document.getElementById("minutes").innerHTML = min
}

setInterval(displaytime,100)