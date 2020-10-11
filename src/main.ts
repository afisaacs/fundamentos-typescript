import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(10, 'arendev', 'Aaron', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(12, 'TypeScript', '2020-10', PhotoOrientation.Landscape);

// Relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

user.removeAlbum(album);
console.log('user', user);
