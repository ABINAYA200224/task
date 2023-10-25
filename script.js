


let fulls=document.getElementById('full')
const val=(data)=>{
    data.map((object) => {
        const{applyType,companyName, details,id,industry,location, maximumExperience, maximumSalary,minimumExperience,minimumSalary,remoteType,title,totalEmployee}=object
      console.log("obj",object)
        fulls.innerHTML += `
      
       <div id="full-container">
         <div id="container">
             <div id="net-img">
                <img src="net-img.png">
             </div>
             <div id="first-content" >
                <div>
                   <h2>UX UI Designer:${applyType}</h2>
                 </div>
             
                  <div>
                    <p>${companyName} </p>
                    <p id="chennai">${ details}</p>
                 </div>
             </div>
         </div>
         <div id="second-content">
             <p>${industry}${location}</p>
             <p>${ maximumExperience}${minimumExperience}</p>
             <p>${ maximumSalary}${minimumSalary}</p>
             <p>${title}</p>
 
         </div>
         <div id="aplly-now">
             <button id="btn">Apply Now</button>
         </div>
        
         
     </div>    
       `
     
     });
}
fetch('https://6530d94e6c756603295f269f.mockapi.io/jobs')
.then(res =>res.json())
.then(data =>val(data))
  

   