const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
let query = urlParams.get('query');
let words = query.split(" ");
if(query==null) {
    words = []
}
console.log(words);
document.getElementById("search").value = query;
var videos = ["9+10", "broombroom","doitforthevine","whatarethose", "whyyoualwayslyin"]
var authors = ["OG-Reposts", "OG-Reposts","OG-Reposts","OG-Reposts", "OG-Reposts"]
videos.forEach(function (e, current) {
    if(words.length < 1) {
        words.forEach(function (f) {
            console.log("words small")
            document.write("<div class='item'><video width='320' height='240' controls><source src='videos/"+e+".mp4' type='video/mp4'></video><br><center><b><h4>"+e+"</h5><b><center><br><center><b><h3>"+authors[current]+"</h3><b><center><h5>25th May 2022</h5><br></div>")
        })
    }
    else {
        words.forEach(function (f, currentw) {
            if(e.includes(f)) {
                document.write("<div class='item'><video width='320' height='240' controls><source src='videos/"+e+".mp4' type='video/mp4'></video><br><center><b><h4>"+e+"</h5><b><center><br><center><b><h3>"+authors[current]+"</h3><b><center><h5>25th May 2022</h5><br></div>")
                console.log("spliced " + current);
                console.log(videos)
                words.splice(currentw+1, 1)
            }
        });
    }
            
            
});