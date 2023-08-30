let cordinates = {}

$(document).ready(function(){
    get_cordinates();

})
function get_cordinates(){
    let searchParams = new URLSearchParams (window.location.search)
    if (searchParams.has('source')&&searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination  = searchParams.get('destination')
        cordinates.source_lat = source.split(";") [0]
        cordinates.source_lon = source.split(";") [1]
        cordinates.destination_lat = source.split(";") [0]
        cordinates.destination_lon = source.split(";") [1]
    } 
    else{
        alert("cordinates not selected")
        window.history.back();
    }
}

