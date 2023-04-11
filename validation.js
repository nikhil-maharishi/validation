let submit = document.getElementById('btn');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cnfrmpassword = document.getElementById('confirm_password');
let pin = document.getElementById('pin');
let phone = document.getElementById('contact_no');
let state = document.getElementById('state');
let username = document.getElementById('username');
let form = document.getElementsByClassName('contact_form')
let hobbiesA = document.getElementById('Athelitcs');
let hobbiesB = document.getElementById('Basketball');
let hobbiesT = document.getElementById('Tabletennies"');
let hobbiesF = document.getElementById('Football');
let hobbies = document.getElementById('hobbies');

let error = document.getElementById('error');
let error_lname = document.getElementById('error_lname');
let error_mail = document.getElementById('error_mail');
let error_password = document.getElementById('error_password');
let error_cpassword = document.getElementById('error_cpassword');
let error_pin = document.getElementById('error_pin');
let error_contact = document.getElementById('error_contact');
let error_hobbies = document.getElementById('error_hobbies');
console.log(submit)

submit.addEventListener('click', (e) => {
    if(fname.value==""||lname.value==""||email.value==""||password.value==""||cnfrmpassword.value==""|| pin.value==""||phone.value==""||state.value==""){
        e.preventDefault();
    }
    else{
    document.getElementById('success_message').style.display= "block";
    }
    
})
submit.addEventListener('click',(e)=>{
    if(fname.value==""){
        error.style.display = "block";
        e.preventDefault();
    }
    else if(lname.value==""){
        error_lname.style.display = "block";
        e.preventDefault();
    }
    else if(password.value==""){
        error_password.style.display = "block";
        e.preventDefault();
    }
    else if(cnfrmpassword.value==""){
        error_cpassword.style.display = "block";
        e.preventDefault();
    }
    else if(email.value==""){
        error_mail.style.display = "block";
        e.preventDefault();
    }
    else if(pin.value==""){
        error_pin.style.display = "block";
        e.preventDefault();
    }
    else if(phone.value==""){
        error_contact.style.display = "block";
        e.preventDefault();
    }
    else if(count==0){
        error_hobbies.style.display = "block";
        e.preventDefault();
    }
    else{
        document.getElementById('success_message').style.display= "block";
    }

    
})

fname.addEventListener('blur', (e) => {
    let regEx = /^[a-zA-Z ]*[a-zA-Z]$/;
    let str = fname.value;
    if (regEx.test(str)) {
        console.log('r');
        error.style.display = "none";
    }
    else if(str == " "){
        error.style.display = "block";
    }
    else {
        console.log('a')
        error.style.display = "block";
    }

})

lname.addEventListener('blur', (e) => {
    let regEx = /^[a-zA-Z]*$/;
    let str = lname.value;
    if (regEx.test(str)) {
        console.log('r');
        error_lname.style.display = "none";
    }
    else if(str == " "){
        error_lname .style.display = "block";
    }
    else {
        console.log('a')
        error_lname.style.display = "block";
    }
})
username.readOnly = true;
email.addEventListener('input', (e) => {
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let str = email.value;
    if (regEx.test(str)) {
        console.log('r');
        error_mail.style.display = "none";
    }
    else if(str == " "){
        error_mail.style.display = "block";
    }
    else {
        console.log('a')
        error_mail.style.display = "block";
    }

    let emailValue = email.value;
    const nameArr = emailValue.split("@");
    username.value = nameArr[0]; 
    //console.log(username.innerHTML);
    
    // console.log(nameArr);
    
   
})


password.addEventListener('input', (e) => {
    let regEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let str = password.value;
    if (regEx.test(str)) {
        console.log('r');
        error_password.style.display = "none";
    }
    else if(str == " "){
        error_password.style.display = "block";
    }
    else {
        console.log('a')
        error_password.style.display = "block";
    }

})

cnfrmpassword.addEventListener('input', (e) => {
    let regEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let str = password.value;
    if (password.value === cnfrmpassword && regEx.test(str)) {
        console.log('r');
        error_cpassword.style.display = "none";
    }
    else if(str == " "){
        error_cpassword.style.display = "block";
    }
    else {
        console.log('a')
        error_cpassword.style.display = "block";
    }
})

pin.addEventListener('input', (e) => {
    let regEx = /^\d{6}$/;
    let str =pin.value;

    if (regEx.test(str)) {
        console.log('r');
        error_pin.style.display = "none";
    }
    else if(str == " "){
        error_pin.style.display = "block";
    }
    else {
        console.log('a')

        error_pin.style.display = "block";
    }
})

phone.addEventListener('blur', (e) => {
    let regEx = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    let str = phone.value;
    if (regEx.test(str)) {
        console.log('r');
        error_contact.style.display = "none";
    }
    else if(str == " "){
        error.style.display = "block";
    }
    else {
        console.log('a')
        error_contact.style.display = "block";
    }
})
var city = []
state.addEventListener('change',(e) => {
    if(state.value == "Delhi"){
        city=["New_Delhi", "South_Delhi", "East_Delhi", "Old_Delhi"];
        
        
    }
    else if(state.value == "Gujarat"){
        city=["Ahmedabad", "Surat", "Vadodra", "Rajkot"];
    }
    else if(state.value == "Punjab"){
         city=["Ludhiyana", "Amritsar", "Jalandhar"];
    }
    else if(state.value == "Rajasthan"){
        city=["Jaipur", "Jodhpur", "Sikar", "Alwar"];
    }
    else if(state.value == "Utter Pradesh"){
        city=["Noida", "ParyagRaj", "Ayodhya", "Varansi"];
    }
    else{
        city =[];
    }
    let string="";
    console.log(city)
    for(i=0; i<city.length; i++){
        console.log(city[i])
        string = string+"<option>"+city[i]+"</option>";
    }
    
    //string = "<select>"+string+"<select>";
    console.log(string);
    document.getElementById('city').innerHTML=string;
})
var count = 0;
hobbies.addEventListener('input', (e) => {
    
    console.log(error_hobbies);
    if((hobbiesA.checked == true ||hobbiesB.checked == true||hobbiesF.checked == true||hobbiesT.checked == true) && count<1){
        error_hobbies.style.display= "block";
        count++;
        console.log('k')
    }
    else if(count>1){
        console.log('g')
        error_hobbies.style.display= "none";
    }
    else{
        error_hobbies.style.display= "none";
    }
})




   

   

   











