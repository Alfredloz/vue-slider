let root = new Vue ({
    el: '#root',
    data:{
        // array di immagini
        images:[
            'https://c4.wallpaperflare.com/wallpaper/779/394/473/30534-ramen-wallpaper-preview.jpg',
            'https://c1.wallpaperflare.com/preview/987/991/768/food-plate-wooden-table.jpg',
            'https://ak.picdn.net/shutterstock/videos/12172454/thumb/1.jpg',
            'https://ak.picdn.net/shutterstock/videos/1019623819/thumb/1.jpg'
        ],
        counter: 0,
        timing: 3000,
        
    },
    methods: {
        
        prevPics: function() {
           if (this.counter > 0) {
               this.counter--;
           } else {
               this.counter = this.images.length -1;
           }
           
        },
        nextPics: function() {
            this.counter++;
            if (this.counter > this.images.length -1) {
                this.counter = 0;
            }
        },
        //!click sulla freccia destra!
        // funzione con setInterval per far andare le foto ogni 3 secondi cliccando sulla freccai destra
        startInterval: function () {
          setInterval(this.nextPics, this.timing);  
        },
    }
});
