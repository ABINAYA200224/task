let button=document.getElementById('button')
let btn3=document.getElementById('btn3')
let full=document.getElementById('full')

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
// let checkbox=document.getElementById('check')
// let checkbox1=document.getElementById('check1')


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
    let check=document.getElementById('check')
    let check1=document.getElementById('check1')
    
    
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
    console.log(details)



    fetch('https://6530d94e6c756603295f269f.mockapi.io/jobs', {
        method: "POST",
         body: JSON.stringify(details),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     .then(response => response.json())
     .then(json => console.log(json));
    
    modalstart.style.display="none";
});








    // // VALIDATIONS
    if ( box1.value.trim() ==="") {
        document.getElementById('box1').innerHTML="Enter some text for text"  
        
    }
     if(box2.value.trim() == ""){
        document.getElementById('box2').innerHTML="Enter some text for About"
     }
    if(box2.value.trim() == ""){
        document.getElementById('box3').innerHTML="Enter some text for Title"  
        
    }
    if(box2.value.trim() == ""){
        document.getElementById('box3').innerHTML="Enter some text for Title"  
        
    }
    if(box3.value.trim() == ""){
        document.getElementById('box3').innerHTML="Enter some text for Title"  
        
    }
    if(locat.value.trim() == ""){
        document.getElementById('locat').innerHTML="Enter some text for Title"  
        
    }
    if(remote.value.trim() == ""){
        document.getElementById('remote').innerHTML="Enter some text for Title"  
        
    }
    if(ex.value.trim() == ""){
        document.getElementById('ex').innerHTML="Enter some text for Title"  
        
    }
    if(ex1.value.trim() == ""){
        document.getElementById('ex1').innerHTML="Enter some text for Title"  
        
    }
    if(sal.value.trim() == ""){
        document.getElementById('sal').innerHTML="Enter some text for Title"  
        
    }
    if(sal1.value.trim() == ""){
        document.getElementById('sal1').innerHTML="Enter some text for Title"  
        
    }
    if(total.value.trim() == ""){
        document.getElementById('total').innerHTML="Enter some text for Title"  
        
    }
    if(check.value.trim() == ""){
        document.getElementById('check').innerHTML="Enter some text for Title"  
        
    }
    if(check1.value.trim() == ""){
        document.getElementById('check1').innerHTML="Enter some text for Title"  
        
    }
    










    
      
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