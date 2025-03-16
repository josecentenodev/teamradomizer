export const CHAMP_SPLASH_URL = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

export const GAME_MODES = {
    ARAM: 'aram',
    SUMMONERS_RIFT: 'summoners-rift'
} as const;

// Roles para Grieta del Invocador
export const ROLES = {
    TOP: 'Top',
    JUNGLE: 'Jungle',
    MID: 'Mid',
    ADC: 'ADC',
    SUPPORT: 'Support'
} as const;

interface ChampionInfo {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

interface ChampionImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: ChampionInfo;
    image: ChampionImage;
    tags: string[];
    partype: string;
    stats: Record<string, number>;
}

interface ChampionData {
    type: string;
    format: string;
    version: string;
    data: Record<string, Champion>;
}

// Función para obtener un campeón aleatorio del pool
export function getRandomChampion(championData: ChampionData, excludeList: string[] = []): Champion {
    const champions = Object.values(championData.data);
    const availableChamps = champions.filter(champ => !excludeList.includes(champ.id));
    const randomIndex = Math.floor(Math.random() * availableChamps.length);
    return availableChamps[randomIndex];
}

