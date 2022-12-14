import "./Start.css"
import { useEffect } 	from "react"
import rain 			from "../../assets/rainAlone.mp3"
import scream 			from "../../assets/scream_mix.mp3"

let screamObj;
let rainObj;

export const Start = ({ started, setStarted, gain }) => 
{
	useEffect (() => {
		handleAudio (started);
	}, [started])

	useEffect (() => {
		window.addEventListener ('keydown', handleEsc);
	}, []);

	const handleClick = () => { setStarted (!started); }

	const handleAudio = (inState) => 
	{
		rainObj = document.querySelector(".soundFile");
		screamObj = document.querySelector(".screamSound");

		if (inState)
		{
			rainObj.volume = 0.5;
			rainObj.play();
			rainObj.loop = true;

			screamObj.play();
			screamObj.loop = true;
		}

		else
		{
			rainObj.pause();
			screamObj.pause();
		}
	}

	const handleEsc = (event) => 
	{
		if (event.keyCode === 27){
			setStarted (false);
		}
	};

	useEffect (() => {
		let value = Math.log10 (gain) + 1

		if (value < 0.15)
			screamObj.volume = 0.15
		else if (value > 1)
			screamObj.volume = 1
		else 
			screamObj.volume = value;

	}, [gain])

	return 	(
		<div className="start" style={{ display: started ? "none" : "flex" }}>
			
			{/* <h1>Welcome</h1>
			<button onClick = {handleClick}> Start </button>
			<audio src = {rain} className="soundFile"></audio>
			<audio src = {scream} className="screamSound"></audio> */}

			<h1>La llorona</h1>

			<p>
				La leyenda de la llorona tiene muchas versiones. Se dice que el espíritu de esta mujer no descansa 
				y todas las noches se le oye llorar y lamentar con mucha tristeza por los alrededores de las calles 
				de los pueblos, Cuenta la leyenda que cuando se escucha el llanto cerca, es que la llorona está lejos; 
				pero si se escucha lejos, es que estás muy cerca y se anuncia la venida de la muerte.
			</p>

			<button onClick = {handleClick} className="button"> Start </button>

			<audio src = {rain} className="soundFile"></audio>
			<audio src = {scream} className="screamSound"></audio>

		</div>
	)

}