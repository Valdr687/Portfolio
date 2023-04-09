# Documentation

## Couleurs

1. Thème clair / par défaut :
    - Couleurs d'arrière plan :
        - Couleur de fond : --fond-page ![#f5f5ee](https://via.placeholder.com/15/f5f5ee/000000.png?text=+) `#f5f5ee`
        - Fond secondaire : --fond-2 ![#204ecc](https://via.placeholder.com/15/204ecc/000000.png?text=+) `#204ecc`
        - Fond tertiaire : --fond-3
        - Fond quaternaire : --fond-4
        - Fond sombre : --fond-sombre ![#0f0f0f](https://via.placeholder.com/15/0f0f0f/000000.png?text=+) `#0f0f0f`
    - Couleurs textes :
        - Texte : --texte ![#131212](https://via.placeholder.com/15/131212/000000.png?text=+) `#131212`
        - Citation : --citation ![#858585](https://via.placeholder.com/15/858585/000000.png?text=+) `#858585`
        - Texte clair : --texte-clair ![#eedbd3](https://via.placeholder.com/15/eedbd3/000000.png?text=+) `#eedbd3`
    - Couleurs d'accentuation :
        - Liens : --accentuation-1 ![#764d47](https://via.placeholder.com/15/764d47/000000.png?text=+) `#764d47`
    - Couleurs de survol :
        - Liens : --accentuation-2 ![#cc7320](https://via.placeholder.com/15/cc7320/000000.png?text=+) `#cc7320`

1. Thème sombre :
    - Couleurs d'arrière plan :
        - Couleur de fond : --fond-page ![#2b2a33](https://via.placeholder.com/15/2b2a33/000000.png?text=+) `#2b2a33`
        - Fond secondaire : --fond-2 ![#204ecc](https://via.placeholder.com/15/204ecc/000000.png?text=+) `#204ecc`
        - Fond tertiaire : --fond-3
        - Fond quaternaire : --fond-4
    - Couleurs textes :
        - Citation : --citation ![#858585](https://via.placeholder.com/15/858585/000000.png?text=+) `#858585`
    - Couleurs d'accentuation :
        - Liens : --accentuation-1 ![#96625a](https://via.placeholder.com/15/96625a/000000.png?text=+) `#96625a`
    - Couleurs de survol :

## Photo  

- ### Stratégie générale

  - Une grille avec nav pour la barre latérale.
  - Body sous divisé en sections pour les images.
  - Chaque sous section se décompose en l'image et une div avec le titre.

- ### Nav

  - titre : nom
  - items : div parent de la bio, du menu...
  - #menu : regroupe les "item", les liens de navigation
  - #social : liens vers les réseaux

- ### Sections

  - section-type1 : un carré + un portrait
  - section-type2 : portrait + carré
  - section-type3 : 3 portraits
  - section-type4 : 4 paysages
  - section-type5 : 2 paysages + 1 portrait

- ### Image

  - image-survol : filtre
  - image : div parent
  - image-actif : image active

## Javascript  

### Main  

- Carousel :  
  - 3 images : #img1, #img2, #img3  
  Avec #img2 l'image centrale  
  - 2 flèches : .next et .previous  

- Text carousel  

  - Fonction récursive : displayQuotes(tab,delay)  
  Avec tab le tableau contenant les strings et delay le délai entre chaque caractères en ms.  
  - #txt-rotate :  
  Sélecteur unique
