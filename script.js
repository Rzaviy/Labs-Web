let tabsBtn = document.querySelectorAll(".nav-btn");
let Tabs = document.querySelectorAll(".tab");

tabsBtn.forEach(function(item) 
{
    item.addEventListener("click", function()
    {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("tab-id");
        let currentTab = document.querySelector(tabId);

        if( !currentTab.classList.contains("active") )
        {
            Tabs.forEach(function(item)
            {
                item.classList.remove("active");
            });
            
            currentTab.classList.add("active");
        }
    });
});


let gifBtn = document.querySelectorAll(".gif-btn");
let gif = document.querySelectorAll(".gif");

gifBtn.forEach(function(item)
{
    item.addEventListener("click", function()
    {
        let currentBtn = item;
        let gifId = currentBtn.getAttribute("gif-id");
        let currentGif = document.querySelector(gifId);

        currentBtn.classList.add("active");
        currentGif.classList.add("active");
        currentBtn.addEventListener("click", function()
        {
            if( currentBtn.classList.contains("active") )
            {
                currentBtn.classList.remove("active");
                currentGif.classList.remove("active");
            }
            else
            {
                currentBtn.classList.add("active");
                currentGif.classList.add("active");
            }
        });

    });
});