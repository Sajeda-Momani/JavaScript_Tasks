function display(){
fetch("Task.json")
.then(function(response){
   return response.json();
})
.then(function(infos){
   let placeholder = document.querySelector("#data-output");
   let output = "";
   for(let info of infos){
      output += `
         <tr>
            <td>${info.name}</td>
            <td>${info.age}</td>
            <td>${info.major}</td>
            <td>${info.university}</td>
            <td> <img src=${info.image}> </td>
         </tr>
      `;
   }

   
   placeholder.innerHTML = output;
});
}
