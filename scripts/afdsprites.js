function setSprites()
{
    url = window.location.toString();
    if (url.includes("teambuilder")) // User is in team builder
    {
        let setcharts = document.getElementsByClassName("setchart");

        for (let i = 0; i < setcharts.length; i++)
        {
            sprite = setcharts[i].style.backgroundImage;
            if (sprite.includes("sprites"))
            {
                sprite = sprite.replace("dex", "afd").replace("gen5", "afd");
                setcharts[i].style.backgroundImage = sprite;
            }
        }
    }
    else
    {
        if (url.includes("replay") || url.includes("battle"))
        {
            let images = document.getElementsByTagName("img");
            for (let i = 0; i < images.length; i++)
            {
                source = images[i].src;
                if (source.includes("sprites"))
                {
                    source = source.replace("ani", "afd").replace("gen5", "afd").replace(".gif", ".png");
                    images[i].setAttribute("src", source);
                }
            }
        }
    }
}

setInterval(setSprites, 200);
