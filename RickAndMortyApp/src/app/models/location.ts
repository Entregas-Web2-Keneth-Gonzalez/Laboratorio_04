import Character from "./character";

interface location{

    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Character[];
    url: string;
    created: string;

}

export default location;