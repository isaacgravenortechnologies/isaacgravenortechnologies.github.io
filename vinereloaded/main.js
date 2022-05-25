function doSearch() {
    query = document.getElementById("search").value
    window.location.replace("search.html?query="+query);
}
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
}
wait(500)
document.getElementById("search").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("searchbutton").click();
    }
});
