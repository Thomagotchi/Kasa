
export function Banner (img, text) {
    if (text === null) {
        return <div className='banner-container'>
                <img src={img} alt="Photo panoramique d'une vallée." className="banner-photo"/>
                
    </div>
    } else {
        return <div className='banner-container'>
                <img src={img} alt="Photo panoramique de falaises." className="banner-photo"/>
                <p>{text}</p>
        </div>
    }
}