export default function DisneyCharacter({characterObj}){
    const {
        films,
        shortFilms,
        tvShows,
        videoGames,
        name,
        imageUrl
    } = characterObj;

    return (
        <div>
            <h3 className="text-2xl">{name}</h3>
            <img src={imageUrl} className="max-h-52 border-2 border-cyan-900"/>
            <ul>
                <li>Film featured in: {films}</li>
                <li>Short films featured in: {shortFilms}</li>
                <li>Tv show featured in: {tvShows}</li>
                <li>Video games featured in: {videoGames}</li>
            </ul>
        </div>
    );
}