import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

//pour chaque entrée du tableau, on retourne un élément  <li>
//la fonction reduce a 2 paramètres : une callback et la valeur initiale de l'acc = ici un array vide.
//acc est un accumulateur qui va accumuler l'info cherchée dans un array vide, plant représente l'élément courant du tableau (l'objet parcouru)
//if il ya déjà dans acc la category récupérée dans plant, retourne juste le tableau acc, sinon retourne acc avec la nouvelle
//category insérée
//1ère itération : acc = [] , plant = { name: 'monstera', category: 'classique', id: '1ed' }
//2e itération : acc = [ 'classique' ] , plant = { name: 'ficus lyrata', category: 'classique', id: '2ab' }  etc...

function ShoppingList() {
  const categories = plantList.reduce(function (acc, plant) {
    if (acc.includes(plant.category)) {
      return acc;
    } else {
      return acc.concat(plant.category);
    }
  }, []);

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {/* je récup dans mon objet uniquement ce qui m'intéresse et je les passe en prop à PlantItem */}
        {plantList.map(
          ({ id, cover, name, water, light, isBestSale, isSpecialOffer }) => (
            <PlantItem
              id={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
              sale={isBestSale}
              offer={isSpecialOffer}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
