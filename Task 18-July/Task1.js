function display(){
    fetch("https://api.github.com/users/Sajeda-Momani/repos")
    .then(function(response){
       return response.json();
    })
    .then(function(repos){
       let placeholder = document.querySelector("#data-output");
       let output = "";
       for(let repo of repos){
          output += `
             <tr>
                <td>${repo.name}</td>
                <td>${repo.id}</td>
                <td>${repo.full_name}</td>
                <td>${repo.private}</td>
             </tr>
          `;
       }
    
       
       placeholder.innerHTML = output;
    });
    }
    