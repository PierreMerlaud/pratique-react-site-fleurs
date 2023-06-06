import CareScale from "./CareScale";
import "../styles/PlantItem.css";

// PlantItem est un enfant de ShoppingList, je récup les prop en paramètres de mon composant

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}

function PlantItem({ id, cover, name, water, light, sale, offer }) {
  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}

      <div className="infos">
        {sale ? <span>🔥</span> : null}
        {offer && <div className="lmj-sales">Soldes !</div>}

        {/* on vient ajouter ici notre composant Carescale et on lui passe 2 props ici = à ma clé 'water' et 'light', 
					et aux valeurs correspondantes, donc des integers */}
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
