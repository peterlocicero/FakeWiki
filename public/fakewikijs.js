  function postData(){
          const data = { 
            title: document.getElementById("title").value,
            content: document.getElementById("content").value 
          };

          fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            document.getElementById('party').innerHTML = ':-)';
          })
        }

        function createLi(term){
          var option=document.createElement("li");
          var link= document.createElement("a");
          link.innerHTML= term.file;
          link.href=term.href;
          

           // link.appendChild(node);
          option.appendChild(link);
          var element = document.getElementById("menu");
          element.appendChild(option);
        }




        function searchData(){

          // ul = document.getElementById("menu");
          // li= ul.getElementsByTagName("li");
          // for (i = 0; i < li.length; i++) {
          //   ul.remove(li[i]);
          // }

          const data = { 
            searchy: document.getElementById("searchy").value,
          };
          console.log(data);
 

          fetch('http://localhost:8080/endpoint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            for (var i=0; i < data.length; i++){
              createLi(data[i]);
            }

          })
        


        }

        function queryData(){
          input = document.getElementById("searchy");
          filter = input.value.toUpperCase();
          ul = document.getElementById("menu");
          li= ul.getElementsByTagName("li");

           for (i = 0; i < li.length; i++) {
             a = li[i].getElementsByTagName("a")[0];
             if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            }
             else {
             li[i].style.display = "none";
               }

        }
      }

