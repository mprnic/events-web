import { ConcertImg, ConferenceImg, DefaultImg } from '../assets';

export const resolveImage = type => {
    switch (type) {
        case "Conference":
            return ConferenceImg;
        case "Concert":
            return ConcertImg;
        default:
            return DefaultImg;
    }
}
