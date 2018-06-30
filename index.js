$(document).ready(() => {
    $("#submitBtn").click(() => {
        getAllDetails(); //making the call
    })  
}); // end document.ready function
let myUrl=null; //URL to pass it to ajax request
let getAllDetails = () => {
    // API call to get user details
    let year=title=imdbId="";
    //setting value
    year =$("#imdbYear").val();
    title= $("#imdbTitle").val();
    imdbId = $("#imdbID").val();

    //Setting the URL Logic
    if((year !="" || year!=null)&&(title=="" || title==null)&&(imdbId==""||imdbId==null)){
        let title2= window.prompt("Title is required");
        myUrl = "https://www.omdbapi.com/?t="+title2+"&y="+year+"&apikey=280d032";
    }
    else
    myUrl = "https://www.omdbapi.com/?i="+imdbId+"&t="+title+"&y="+year+"&apikey=280d032"; 
    
    $.ajax({
        type:'GET',
        dataType:'json',
        async:true,
        url:myUrl,
        success: (response) => {
            //console.log(myUrl);//For testing purpose
            let output = `  <br>
                            <div class="media">
                            <img class="media-left" alt="image is NA" src="${response.Poster}">
                            <div class="media-body">
                            <h4 class="card-title">${response.Title}</h4>
                            <p class="card-text">${response.Genre}</p>
                            <p class="card-text">${response.Director}</p>
                            <p class="card-text">${response.Plot}</p>
                            </div>
                            </div> `
            
            $("#showData").append(output); //attaching output
        }, 
        error: (err) => {
            console.log(err.responseJSON.Message);
            alert(err.responseJSON.Message);
        }

    });// end ajax call 

}