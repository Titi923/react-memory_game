import './SingleCard.css'

export default function SingleCard( {cardProp} ) {
  return (
    <div className='card'>
      <div>
        <img className='card-front' src={cardProp.src} alt="card front image" />
        <img className='card-back' src="img/cover.png" alt="card back image" />
      </div>
    </div>
  )
}
