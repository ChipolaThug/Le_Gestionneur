class Salle {
    constructor(nom,x,y,width,height,lum,chau,eau,elec) {
      this.nom = nom;
      this.lumiere = false;
      this.chauffage = false;
      this.aspirateur = false;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.statsL = lum; //on mettra des veritables données plus tard
      this.statsC = chau; //on mettra des veritables données plus tard
      this.statsEau = eau; //on mettra des veritables données plus tard
      this.statsElectro = elec; //on mettra des veritables données plus tard

    }; 

    get_nom(){
        return this.nom;
    }
    get_x(){
        return this.x;
    }
    get_y(){
        return this.y;
    }
    get_width(){
        return this.width;
    }
    get_height(){
        return this.height;
    }
    getLumiere(){
        return this.lumiere;
    }
    getChauffage(){
        return this.chauffage;
    }
    getAspirateur(){
        return this.aspirateur;
    }
    getStats(){
        return this.stats;
    }

    setNom(nom){
        this.nom = nom;
    }
    setLumiere(activ){
        this.lumiere = activ;
    }
    setChauffage(activ){
        this.chauffage = activ;
    }
    setAspirateur(activ){
        this.aspirateur = activ;
    }
    setStats(){
        this.stats = null;
    }


  }