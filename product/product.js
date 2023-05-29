// Total Price (order now )
var btns = document.getElementById('order');
var total = document.getElementById('totalprice');
for (const btn of btns){
    btn.addEventListener('click', function(){
        var x =  total.children[1].innerHTML
        parseFloat(total.children[1].innerHTML) = parseFloat(total.children[1].innerHTML) + 1
    })
}


