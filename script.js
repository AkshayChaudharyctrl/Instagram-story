var arr =[
    {dp:"https://images.unsplash.com/photo-1692976746345-175dd589f37a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",story:"https://images.unsplash.com/photo-1692976746345-175dd589f37a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},
    {dp:"https://plus.unsplash.com/premium_photo-1691855026951-a35331fce1b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://plus.unsplash.com/premium_photo-1691855026951-a35331fce1b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    {dp:"https://plus.unsplash.com/premium_photo-1692872402795-c63e8129b788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://plus.unsplash.com/premium_photo-1692872402795-c63e8129b788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    {dp:"https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    {dp:"https://images.unsplash.com/photo-1692735809175-eb40c87ede63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1692735809175-eb40c87ede63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    {dp:"https://images.unsplash.com/photo-1692618018894-a19fea784d96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1692618018894-a19fea784d96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    {dp:"https://images.unsplash.com/photo-1692729577716-341e1c0a1f8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1692729577716-341e1c0a1f8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    {dp:"https://images.unsplash.com/photo-1692891958587-6703d20fcabe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1692891958587-6703d20fcabe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
]
var clutter =""
arr.forEach(function(e,i){
    clutter+=` <div id="story">
    <img id="${i}" src="${e.dp}" alt="">
 </div> `
})
document.querySelector("#storyian").innerHTML= clutter;

document.querySelector("#storyian").addEventListener("click",function(dets){

document.querySelector("#fullscreen").style.display ="block"
document.querySelector("#fullscreen").style.backgroundImage=`url(${ arr[dets.target.id].story})`
 setTimeout(function(){
    document.querySelector("#fullscreen").style.display ="none"
 },3000)

});