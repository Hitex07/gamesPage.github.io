
//Segundos expresados numericamente en enteros
let contador = 30; 

let puntaje = 0;


function start(condition) {

    document.getElementById('topos-button').onclick = 1;

    let llamada = setTimeout( generate_topos, randomSpawnTime());
    
    const cronometro = setTimeout(tiempo_contador, 1000);

    function tiempo_contador(){

        console.log(contador);
    
        if (contador > 0) {

            document.getElementById("topos-stats-time").innerHTML = `Tiempo: ${contador}'s`;

            document.getElementById("topos-stats-points").innerHTML = `Puntaje: ${puntaje}`;

            start();

            contador--;
    
        } else {


            clearTimeout(llamada);
    
            clearTimeout(cronometro);

            contador = 30;
    
        };
 
    };

    if (condition == 1) {
        
        stop();

    }

    function stop(){

                clearTimeout(llamada);

                clearTimeout(cronometro);

                console.log("borrado");

            contador = 30;
        
            document.getElementById('topos-button').onclick = 0;

        } 

}

function randomSpawnTime() {

    let cache = Math.floor(Math.random() * (3000 - 1000) + 250)

    return cache;

}

function generate_topos() {
            
    let topo = Math.floor(Math.random() * 9) + 1;

    const topo_elegido = document.getElementById(topo.toString());

    topo_elegido.classList.remove("pozo-topo");

    topo_elegido.classList.add("topo");

    setTimeout( vanish_topo, Math.floor(Math.random() * (1750 - 1350) + 250), topo, false);

};

function vanish_topo( topo, golpe) {

    const topo_elegido = document.getElementById(topo.toString());

    if (golpe) {
        
        topo_elegido.classList.remove("golpe-topo");

    } else {

        topo_elegido.classList.remove("topo");

        topo_elegido.classList.add("pozo-topo");
    };


};

function check(id_value) {

    let sound = new Audio('../media/golpe.mp3');

    sound.volume = 0.25;

    const topo = document.getElementById(id_value.toString());
    
    let klass = topo.classList;

    if (klass == "topo") {
        
        topo.classList.add("golpe-topo");

        sound.play();

        setTimeout( vanish_topo, 800, id_value, true)

        contador += 2;

        puntaje += 1;
    
    };

};