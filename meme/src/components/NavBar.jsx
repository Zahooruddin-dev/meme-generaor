import image from './images/Troll.png';
export default function NavBar() {
	// initially was using nav tag but later changed it to a header tag
	return (
		<header className='nav'>
			<img src={image} className='nav-img' />
			<h1 className='nav-title'>Meme Maker</h1>
			<h3 className='nav-project'>React Meme - Mizuka</h3>
		</header>
	);
}
