loadFonts()

function loadFonts () {
    if('fonts' in document) {

        if (sessionStorage.fontsLoaded) {
            document.documentElement.classList.add('fonts-loaded-2')
            return
        }


    document.fonts.load("1em PoppinsBoldInitial")
      .then(_ => {
        document.documentElement.classList.add('fonts-loaded-1');

        Promise.all([
            document.fonts.load('1em PoppinsBold'),
            document.fonts.load('1em PoppinsRegular'),
            document.fonts.load('1em ChunkFiveRegular')
          ]).then(_ => {
            document.documentElement.classList.add('fonts-loaded-2')

            sessionStorage.fontsLoaded = true
          }); 
      });
  }
}