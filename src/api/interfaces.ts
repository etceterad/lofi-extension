export enum GenreEnum {
    Raining = 'Raining',
    Chill = 'Chill',
    Study = 'Study',
}

export interface IRadio {
    _id: string;
    url: string;
    title: string;
    genre: GenreEnum;
    author: string;
    preview: string;
    timestamp: Date;
}

export interface IMix {
    _id: string;
    url: string;
    title: string;
    genre: GenreEnum;
    author: string;
    duration: string;
    preview: string;
    timestamp: Date;
}