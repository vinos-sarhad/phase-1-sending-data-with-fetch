 
function submitData(name, email){

    const userData = {
        name: name,
        email: email
      };

      const configObject = {
         method: "POST",
         headers: {
           "Content-Type": "application/json", 
           "Accept": "application/json"
         },
         body: JSON.stringify(userData)
       };


   return fetch('http://localhost:3000/users',configObject )
 .then( res => res.json()
)
      
 .then(data => {
          appendIdToDOM(data.id);
        })





 .catch(error => {
   appendErrorToDOM(error.message);
 });
}

submitData("vinos", "vinos@email.com")

function appendIdToDOM(id){
     
    const newElemet=document.createElement("p")
    newElemet.textContent=`New ID: ${id}`
    document.body.appendChild(newElemet)

     
 
      

}
function appendErrorToDOM(message) {
   const errorElement = document.createElement("p");
   errorElement.textContent = `Error: ${message}`;
   document.body.appendChild(errorElement);
 }















// function submitData(name, email) {
//    const userData = {
//      name: name,
//      email: email
//    };
 
//    const configObject = {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json", // Correcting the header name
//        "Accept": "application/json"
//      },
//      body: JSON.stringify(userData)
//    };
 
//    return fetch("http://localhost:3000/users", configObject)
//      .then(response => {
//        if (!response.ok) {
//          throw new Error('Unauthorized Access'); // Throw error for non-successful response
//        }
//        return response.json();
//      })
//      .then(data => {
//        appendIdToDOM(data.id);
//      })
//      .catch(error => {
//        appendErrorToDOM(error.message);
//      });
//  }
 
//  function appendIdToDOM(id) {
//    const idElement = document.createElement("p");
//    idElement.textContent = `New ID: ${id}`;
//    document.body.appendChild(idElement);
//  }
 
//  function appendErrorToDOM(message) {
//    const errorElement = document.createElement("p");
//    errorElement.textContent = `Error: ${message}`;
//    document.body.appendChild(errorElement);
//  }
//  submitData("vinos", "vinos@email.com")