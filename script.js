const btn = document.getElementById("gen");

btn.addEventListener("click", (e) => {
    const searchdata = document.getElementById("inputdata").value.toLowerCase();
    const img = document.getElementById("image");
    const line = document.getElementById("para");
    line.textContent = `Your Search Result Is: ${searchdata}`;

    if (searchdata === "ajith") {
        img.src = "./assets/images/Ajith Kumar.jpeg";
    }

    else if (searchdata === "vijay") {
        img.src = "./assets/images/Thalapathy Vijay.jpeg";
    }

    else if (searchdata === "str") {
        img.src = "./assets/images/str.jpg";
    }

    else if (searchdata === "jack sparrow") {
        img.src = "./assets/images/jacksparrow.jpg";
    }

    else if (searchdata === "dhanush") {
        img.src = "./assets/images/dhanush.jpg";
    }

    else if (searchdata === "sivakarthikeyan") {
        img.src = "./assets/images/Sivakarthikeyan.jpeg";
    }

    else if (searchdata === "suriya") {
        img.src = "./assets/images/suriya.jpeg";
    }

    else if (searchdata === "vijay devrakunda") {
        img.src = "./assets/images/vijay devrakunda.jpg";
    }

    else if (searchdata === "dulquer salmaan") {
        img.src = "./assets/images/dq.jpg";
    }

    else if (searchdata === "rashmika mandhanna") {
        img.src = "./assets/images/rashmika.jpg";
    }

    else if (searchdata === "pooja hegde") {
        img.src = "./assets/images/pooja.jpg";
    }

    else if (searchdata === "mamitha baiju") {
        img.src = "./assets/images/Mamitha Baiju.jpg";
    }

    else {
        line.textContent = `Your Search Data Is: ${searchdata} Not Found`;
        img.src = "";
    }

})
