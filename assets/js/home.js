

$("#show-more-btn").on("click", togglePosts);
$("#read-more").on("click", togglePostsWithReadyMore);
$(".post-image").on("click", enlargeImage);
$(".posts-secion").on("click", resetImageSize);
$("#share-btn").on("mouseover", showToolTip);
$("#share-btn").on("mouseout", hideToolTip);
$("#share-btn").on("click", copyToClipBoard);


$(document).ready(function()
{
    togglePosts();
});

function togglePosts()
{
    $("#toggle-text").toggleClass("d-none");
    $(".toggle-posts").toggleClass("d-none");
    if($("#show-more-btn").text()=="More")
    {
        $("#show-more-btn").text("Less");
    }
    else
    {
        $("#show-more-btn").text("More");
    }
}

function togglePostsWithReadyMore()
{
    $("#toggle-text").toggleClass("d-none");
    $(".toggle-posts").toggleClass("d-none");
    $("#read-more").toggleClass("d-none");
    $("#show-more-btn").text("Less");
}

// function enlargeImage(event)
// {
//     event.stopPropagation();
//     $(this).css("height"," 100vh");
//     console.log("CLICKED");
// }


function enlargeImage(event)
{
    event.stopPropagation();
    if(!$(this).hasClass("post-image-size-enlarge"))
    {
        $(this).addClass("post-image-size-enlarge");
    }
}



function resetImageSize()
{
    let images= document.getElementsByClassName("post-image");
    $(".post-image").removeClass("post-image-size-enlarge");

}


function showToolTip()
{
    $("#tooltip-text").css("visibility","visible");
}

function hideToolTip()
{
    $("#tooltip-text").css("visibility","hidden");
}


function copyToClipBoard()
{
    $("#tooltip-text").text("Copied to clipbaord");
}