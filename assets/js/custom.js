
//This Logic is for making Webm and Mp4 video elements play automagically
window.onload = function UpdateVids()
{
    var vids = document.getElementsByTagName('video');
    if (vids[0].controls)
    {
        vids[0].controls = false;
        vids[0].preload = true;
        vids[0].muted = true;
        vids[0].loop = true;
        vids[0].autoplay = true;
        console.log("PlayerTime=" + vids[0].currentTime);

        vids[0].addEventListener('onplaying', function ()
        {
            console.log(this.currentTime.toString());
            var txt = "Clip Playing @ ";
            txt += (this.currentTime.toString() + " / " + this.duration.toString());
            txt += (" = " + (this.currentTime / this.duration).toString());
            console.log(txt.toString());

        }, false);
        vids[0].load();
    } else
    { // loop property not supported

        vids[0].addEventListener('onplaying', function ()
        {
            var txt = "Clip Playing @ ";
            txt += this.currentTime.toString() + " / " + this.duration.toString();
            txt += (" = " + (this.currentTime / this.duration).toString())
            console.log(this.currentTime.toString());
        }, false);
        vids[0].addEventListener('ended', function ()
        {
            console.log(this.currentTime.toString());

            this.currentTime = 0;
            //this.play();
        }, false);
        vids[0].play();
    }
}
