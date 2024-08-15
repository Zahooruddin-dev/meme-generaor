/**
 * Note: if you ever need the old value of state
 * to help you determine the new value of state,
 * you should pass a callback function to your
 * state setter function instead of using
 * state directly. This callback function will
 * receive the old value of state as its parameter,
 * which you can then use to determine your new
 * value of state.
 */
   /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
import memeData from '../memeData';
// Must import react from import otherwise the State won't work
import React from "react"


export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("")

  function memed() {
    const memeImg = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeImg.length);
    const url = memeImg[randomNumber].url;
    console.log(url);
    setMemeImage(url)
  }
	return (
		<main>
			<div className='form'>
				<input type='text' className='form-input' placeholder='Top-text' />
				<input type='text' className='form-input' placeholder='Bottom-text' />
				<button type='button' className='form--button' onClick={memed}>
					Get a new meme image
				</button>
			</div>
      <img src={memeImage} className='meme-img'/>
		</main>
	);
}
