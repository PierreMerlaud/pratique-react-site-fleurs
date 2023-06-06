import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

// Carescale est un enfant de PlantItem

//  les props sont récupérées dans les paramètres de la fonction qui définit notre composant
function CareScale({ scaleValue, careType }) {

    // on crée une échelle de 1 à 3
    const range = [1, 2, 3]
    // condition en ternaire = si la valeur de careType est 'light', alors scaleType est un élément <img> avec soleil, sinon...
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

    return (
        <div
                onClick={() =>
                    alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${
                                careType === 'light' ? 'de lumière' : "d'arrosage"
                             }`
                        )
                    }
        >
                

            {/* Pour chaque élément rangeElem dans range, la condition scaleValue >= rangeElem est évaluée. */}
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()}>{scaleType}</span> 
                        : null
            )}
        </div>
    )
}

export default CareScale