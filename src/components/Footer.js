import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    // par défaut inputValue est vide (rien dans le formulaire de saisi)
	const [inputValue, setInputValue] = useState('')

    // quand le user rentre du texte, cette fonction s'exécute et met à jour inputValue
    function handleInput(event) {
		setInputValue(event.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
                // event qui permet l'exécution d'une fonction lorsque l'user quitte un champ de formulaire
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer