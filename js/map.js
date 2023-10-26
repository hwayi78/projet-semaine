const showmaplink = document.getElementById('show-map-link'); //emplacement de la carte
const mapcontainer = document.getElementById('map-container'); //action declencheur

mapcontainer.style.display = 'block'; //affichage de la carte

showmaplink.addEventListener('click', () => { //affichage de la carte apres avoir cliquer sur le lien
    mapcontainer.style.display = 'block';
}
)

closemap.addEventListener('click', () => { //fermeture de la carte apres le clic sur la croix
    mapcontainer.style.display = 'none';
}
)






