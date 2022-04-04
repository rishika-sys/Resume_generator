// alert("Hello People!!")
function addNeAq()
{
  // console.log("hi");
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("my-2");
  newNode.classList.add("aqField");
  newNode.setAttribute("placeholder","Enter here");

  let aqOb=document.getElementById("aq");
  let aqAddBtnOb=document.getElementById("aqAddBtn");

  aqOb.parentNode.insertBefore(newNode , aqAddBtnOb); //added parentNode which helped to solve the issue of insertBefore not working.
  // weOb.insertBefore(newNode,weAddBtnOb);
}
function remNeAq(){
 let elem =document.querySelector(".aqField")
 elem.parentNode.removeChild(elem);
}
function addNeWEF()
{
  // console.log("hi");
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("my-2");
  newNode.classList.add("weField");
  newNode.setAttribute("placeholder","Enter here");

  let weOb=document.getElementById("we");
  let weAddBtnOb=document.getElementById("weAddBtn");

  weOb.parentNode.insertBefore(newNode , weAddBtnOb); //added parentNode which helped to solve the issue of insertBefore not working.
  // weOb.insertBefore(newNode,weAddBtnOb);
}
// removing a field
function remNeWE(){
 let elem =document.querySelector(".weField")
 elem.parentNode.removeChild(elem);
}
function addSkillBtn()
{
  // console.log("hi");
  let newNode=document.createElement("INPUT");
  newNode.classList.add("form-control");
  newNode.classList.add("my-2");
  newNode.classList.add("skillField");
  newNode.setAttribute("placeholder","Enter here");
  newNode.type="search"

  let skillOb=document.getElementById("skill");
  let skillAddBtnOb=document.getElementById("skillAddBtn");

  skillOb.parentNode.insertBefore(newNode , skillAddBtnOb); //added parentNode which helped to solve the issue of insertBefore not working.
  // weOb.insertBefore(newNode,weAddBtnOb);
}
// removing a field
 function remNeSkill(){
  let elem =document.querySelector(".skillField")
  elem.parentNode.removeChild(elem);
}

function addAchieveBtn()
{
  // console.log("hi");
  let newNode=document.createElement("INPUT");
  newNode.classList.add("form-control");
  newNode.classList.add("my-2");
  newNode.classList.add("achField");
  newNode.setAttribute("placeholder","Enter here");
newNode.type="search"
  let achOb=document.getElementById("achieve");
  let achAddBtnOb=document.getElementById("achieveAddBtn");

  achOb.parentNode.insertBefore(newNode , achAddBtnOb); //added parentNode which helped to solve the issue of insertBefore not working.
  // weOb.insertBefore(newNode,weAddBtnOb);
}
// removing a field
function remNeAch(){
 let elem =document.querySelector(".achField")
 elem.parentNode.removeChild(elem);
}
//Generating Resume
function generateRes(){
let nameField=document.getElementById("nameField").value;
let contactField=document.getElementById("contactField").value;
let addField=document.getElementById("addField").value;
let fbField=document.getElementById("fbField").value;
let linkedField=document.getElementById("linkedField").value;
let gitField=document.getElementById("gitField").value;

 let nameT=document.getElementById("nameT");
 nameT.innerHTML=nameField;
// Taking all the values name, contact and address and storing dynamically
document.getElementById("nameT2").innerHTML=nameField;
document.getElementById("contactT").innerHTML=contactField;
document.getElementById("addT").innerHTML=addField;
document.getElementById("fbT").innerHTML=fbField;
document.getElementById("linT").innerHTML=linkedField;
document.getElementById("gitT").innerHTML=gitField;

//Academic Qualifications
let aqCell=document.getElementsByClassName("aqField");
let str1="";
for (let e of aqCell){
  str1 =str1+ `<li> ${e.value} </li>`;
}
document.getElementById("aqT2").innerHTML=str1;

//Work Experience
let weCell=document.getElementsByClassName("weField");
let str2 = "";
for (let i of weCell)
  {
      str2= str2+ `<li> ${i.value} </li>`;
  }
  document.getElementById("weT2").innerHTML=str2;

//Skills
  let skillCell=document.getElementsByClassName("skillField");
  let str3="";
  for (let i of skillCell)
    {
        str3 = str3 +`<li> ${i.value} </li>`;
    }
    document.getElementById("skillT2").innerHTML=str3;

  //Achievements

  let achCell=document.getElementsByClassName("achField");
  let str4="";
  for (let i of achCell)
    {
        str4= str4+ `<li> ${i.value} </li>`;
    }
    document.getElementById("achT2").innerHTML=str4;
    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block'
}
function printResume()
{
  window.print();
}
