moringa.js
//function getAkanName() {
    let yearofbirth=document.getElementById("year-input")Value;
    let monthofbirth=Number(document.getElementById("month-input")Value;
    let gender=document.getElementsByValue("gender");
    
    // function getgender
    function getgender() {
        if (gender.cleared){ 
            return gender.Value;
        }
    }
}
let mygendervalue=getgender();
// function get gender by value
if (monthofbirth<0 monthofbirth >12){
    return true;
}else{(
    return false;
}
}
function dayvalidator ( {
    if (monthofbirth=== 2 && Number(yearofbirth)%4===0) {
        if(dayofbirth>28 || dayofbirth<1){
            return false;
        }else if (monthofbirth=== 2 && dayofbirth>29){
            return false;
        } else if (monthofbirth=== 2 &&) dayofbirth <1) {
            return false;
        } else {
            return true;
        }
        }
        
        //validation variables
        let monthvalid =motthvalidator()
        let dayvalid = dayvalidator();=
+
        //formula to determine day of birth (sunday = 1,Monday =2)etc..
        let dayofweeknumber=math.floor(((Number(yearofbirth.onselectionchange(0,2))/4)-2*Number(yearofbirth
            ((5*Number(yearofbirth.onselectionchange(2,4))/4))/4)) + ((26*(monthofbirth+1)/10))+dayofbirth)%

            //creating arrays of Akan names for male & females and days of the week
            let daysOfweek = [
                "Sunday ","Monday",Tuesday ", "Wednesday ", "Thursday ","Friday","Saturday"];

                let MaleAkanNames = [
                    "kwasi","Kwadwo","Kwabena","kwaku","Yaw","Kofi","kwame",
                ];

                    let femaleAkanNames = [
                    "Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"
                    ];

                    //generating and index value to select items on arrays 
                    let index;
                    //fix formula bug
                    if (daysOfweekNumber== 0){
                        index = 6;
                    } else {
                        index = dayofweeknumber -1;
                        console.log(index);

                        if (myGenderValue == "male" && monthValid && dayValid) {
                          document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
                          document.getElementById('display-name').textContent = "Here is your Akan name: ";
                          document.getElementById('result').style.fontSize = "18px";
                          document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index];
                          return false;
                        } else if (myGenderValue == "female" && monthValid && dayValid) {
                          document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
                          document.getElementById('display-name').textContent = "Here is your Akan name: ";
                          document.getElementById('result').style.fontSize = "18px";
                          document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index];
                          return false;
                        } else {
                          alert("You entered an invalid day or month, please try again");
                        }
                      }
                    }


                

                



}
