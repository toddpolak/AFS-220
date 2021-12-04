
export default function Description({item}) {

    return (
        <>
            <h2>{item.item}</h2>
            <div className='section'>
                <h4>{item.description}</h4>

                <div className='detail-image'>
                    <img src={`/images/${item.image}`} alt='' />
                </div>
                
            </div>
            <div className='aside'>
                <div className='add-to-cart-wrapper'>
                    <span className='add-to-cart'>Add to Cart</span>
                    <span className="detail-price">${item.price}</span>
                </div>
            </div> 
        </>
    )
}
