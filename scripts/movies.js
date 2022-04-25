// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var money=document.getElementById("wallet")
  // var data=Number(localStorage.getItem("amount"))
  var amt =Number(localStorage.getItem("amount"))
  money.innerText=amt;

  let id;

let moviesDiv = document.getElementById("movies")


async function searchMovies(){


  try{
    let input= document.getElementById("search").value;
    const res = await fetch(`http://www.omdbapi.com/?apikey=650c441&s=${input}`)
  
    let data = await res.json()
    console.log(data)
    const movies =data.Search

    return movies;
  
  }
  catch(err){
    console.log("err",err)
  }

}
var array =[]
function appMovies(data){
  if(data==undefined){
    return false
  }

  moviesDiv.innerHTML=null
  data.forEach(function(elem){

    let div1= document.createElement("div")

    let p= document.createElement("p")
    p.innerText = elem.Title

    let poster=document.createElement("img")
    poster.src=elem.Poster

    let but = document.createElement("button")
    but.innerText="Book Now"
    but.setAttribute("class","book_now")
    
    but.addEventListener("click", function(){

      array.push(elem)
      localStorage.setItem("movie",JSON.stringify(array))
      window.location.href="/checkout.html"
    })

    div1.append(poster,p,but)

    moviesDiv.append(div1)
  });
}

async function main(){
  let data = await searchMovies()

  if(data===undefined){

    return false
  }
  appMovies(data)

}

function debounce(func, delay){
  if(id){
    clearTimeout(id)
  }
  id=setTimeout(function(){
    func()
  },delay)
}


