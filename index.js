// Add your code here

function submitData(name, email){
    const formData={
        name:name,
        email:email
    }
    const configurationObject ={
        method:"POST",
        headers:{
            "content-Type":"application/json",
            "accept":"application/json",
        },
        body:JSON.stringify(formData)
    }
     return fetch("http://localhost:3000/users",configurationObject)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let h2=document.createElement('h2')
        h2.innerHTML=data.id
        document.body.appendChild(h2)
    
    })
    .catch(function(error){
        let h3=document.createElement('h3')
        h3.innerHTML=error.message
        document.body.appendChild(h3)
    })
    }
