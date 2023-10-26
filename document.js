let button=document.getElementById('button')
let btn3=document.getElementById('btn3')
let full=document.getElementById('full')

let box1=document.getElementById('box1')
let box2=document.getElementById('box2')
let box3=document.getElementById('box3')
let locat=document.getElementById('locat')
let remote=document.getElementById('remote')
let ex=document.getElementById('ex')
let ex1=document.getElementById('ex1')
let sal=document.getElementById('sal')
let sal1=document.getElementById('sal1')
let total=document.getElementById('total')
let checkbox=document.getElementById('check')
let checkbox1=document.getElementById('check1')
let radio2=document.getElementById('radio2')



// let details={
//     jabTitle: box1.value,
//     companyname:box2.value,
//     industry:box3.value,
//     location:locat.value,
//     remoteType:remote.value,
//     experience:ex.value,
//     experience:ex1.value,
//     salary:sal.value,
//     salary:sal1.value,
//     totalemplaoye:total.value,
//     quickapply:check.value,
//     externalapply:check1.value

// }
// console.log(details)

// modal btn
button.addEventListener("click", () => {
   
    modalstart.style.display="block";

    });

    // save button
btn3.addEventListener("click",()=>{
    // let box1=document.getElementById('box1')
    // let box2=document.getElementById('box2')
    // let box3=document.getElementById('box3')
    // let locat=document.getElementById('locat')
    // let remote=document.getElementById('remote')
    // let ex=document.getElementById('ex')
    // let ex1=document.getElementById('ex1')
    // let sal=document.getElementById('sal')
    // let sal1=document.getElementById('sal1')
    // let total=document.getElementById('total')
    // let check=document.getElementById('check')
    // let check1=document.getElementById('check1')

    let boolean  = false;
    
    // // VALIDATIONS
    if ( box1.value =="") {
        document.getElementById('error_title').innerHTML="Enter some text"  
        boolean = true;
    }


     if(box2.value == ""){
        document.getElementById('error_companyName').innerHTML="Enter some text "
        boolean = true;
     }


     if(box2.value == ""){
        document.getElementById('industry').innerHTML="Enter some text for Title"  
        boolean = true;
        
    }


     if(box2.value == ""){
         document.getElementById('location').innerHTML="Enter some text"  
         boolean = true;
     }


    if(box3.value == ""){
        document.getElementById('remoyte-type').innerHTML="Enter some text"  
        boolean = true;
    }


    if(locat.value == ""){
        document.getElementById('experience-minimum').innerHTML="Enter some text"  
        boolean = true;
    }


    if(remote.value == ""){
        document.getElementById('experience-maxcimum').innerHTML="Enter some text"  
        boolean = true;
    }


    if(ex.value == ""){
        document.getElementById('minimum-salary').innerHTML="Enter some text "  
        boolean = true;
    }


    if(ex1.value == ""){
        document.getElementById('maxcimum-salary').innerHTML="Enter some text "  
        boolean = true;
    }


    if(sal.value == ""){
        document.getElementById('total-employe').innerHTML="Enter some text "  
        boolean = true;
    }


    if(!sal1.checked && !total.checked ){
        document.getElementById('radio2').innerHTML=" one btn click"  
        boolean = true;
    }else{
        document.getElementById('radio2').innerHTML=" " 
    }


    // if(total.value == ""){
    //     document.getElementById('radio2').innerHTML=" click one btn"  
    //     boolean = true;
    // }

    if(boolean == false){
        modalstart.style.display="none";

    }

    // if(check.value == ""){
    //     document.querySelector('.error').innerHTML="Enter some text"  
        
    // }


    // if(check1.value == ""){
    //     document.querySelector('.error').innerHTML="Enter some text"  
        
    // }

    
    
    let details={
        applyType: box1.value,
        companyName:box2.value,
        details:box3.value,
        id:locat.value,
        industry:remote.value,
        location:ex.value,
        maximumExperience:ex1.value,
        maximumSalary:sal.value,
        minimumExperience:sal1.value,
        minimumSalary:total.value,
        remoteType:check.value,
        title:check1.value
    
    }
    // console.log(details)



    fetch('https://6530d94e6c756603295f269f.mockapi.io/jobs', {
        method: "POST",
         body: JSON.stringify(details),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     .then(response => response.json())
     .then(json => console.log(json));
    
   });







    

    










    
      
//     let fullcontainer=document.createElement('div')
//     fullcontainer.id="full-container"
//    full.appendChild(fullcontainer)

//    let container=document.createElement('div')
//     container.id="container"
//    fullcontainer.appendChild(container)

//    let netimg=document.createElement('div')
//    netimg.id="net-img"
//   container.appendChild(netimg)

//       let net=document.createElement('img')
//        net.id="n-img"
//     //    net.src="net-img.png"
//        netimg.appendChild(net)

//     let firstcontent=document.createElement('div')
//     firstcontent.id="first-content"
//     container.appendChild(firstcontent)

//     let onediv=document.createElement('div')
//     let h2=document.createElement('h2')

//     firstcontent.appendChild(onediv)
//     onediv.appendChild(h2)

//     let twodiv=document.createElement('div')
//     let para=document.createElement('p')
//     let para1=document.createElement('p')
//     firstcontent.appendChild(twodiv)
//     twodiv.appendChild(para)
//     twodiv.appendChild(para1)


//    let  secondcontainer=document.createElement('div')
//    secondcontainer.id="second-container"
//    fullcontainer.appendChild(secondcontainer)
//    let paragraph1=document.createElement('p')
//    let paragraph2=document.createElement('p')
//    let paragraph3=document.createElement('p')
//    let paragraph4=document.createElement('p')
//    secondcontainer.appendChild(paragraph1)
//    secondcontainer.appendChild(paragraph2)
//    secondcontainer.appendChild(paragraph3)
//    secondcontainer.appendChild(paragraph4)

//    let applynow=document.createElement('div')
//    applynow.id="apply-now"
//    fullcontainer.appendChild(applynow)

//    let btn=document.createElement('button')
//    btn.id="apply-now"
//    applynow.appendChild(btn)