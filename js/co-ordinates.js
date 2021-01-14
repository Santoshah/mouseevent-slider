let innerEl = document.getElementById("overflow_content_inner");
document.querySelector('#overflow_content').addEventListener('mousemove', (e) => {

    let innerOffset = innerEl.offsetLeft;
    document.getElementById("co_ordinates_data").innerText = e.clientX + " "+ e.screenX + " Movement x"+ e.movementX +" inner el"+ innerOffset;
    let initial_offset = e.clientX - innerOffset;
    let currentPos = ((initial_offset/100) * innerEl.offsetWidth)/2;
    document.getElementById("overflow_content").scrollTo( currentPos , 0);

});