/**
 * Challenge:
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
import memeData from "../memeData";
 /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    function memed(){
      const memeImg = memeData.data.memes
      const randomNumber = Math.floor(Math.random() * memeImg.length)
      const url =memeImg[randomNumber].url
      console.log(url);
      
 
    }
export default function Meme() {
	return (
		<main>
			<div className="form">
				<input 
        type='text' 
        className='form-input'
        placeholder="Top-text" />
				<input 
        type='text' 
        className='form-input' 
        placeholder="Bottom-text"/>
				<button 
        type='button'
        className="form--button"
        onClick={memed}>Get a new meme image</button>
			</div>
		</main>
	);
}
