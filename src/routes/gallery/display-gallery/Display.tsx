function Display() {
    return(
        <div className="fadeInAnimation">
            <h1>Hola Display</h1>
            <div className="grid-gallery">
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="https://source.unsplash.com/featured/300x400/?dog"/>
                </a>
                <a className="grid-gallery__item" href="#">
                   <img className="grid-gallery__image" src="https://source.unsplash.com/featured/300x400/?woman"/>
                </a>
                <a className="grid-gallery__item" href="#">
                   <img className="grid-gallery__image" src="https://source.unsplash.com/featured/400x400/?woman"/>
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="https://source.unsplash.com/featured/300x400/?dog"/>
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="https://source.unsplash.com/featured/300x400/?dog"/>
                </a>
                <a className="grid-gallery__item" href="#">
                   <img className="grid-gallery__image" src="https://source.unsplash.com/featured/300x400/?woman"/>
                </a>
                <a className="grid-gallery__item" href="#">
                   <img className="grid-gallery__image" src="https://source.unsplash.com/featured/400x400/?woman"/>
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="https://source.unsplash.com/featured/300x400/?dog"/>
                </a>
            </div>
        </div>
    );
}

export default Display;