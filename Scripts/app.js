/* Description: IIFE - Immediately Invokes Function Expression
   File: Assignment2
   Name: Md Rashedul Islam
   Id: 301118802 
   Webpage: https://RISHUVO.github.io/assignment2/index.html*/

(function(){
    
    
        function Start()
    {
        console.log('My app started...')
            
        //#region - Applying nav-link active to all navbar elements
        let title = document.title;
        title = title.toLowerCase();
    
        console.log(`The title of the page is ${title}`);
    
        let navAnchors = document.querySelectorAll("li a");
    
        for (const anchor of navAnchors) {
    
            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);
    
            if ((title === "home") && (anchorString === "index") || (title === anchorString)) {
                anchor.className = "nav-link active";
            }
        }
        //#endregion

        //#region - Putting text in my index page through strings
        if (title === "home") {
            let jumbotron = document.getElementsByClassName("jumbotron")[0];
            let myGreeting = document.createElement("p");
            myGreeting.textContent = "I always want to introduce myself as RIS(Rashedul Islam Shuvo). It is a short form of my name and i wanna use this name as my logo of my upcoming creation.        I am from Dhaka, Bangladesh. In my country there are still a lot of opportunity to explore. Because comparing to Canada our country didn’t use as much technology as canada.";
            jumbotron.appendChild(myGreeting);

            let jumbotron2 = document.getElementsByClassName("jumbotron")[0];
            let whoAmI = document.createElement("p");
            whoAmI.textContent = "So, after completing my college. I decided to come here and pursue my higher education. So, since January 2020, I am studying Software Engineering in Centennial College. So that I can work for my country to fulfil the gap of technology in the upcoming days.";
            jumbotron2.appendChild(whoAmI);
        }
        //#endregion
    
        //#region - Putting text in my projects page through strings
        if (title === "projects") {
            let jumbotron3 = document.getElementsByClassName("jumbotron")[0];
            let myProjects = document.createElement("p");
            myProjects.textContent = "As you lokking in my project I want to become a brand in all over the world. As i have my own logo in order to explore this. I choose three sites. Where, I can explore my idea and create many buisness opourtunities.";
            jumbotron3.appendChild(myProjects);
        }
        //#endregion

        //#region - Creating text objects in my projects' table
        if (title === "projects") {

            let projectsTable1 = document.getElementsByTagName("tr")[0];
            let projectOne = document.createElement("td");
            projectOne.textContent = "I live in Dhaka, only 20 minutes away from my university; but I get out from my house about 1 hour and 15 minutes before class will start. Because of terrible traffic jam, most of the time it takes about an hour to reach university. I remember a week, r Dhaka city was like half empty, at that week I went to university in 20 minutes.";
            projectsTable1.appendChild(projectOne);

            let projectsTable2 = document.getElementsByTagName("tr")[1];
            let projectTwo = document.createElement("td");
            projectTwo.textContent = "Despite enormous potential of tourism in Bangladesh, the sector is facing different challenges like inadequate infrastructure, high cost of doing business and lack of branding, according to a study. Other challenges include concentrated tourist attractions, absence of promotional activity and poor certification policy, said the report prepared by USAID Bangladesh. According to my next plan I will look after this problem. Because still in our country doing their publicity manually and they didn’t use properly the advantage of Technology.";
            projectsTable2.appendChild(projectTwo);

            let projectsTable3 = document.getElementsByTagName("tr")[2];
            let projectThree = document.createElement("td");
            projectThree.textContent = "My third project As the coronavirus outbreak quickly surges worldwide, many countries are adopting non-therapeutic preventive measures, which include travel bans, remote office activities, country lockdown, and most importantly, social distancing. However, these measures face challenges in Bangladesh, a lower-middle-income economy with one of the world's densest populations. Social distancing is difficult in many areas of the country, and with the minimal resources the country has, it would be extremely challenging to implement the mitigation measures. Mobile sanitization facilities and temporary quarantine sites and healthcare facilities could help mitigate the impact of the pandemic at a local level.";
            projectsTable3.appendChild(projectThree);

        }
        //#endregion

    }

    window.addEventListener("load",Start);

})();


