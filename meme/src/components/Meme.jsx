/**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
    })
     */
		/*
	return (
		<main>
			<div className='form'>
				<input type='text' className='form-input' placeholder='Top-text' />
				<input type='text' className='form-input' placeholder='Bottom-text' />
				<button type='button' className='form--button' onClick={memed}>
					Get a new meme image
				</button>
			</div>
			<img src={meme.randomImage} className='meme-img' />
			
		</main>
	);
	  function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
}*/

import memeData from '../memeData';
// Must import react from import otherwise the State won't work
import React from 'react';

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});
	const [allMemeImages, setAllMemesImages] = React.useState(memeData);
	function memed() {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
	}

  function handleChange(event){
	const{name, value} = event.target		
	setMeme(prevMeme => ({
		...prevMeme,
		[name]:value 
	}));
	}
return (
	<main>
			<div className="form">
					<input 
							type="text"
							placeholder="Top text"
							className="form--input"
							name='topText'
							value={meme.topText}                    
							onChange={handleChange}


					/>
					<input 
							type="text"
							placeholder="Bottom text"
							className="form--input"
							name='bottomText'
							value={meme.bottomText}
							onChange={handleChange}
					/>
					<button 
							className="form--button"
							onClick={memed}
					>
							Get a new meme image 🖼
					</button>
			</div>
			<div className="meme">
					<img src={meme.randomImage} className="meme--image" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
	</main>
)
}