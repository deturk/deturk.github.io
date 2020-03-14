let checkbox1 = document.getElementById('list-1-box');

checkbox1.addEventListener('change', function() {
    if(this.checked) {
        document.getElementById('list-2').innerHTML = '<input type="checkbox" id ="list-2-box"> Napoleon Dynamite House?';
        document.getElementById('todo-img').innerHTML = '<img src="images/preston-attractions/napoleon-dynamite-house.jpg">';

        let checkbox2 = document.getElementById('list-2-box');

        checkbox2.addEventListener('change', function() {
            if(this.checked) {
                document.getElementById('list-3').innerHTML = '<input type="checkbox" id ="list-3-box"> Johnson Reservoir?';
                document.getElementById('todo-img').innerHTML = '<img src="images/preston-attractions/johnson-reservoir.jpg">';

                let checkbox3 = document.getElementById('list-3-box');

                checkbox3.addEventListener('change', function() {
                    if(this.checked) {
                        document.getElementById('list-4').innerHTML = '<input type="checkbox" id ="list-4-box"> Glendale Reservoir?';
                        document.getElementById('todo-img').innerHTML = '<img src="images/preston-attractions/glendale-reservoir.jpg">';

                        let checkbox4 = document.getElementById('list-4-box');

                        checkbox4.addEventListener('change', function() {
                            document.getElementById("list-4").classList.toggle("crossed-out"); 
                            if(this.checked){
                                document.getElementById('prompt-local').innerHTML = '<h4>Check with the locals for more fun things to do in Preston!</h4>';   
                            } else{
                                document.getElementById('prompt-local').innerHTML = '';
                            }    
                        });

                        
                    } else{
                        document.getElementById('list-4').innerHTML = '';
                        document.getElementById("list-4").classList.remove("crossed-out");
                        document.getElementById('prompt-local').innerHTML = '';
                        document.getElementById('todo-img').innerHTML = '<img src="images/preston-attractions/johnson-reservoir.jpg">';
                    }
                    document.getElementById("list-3").classList.toggle("crossed-out");
                });

            } else{
                document.getElementById('list-3').innerHTML = '';
                document.getElementById('list-4').innerHTML = '';
                document.getElementById("list-3").classList.remove("crossed-out");
                document.getElementById("list-4").classList.remove("crossed-out");
                document.getElementById('prompt-local').innerHTML = '';
                document.getElementById('todo-img').innerHTML = '<img src="images/preston-attractions/napoleon-dynamite-house.jpg">';
            }
            document.getElementById("list-2").classList.toggle("crossed-out");
        });

    } else{
        document.getElementById('list-2').innerHTML = '';
        document.getElementById('list-3').innerHTML = '';
        document.getElementById('list-4').innerHTML = '';
        document.getElementById("list-2").classList.remove("crossed-out");
        document.getElementById("list-3").classList.remove("crossed-out");
        document.getElementById("list-4").classList.remove("crossed-out");

        document.getElementById('prompt-local').innerHTML = '';
        document.getElementById('todo-img').innerHTML = '<img src="images/preston-attractions/oneida-narrows.jpg">';
    }
    document.getElementById("list-1").classList.toggle("crossed-out");
});


