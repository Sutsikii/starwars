const video = document.getElementById('video');
const deathstar = document.getElementById('fond');
const videoDiv = document.getElementById('vod');


function play()
{

    let count = 0;
    let vod =`<video src="video/Vidéo sans titre ‐ Réalisée avec Clipchamp (1).mp4" id="video" autoplay muted></video>`;

    if(count < 1)
    {
        videoDiv.insertAdjacentHTML("afterbegin", vod);
        count = count + 1;
        console.log(count);
        return count;
    }
    else
    {
        console.log("No exec");
    }


};
