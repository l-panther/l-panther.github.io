$(document).ready(function () {

    /*
        constructor for class: id, title, type, image, features, technologies, reports, description, git) 
        
    */

    let technicalContent = "",
        technicalCount = "",

        // Project object
        build1 = new Technician(
            1,
            "dsv",
            "A website",
            "build1",
            [
                { "name": "Dual Boot OS" },
                { "name": "Intel i5 Processor" },
                { "name": "AMD Graphic Card" }
            ],
            [
                { "name": "html5" },
                { "name": "css3" },
                { "name": "javascript" },
                { "name": "bootstrap" },
                { "name": "json" },
                { "name": "krita" }
            ],
            "Mid-end Gaming",
            "cafes",
            "cafes"
        ),

        // Project object
        build2 = new Technician(
            1,
            "dsv",
            "A website",
            "build1",
            [
                { "name": "Dual Boot" },
                { "name": "i5 Processor" },
                { "name": "AMD Graphic Card" }
            ],
            [
                { "name": "html5" },
                { "name": "css3" },
                { "name": "javascript" },
                { "name": "bootstrap" },
                { "name": "json" },
                { "name": "krita" }
            ],
            "Mid-end Gaming",
            "cafes",
            "cafes"
        ),


        // Array of projects
        builds = [build1];

    // For length of result, output content
    for (var i = 0; i < builds.length; i++) {
        technicalContent += builds[i].showCarousel(i);
        technicalCount += builds[i].showCount(i);
    }

    // Insert output into html 
    $("#technicianList").html(technicalContent);
    $("#technicianCount").html(technicalCount);
});


