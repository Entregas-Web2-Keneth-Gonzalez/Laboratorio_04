import Episode from "./episode";
import location from "./location";

interface Character {

    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    origin: location;
    location: location;
    image: string;
    episode: Episode[];
    url: string;
    created: string;

}

export default Character;