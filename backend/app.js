
import apikey from "./apikey.js";





// returns 3 video ids based on "search" parameter 
async function Search(search) {
    const result =  await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&q=${search}&type=video&part=snippet&maxResults=3`); 

    const r = await result.json(); 
    const e = await r.items; 
     
    const listOfLinks = [];

    const t = await e.map(i => {
        listOfLinks.push(i.id.videoId); 
    })


 

    return await listOfLinks; 

}


console.log(await Search("bigway")); 



