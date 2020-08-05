function templeSummary() {
    const templeJSON = 'json/temple.json';
    fetch(templeJSON)
        .then((response) => response.json())
        .then((templeObject) => {
            templeList = templeObject.templesList;
            // console.log(templeList);
            
            getTempleSummary(0, "barranquilla-colombia");
            getTempleSummary(2, "logan-utah");
            getTempleSummary(3, "rome-italy");

            
            function getTempleSummary(i, templeName){
                const announced = templeList[i].history.announced;
                console.log(announced);
                document.querySelector("#" + templeName + "-announced").innerHTML = announced;

                const dedicated = templeList[i].history.dedicated;
                console.log(dedicated);
                document.querySelector("#" + templeName + "-dedicated").innerHTML = dedicated;
            }
            
                
        });
};

templeSummary();

// document.querySelector(".main-content").innerHTML += '<section class = "temple-container"><h2>' + name + '</h2><div class ="temple-info"><img src="'+ imgSRC +'" alt="'+ name +'"><div class = "temple-data"><h3>Address</h3>'+ address +'<h3>Phone Number</h3>'+ phoneLink +'<h3>Service</h3>'+ service +'<h3>Ordinace Schedule</h3><h4>Baptism</h4><ul>'+ baptism +'</ul><h4>Endownment</h4><ul>'+ endownment +'</ul><h4>Sealing</h4><ul>' + sealing + ' </ul><h3>Temple Closure</h3><ul>' + templeClosure + '</ul></div></div></section>'
