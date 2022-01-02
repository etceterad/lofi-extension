import axios from "axios";
import {GenreEnum, IMix, IRadio} from "./interfaces";

export const getAllGenres = async (): Promise<GenreEnum> => {
    const result = await axios.get(`${process.env.REACT_APP_MAIN_URL}/genre`);
    return result.data;
}

export const getAllRadios = async (genre: GenreEnum): Promise<IRadio[]> => {
    const result = await axios.get(`${process.env.REACT_APP_MAIN_URL + '/' + genre}/all-radios`);
    return result.data;
}

export const getAllMixes = async (genre: GenreEnum): Promise<IMix[]> => {
    const result = await axios.get(`${process.env.REACT_APP_MAIN_URL + '/' + genre}/all-mixes`);
    return result.data;
}