import './SingleCard.css'

export default function SingleCard( {propCard, propHandleChoice} ) {
  
  const handleClick = () => {
    propHandleChoice(propCard)
  }
  
  return (
    <div className='card'>
      <div>
        <img 
          className='card-front' 
          src={propCard.src} 
          alt="card front image" 
        />
        <img 
          className='card-back' 
          src="img/cover.png" 
          onClick={handleClick} 
          alt="card back image" 
        />
      </div>
    </div>
  )
}
