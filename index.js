const data =[
    {
        dtae:"15-Nov-22",
        tution:"wanted tution for home classes",
        location:"Jamia Miliya Islamia",
        gender:"Any",
        timing:"Morning",
        class:"1st",
       
        tutionid:"123456",
        subject:"All subjects"
    },
    {
        dtae:"16-Nov-22",
        tution:"wanted tution for online classes",
        location:"Gaffar manzil",
        gender:"Male",
        timing:"Evening",
        class:"2nd",
      
        tutionid:"123457",
        subject:"Math"
    },

    {  dtae:"17-Nocv-22",
    tution:"wanted tution for home classes",
    location:"Guttaiya bagh",
    gender:"female",
    timing:"Morning",
    class:"5th",
  
    subject:"Science",
    tutionid:"123458"
    },
    {
        dtae:"17-Nocv-22",
        tution:"wanted tution for online classes",
        location:"Quila english ganj",
        gender:"Any",
        timing:"Afternoon",
        class:"10th",
       
        tutionid:"123459",
        subject:"English",
    },
    {
        dtae:"18-Nocv-22",
        tution:"wanted tution for home classes",
        location:"Kajiyara",
        gender:"Male",
        timing:"Evening",
        class:"12th",
       
        tutionid:"123460",
        subject:"All subjects"
    },
    {
        dtae:"11-Nocv-22",
        tution:"wanted tution for home classes",
        location:"Okhla NSIC",
        gender:"female",
        timing:"Morning",
        class:"1st",
      
        tutionid:"123461",
        subject:"Science",
    },
    {
        dtae:"15-Nocv-22",
        tution:"wanted tution for home classes",
        location:"Jamia Miliya Islamia",
        gender:"Any",
        timing:"Morning",
        class:"6th",
       
        tutionid:"123462",
        subject:"computer"
    },
    {
       
        dtae:"15-Nocv-22",
        tution:"wanted tution for home classes",
        location:"Rajendra place",
        gender:"Any",
        timing:"Morning",
        class:"1st",
      
        tutionid:"123463",
        subject:"English"
    },
    {
       
        dtae:"15-Nocv-22",
        tution:"wanted tution for home classes",
        location:"Khan Market",
        gender:"Any",
        timing:"Afternoon",
        class:"8th",
      
        tutionid:"123464",
        subject:"English"
    },
    
    
    

]
data.forEach((Element,index)=>{




const main =document.querySelector(".main")
console.log(main)
///
const card =document.createElement("div")
console.log(card)

card.classList ="card";


const moviecard = `
<div class="card-body">

<i class="bi bi-calendar-event"></i>
<span>Posted on:${data[index].dtae}</span>

<div class="dofix">
    <i class="bi bi-person-fill"></i>
    <span style="font-size:20px;color: rgb(77, 92, 221);">Wanted Home Tutor For...</span>

</div>
<div>
    <i class="bi bi-geo-alt"></i>
    <span>${data[index].location}</span>
</div>
<div>
    <span style="color: brown">Prefered :</span>
    <i class="bi bi-person-circle"></i>${data[index].gender} <i class="bi bi-watch"></i><span>Evening</span>
    <hr>

</div>
<div><i class="bi bi-file-earmark-break"></i><span>${data[index].class}class TuitionId:${data[index].tution}</span></div>
<hr>
<div>
    <pre>  <i class="bi bi-book"></i> :<span>${data[index].subject}</span></pre>
</div>
<hr>
<div style="background-color:lightblue;padding:20px;border-radius: 10px;">Wanted home tutor for ${data[index].class}
    class, All</div>
<button style="margin-top:8px;border-radius: 10px;background-color: rgb(10, 172, 236);"> <span
        style="color: white">view Details</span> </button>

</div>

`



card.innerHTML += moviecard;
main.appendChild(card);

})
