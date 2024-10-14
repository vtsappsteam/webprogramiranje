export class silos{
    constructor(oznaka, kapacitet){
        this.oznaka = oznaka;
        this.kapacitet = kapacitet;

        this.trenutno = 0;
        this.container = null;
    }

    sipajUSilos(kolicina){
        if(kolicina < 0){
            alert("Kolicina ne sme biti negativna!");
        }
        else{
            if(this.trenutno + kolicina < this.kapacitet)
            {
                this.trenutno += kolicina;
            }else{
                alert("Nema dovoljno mesta u: " + this.oznaka);
            }
        }

        let popuna = this.container.querySelector(".popuna");
        popuna.style.flexGrow = this.trenutno / this.kapacitet;

        let labKolicina = this.container.querySelector(".kolicina");
        labKolicina.innerHTML = this.trenutno + "t / " +
                            this.kapacitet + "t";
    }

    crtajSilos(gde) {
        this.container = document.createElement("div");
        this.container.className = "silos";
        gde.appendChild(this.container);

        let ime = document.createElement("h4");
        ime.innerHTML = this.oznaka;
        this.container.appendChild(ime);

        // 100t/1000t
        let kolicina = document.createElement("h4");
        kolicina.innerHTML = this.trenutno + "t / " +
                            this.kapacitet + "t";
        kolicina.className = "kolicina";
        this.container.appendChild(kolicina);

        let vizuelno = document.createElement("div");
        vizuelno.className = "vizuelno";
        this.container.appendChild(vizuelno);

        let popuna = document.createElement("div");
        popuna.className = "popuna";
        popuna.style.flexGrow = this.trenutno / this.kapacitet;
        vizuelno.appendChild(popuna);
    }
}