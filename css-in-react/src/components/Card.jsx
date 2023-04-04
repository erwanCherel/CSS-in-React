import albumCover from '../assets/album_cover.jpg'
import star from '../assets/star.svg'

export default function Card() {
    return (
        <div id='card'>
            <div id='cover-title'>
                <img src={albumCover} alt="Album cover" id='album-cover'/>
                <div>
                    <h2>Unison Life</h2>
                    <h3>Brutus</h3>
                    <p>(2022)</p>
                </div>
            </div>
            <div id='rate'>
                <p>Rate this album</p>
                <div>
                <img src={star} alt="star" class="star" />
                <img src={star} alt="star" class="star" />
                <img src={star} alt="star" class="star" />
                <img src={star} alt="star" class="star" />
                <img src={star} alt="star" class="star" />
                </div>
            </div>
        </div>
    )
}