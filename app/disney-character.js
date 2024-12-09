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
        <div className="ml-3 items-center justify-center z-10">
            <h3 className="text-2xl text-white font-serif bg-indigo-300 ml-3">{name}</h3>
            <img src={imageUrl} className="max-h-52 m-8"/>
            <ul className="text-white font-serif font-semibold m-8">
                <li>Name: {name}</li>
                <li>Film featured in: {films}</li>
                <li>Short films featured in: {shortFilms}</li>
                <li>Tv show featured in: {tvShows}</li>
                <li>Video games featured in: {videoGames}</li>
            </ul>
        </div>
    );
}