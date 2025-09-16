function ExpandImage()
{
    $(".card-img-top").click( function() {
       this.requestFullscreen();
    });
}

ExpandImage();