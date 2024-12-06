import ItemSort from "./item-sort";
import SingleCharacter from "./single-character";

export default function PageGallery() {
    return (
        <main style={{ backgroundColor: 'pink'}}>
            <h1 className="text-2xl text-white font-serif font-semibold text-center">Disney Character Collection</h1>
            <p className="text-2xl text-white font-serif text-center">
                Welcome! This is a dedicated page for fans of the 
                Disney franchise for both old and new.
            </p>
            <p className="text-2xl text-white font-serif text-center"> 
                Search up iconic characters and side characters from any form of media 
                in this dedicated, beloved collection!
            </p>
            <SingleCharacter />
            
        </main>
    )
}