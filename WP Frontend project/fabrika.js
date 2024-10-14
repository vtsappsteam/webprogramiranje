export class fabrika{
    constructor(naziv){
        this.naziv = naziv;
        this.listaSilosa = [];

        this.container = null;
    }

    dodajSilos(silos){
        this.listaSilosa.push(silos);
    }

    crtajFabriku(gde){
        this.container = document.createElement("div");
        this.container.className = "fabrika";
        gde.appendChild(this.container);

        let levi = document.createElement("div");
        levi.className = "levi";
        this.container.appendChild(levi);

        let desni = document.createElement("div");
        desni.className = "desni";
        this.container.appendChild(desni);

        let naslov = document.createElement("h1");
        naslov.innerHTML = this.naziv;
        naslov.className = "naslov";
        levi.appendChild(naslov);

        let silosi = document.createElement("div");
        silosi.className = "silosi";
        levi.appendChild(silosi);

        this.listaSilosa.forEach((el, ind) => {
            el.crtajSilos(silosi);
        });

        let desniPrvi = document.createElement("div");
        desniPrvi.className = "desniPrvi";
        desni.appendChild(desniPrvi);

        let labela = document.createElement("label");
        labela.innerHTML = "Silos: ";
        desniPrvi.appendChild(labela);

        let selectEl = document.createElement("select");
        selectEl.className = "select-el";
        desniPrvi.appendChild(selectEl);

        this.listaSilosa.forEach((el, index) => {
            let opcija = document.createElement("option");
            opcija.innerHTML = el.oznaka;
            opcija.value = index; //*
            selectEl.appendChild(opcija);
        });

        let desnoDrugi = document.createElement("div");
        desnoDrugi.className = "desnoDrugi";
        desni.appendChild(desnoDrugi);

        labela = document.createElement("label");
        labela.innerHTML = "Kolicina: ";
        desnoDrugi.appendChild(labela);

        let kolicinaInp = document.createElement("input");
        kolicinaInp.type = "number";
        kolicinaInp.className = "kolicina-inp";
        desnoDrugi.appendChild(kolicinaInp);

        let dugme = document.createElement("button");
        dugme.innerHTML = "Sipaj u silos";
        dugme.className = "dugme";
        desni.appendChild(dugme);

        dugme.onclick = (ev) => this.klik(ev);
    }

    klik(event){
        console.log(event);

        // 1. uzimam u koji silos treba da sipam kolicinu
        let indexGdeSipam = this.container.querySelector(".select-el").value;

        // 2. uzimam kolicinu koju treba da sipam
        let kolicinaZaSipanje = parseInt(this.container.querySelector(".kolicina-inp").value);

        this.listaSilosa[indexGdeSipam].sipajUSilos(kolicinaZaSipanje);
    }
}