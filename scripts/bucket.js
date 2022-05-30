// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketArr=JSON.parse(localStorage.getItem("coffee"))||[];
bucketArr.map(function(el,i){
    let box=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.image;
    let title=document.createElement("p");
    title.innerText=el.title;
    let des=document.createElement("p");
    des.innerText=el.description;
    let price=document.createElement("p");
    price.innerText= +(el.price);
    let button=document.createElement("button");
    button.innerText="Remove Coffee";
    button.setAttribute("id","remove_coffee");
    box.append(image,title,des,price,button);
    document.getElementById("bucket").append(box);
    button.addEventListener("click",function(){
        removeCoffee(el,i);
        location.reload();
    })
})
function removeCoffee(el,i){
    bucketArr.splice(i,1);
    localStorage.setItem("coffee",JSON.stringify(bucketArr));
}
let total=bucketArr.map(function(el){
    sum=0;
    for(let i=0;i<bucketArr.length;i++){
        sum= sum + el.price;
    }
    return sum;
})
document.getElementById("total_amount").innerText=sum;