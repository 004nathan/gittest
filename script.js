window.addEventListener("load", (event) => {
getHttpRequest();
});
function getHttpRequest()
{
   const httpRequest = new XMLHttpRequest();
   httpRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(JSON.parse(httpRequest.responseText))
       let quoteObject = JSON.parse(httpRequest.responseText);
       let quote = document.getElementById("quoteText");
        let author = document.getElementById("authorText");
        // console.log(quoteObject.quote)
         quote.innerHTML=quoteObject[0].quote;
        author.innerHTML = "- "+quoteObject[0].author;
        return quoteObject;
    }
  }
  let url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
  httpRequest.open('GET',url);
  httpRequest.setRequestHeader("x-api-key","aCS6s21ieOzKE7sqceqLzA==h32c2RsJuoQKT7yX")
  httpRequest.send();
}