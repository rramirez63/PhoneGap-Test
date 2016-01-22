window.addEventListener('load', function() {
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
	*/
    $JSView.declareView({ 
        inici: {
            url: '/inici',
            template: 'views/inici.html',
            controller: 'inici'
        },
        dia1: {
            url: '/dia1',
            template: 'views/dia1.html',
            controller: 'dia1'
        },
        dia2: {
            url: '/dia2',
            template: 'views/dia2.html',
            controller: 'dia2'
        },
        dia3: {
            url: '/dia3',
            template: 'views/dia3.html',
            controller: 'dia3'
        },
        dia4: {
            url: '/dia4',
            template: 'views/dia4.html',
            controller: 'dia4'
        },
        dia5: {
            url: '/dia5',
            template: 'views/dia5.html',
            controller: 'dia5'
        }
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modalA: {
            url: '/modalA',
            template: 'views/modalA.html',
            controller: 'modalA'
        }
    });
     
    /*Asign view start*/
    $JSView
        .initView('inici');
 
}, false);
