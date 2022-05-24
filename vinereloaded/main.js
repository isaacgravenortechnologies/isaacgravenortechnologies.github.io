function doSearch() {
    query = document.getElementById("search").value
    window.location.replace("search.html?query="+query);
}
