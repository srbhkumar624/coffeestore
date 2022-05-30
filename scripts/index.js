// Add the coffee to local storage with key "coffee"
const url="https://masai-mock-api.herokuapp.com/coffee/menu";
fetch(url).then(function(res){
    return res.json();
})
.then(function(res){
    let data=res.menu.data;
    console.log(data);
    append(data);
})
.catch(function(err){
    console.log("error",err);
});

let arr=JSON.parse(localStorage.getItem("coffee"))||[];
 function append(data){
     data.forEach(function(el){
         let box=document.createElement("div");
         let title=document.createElement("p");
         title.innerText=el.title;
         let des=document.createElement("p");
         des.innerText=el.description;
         let imge=document.createElement("img");
         imge.src=el.image;
         let price=document.createElement("p");
         price.innerText=el.price;
         let button=document.createElement("button");
         button.innerText="Add To Bucket";
         button.setAttribute("id","add_to_bucket");
         box.append(imge,title,des,price,button);
         console.log(box);
         document.getElementById("menu").append(box);
         button.addEventListener("click",function(){
             addTocart(el);
         })


     })
 }
 function addTocart(el){
     arr.push(el);
     localStorage.setItem("coffee",JSON.stringify(arr));
     let h3=document.getElementById("coffee_count");
 h3.innerText=arr.length;
 }
 
