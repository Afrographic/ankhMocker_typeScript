// ignore_for_file: unused_element

/*
Author : Afrographix
This package helps you to mock an API response

for example

-----
Input
-----
{
  int idUser;
  bool isOnline;
  double height;
  String fullName;
}

------
Output
------
{
  idUser:1,
  isOnline:false,
  height:1.45,
  fullName:"Sekhmet"
}
*/




function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Field {
    fieldType: string;
    fieldName: string;

    constructor(fieldType: string, fieldName) {
        this.fieldType = fieldType;
        this.fieldName = fieldName;
    }

}



let avatars: string[] = [
    "https://image.shutterstock.com/image-vector/ankh-icon-symbol-design-religion-260nw-1216206289.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp86_1pBkW167h0tLDXu2QfpHns8CdJUXdLQ&usqp=CAU",
    "https://c8.alamy.com/compfr/had3rt/ankh-egyptienne-d-or-avec-des-ailes-brillantes-sur-un-fond-noir-symbole-magique-had3rt.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbj_IrNL12E-M1Wub43wxkj-v3hjAmfNVKfHwRaLBKU8tR0ilJdVzF_D-3facaRoPikHQ&usqp=CAU",
    "https://img.freepik.com/vecteurs-premium/oeil-horus_71843-10.jpg?w=2000",
    "https://image.shutterstock.com/image-illustration/horus-eye-falcon-god-feathers-260nw-291644468.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwM94ihhDFp9fygyl19ZvVgHFUoC2HVL7-x60LZwfmx1kBZI7wL-IYuj5O0yn39jeShg&usqp=CAU",
    "https://image.shutterstock.com/image-vector/animation-color-portrait-ancient-egyptian-260nw-1930432121.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gUJuziSdXC6tC0nyJ0QtU_RhXdhsV5Ba150yOKqczjbviCgtdB95X4zS9k01G88Fp4w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDmS3DIr8Wt2YTpy09xTToQXJ0M1yi5plAA&usqp=CAU",
    "https://image.shutterstock.com/image-vector/animation-linear-portrait-sitting-goddess-260nw-1975463477.jpg",
    "https://image.shutterstock.com/image-vector/animation-linear-portrait-sitting-goddess-260nw-1975463480.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbisiswjcySFGu5P9uLHBhaX6RVd6TDLe_oW6uEBAN9xfdkVfLgqtQKzsbotsLri5ZBQk&usqp=CAU",
    "https://m.media-amazon.com/images/I/71IokNuu2PL._AC_SX466_.jpg"
];

let images: string[] = [
    "https://afrikhepri.org/wp-content/uploads/2019/07/ob_5edc20_image.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN28gJLrePlHYWeP9aSTslwTTlOnpJ9KTpMKma7ixT5RREiD0mGSGadkPjgIki21cKN90&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbZrirwQcFDV45OaTF0MTjTLFsxn_421axT-ZUKw8_zMmPdBaPLHCQP8NmlX12GVM1mg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovGDs7UZUtkahssBzA35u3F1aWqlmViA-MGMrr7popo4kF1zrva8cfpD-MNIA5ZEndfY&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/BD_Weighing_of_the_Heart.jpg/933px-BD_Weighing_of_the_Heart.jpg",
    "https://cdn.shopify.com/s/files/1/0355/8493/4026/files/Sekhmet.jpg?v=1585753736",
    "https://cdn.thecollector.com/wp-content/uploads/2022/05/egyptian-goddess-sekhmet-sculptures.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6DUMgg8Nq9ZyGT9hqXwFlhy6PE6rAn1lQsEzBOfx8rtdbTeWKh2pkXR7-v9rTWN1-os&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJS7_2YFd3xDt3lrV0o7H7xzOTVey6mSXFg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8EWF-N4kbEzTEvNlHgeDb1UL1pVeR4WAE23Ru1K28AL0eVX3l6I-JCEIb86Qg3hlXRM&usqp=CAU",
    "https://i.pinimg.com/736x/a7/90/6a/a7906ac62442642d9350f2f7be81e3d5.jpg",
    "https://i.pinimg.com/originals/af/f8/78/aff878cc627086da565b79fefe744669.jpg",
    "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/god-imgur-michael-jan-pitura.jpg",
    "https://lh3.googleusercontent.com/lL7Mll5CmGOS9wgDUymx49jGI3PVjX7DhheQDhJpDvjfPXdXSzYicjcRytGB4LEHV0oe1ILJUeVhzKjXBfwmTCsgXJIh-6OpxsftHJc=w600",
    "https://i.pinimg.com/originals/6d/56/d7/6d56d7a9d4bd012990b4d0c66d46bce2.jpg",
    "https://i.scdn.co/image/ab67616d0000b273b31471f27bc06dcf1c74baae",
    'https://cdn.shopify.com/s/files/1/0355/8493/4026/articles/Thot_Ancienne_Egypte_v2_1200x1200.jpg?v=1594132088',
    "https://ih1.redbubble.net/image.3078798507.3899/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
    "https://i.pinimg.com/474x/55/bd/fc/55bdfcb4fdf281d1930cc57bee60dff2--egyptian-mythology-egyptian-goddess.jpg",
    "https://i.pinimg.com/originals/de/89/90/de899029a1dd18ccccc0afa92e3189fa.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRpesyQopXThxKU4OxI_J-AwXKMOJ0ARQJw&usqp=CAU",
    'https://static.wikia.nocookie.net/smite_gamepedia/images/5/51/T_Thoth_CC_Card.png/revision/latest?cb=20161104204448',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLT81iS5r2eH-Ph9HtgCSIiqcuPe1HKYKRA&usqp=CAU"
];

let words: string[] = [
    "Medu",
    "Neter",
    "Diop",
    "Cheik",
    "Sekhmet",
    "Maat",
    "kemet",
    "pharaon",
    "Sekhmet",
    "amon",
    "ra",
    "sekhmet",
    "Thot",
    "Anubis",
    "Maat",
    "Mere",
    "Africa",
    "Afrographix",
    "smart",
    "power",
    "Sekhmet",
    "maat",
    "ra",
    "amon",
    "fo",
    "africa",
    "egypt",
    "gods",
    "maat",
    "toukankhamon",
    "merer",
    "Sphynx",
    "ghizee",
    "kemet",
    "africa",
    "napata",
    "Osiris",
    "Maat",
    "Hathor",
    "Horus",
    "Anubis",
    "Set",
    "Nephthys",
    "Nut",
    "Shu",
    "Tefnut",
    "Bastet",
    "Thoth",
    "Ptah",
    "Khonsu",
    "Khnum",
    "Hapi",
    "Sobek",
    "Bes",
    "Tawaret",
    "Neith",
    "Serket",
    "Nekhbet",
    "Wadjet",
    "Kherty",
    "Nefertum",
    "Renenutet",
    "Heka",
    "Aker",
    "Anhur",
    "Aten",
    "Bennu",
    "Geb",
    "Kherpri",
    "Montu",
    "Wadj-wer",
    "Nemty",
    "Mut",
    "Sekhmet",
    "Neper",
    "Hu",
    "Imhotep",
    "Sia",
    "Menhit",
    "Mafdet",
    "Anuket",
    "Seshat",
    "Meskhenet"
];

let months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];




export class AnkhMocker {

    private static _randomIntGenerator(max: number): number {
        return Math.floor(Math.random() * max);
    }

    private static _randomDoubleGenerator(): number {
        return parseFloat((Math.random() * 1000).toFixed(2));
    }

    private static _randomBoolGenerator(): boolean {
        let date: Date = new Date();
        return date.getSeconds() % 2 == 0;
    }

    private static _validTextField(fieldName: string): boolean {
        return /.*len.+/.test(fieldName);
    }

    private static _stringGeneratorPicker(fieldName: string): string {
        if (this._validTextField(fieldName)) {
            return this._generateRandomText(fieldName);
        }
        if (fieldName.toLowerCase().includes("date")) {
            return this._generateDate();
        }
        if (fieldName.toLowerCase().includes("avatar")) {
            return this._generateRandomAvatar();
        }
        if (fieldName.toLowerCase().includes("image")) {
            return this._generateRandomImage();
        }
        if (this._randomBoolGenerator()) return "Sekhmet";
        return this._randomStringGenerator();
    }

    private static _generateDate(): string {
        let monthIndex: number = this._randomIntGenerator(months.length - 1);
        let date: Date = new Date();
        let year: number = date.getFullYear();
        return `${this._randomIntGenerator(28)} ${months[monthIndex]}. ${year}`;
    }

    private static _generateRandomText(fieldName: string): string {
        let splittedString: string[] = fieldName.split("len");
        let textLeng: number = parseInt(splittedString[1]);
        return this.generateText(textLeng);
    }

    private static _randomStringGenerator(): string {
        let chars: string[] = ["Ankh", "Maat", "Amon", "Afro"];
        let suffix: string = "";
        suffix += chars[this._randomIntGenerator(chars.length - 1)];
        return "Sekhmet-" + suffix;
    }

    private static _generateRandomAvatar(): string {
        let index: number = this._randomIntGenerator(avatars.length - 1);
        return avatars[index];
    }

    private static _generateRandomImage(): string {
        let index: number = this._randomIntGenerator(images.length - 1);
        return images[index];
    }

    private static _removeAllLargeSpaces(fieldSchema: any): string {
        fieldSchema = fieldSchema.trim();
        fieldSchema = fieldSchema.replaceAll(/\s+/g, " ");
        return fieldSchema;
    }

    private static _validFieldsSchema(fieldSchema: string): boolean {
        return /\s*((int|bool|String|double)\??\s+\S+\s*;\s+)+\s*/.test(fieldSchema);
    }

    private static _generateRandom(field: Field): any {
        switch (field.fieldType) {
            case "int":
                {
                    return this._randomIntGenerator(100);
                }

            case "int?":
                {
                    return this._randomIntGenerator(100);
                }

            case "String":
                {
                    return this._stringGeneratorPicker(field.fieldName);
                }

            case "String?":
                {
                    return this._stringGeneratorPicker(field.fieldName);
                }

            case "double":
                {
                    return this._randomDoubleGenerator();
                }

            case "double?":
                {
                    return this._randomDoubleGenerator();
                }

            case "bool":
                {
                    return this._randomBoolGenerator();
                }

            case "bool?":
                {
                    return this._randomBoolGenerator();
                }

            default:
                {
                    return -1;
                }
        }
    }

    private static _parseFieldStringToArray(fieldsString: string): Field[] {
        fieldsString = fieldsString.trim();
        let fields: Field[] = [];
        fieldsString = fieldsString.substring(0, fieldsString.length - 1);
        let fieldsStringArray: string[] = fieldsString.split(";");
        for (var fieldString in fieldsStringArray) {
            fields.push(this._buildField(fieldString));
        }
        return fields;
    }

    private static _buildField(fieldString: string): Field {
        fieldString = fieldString.trim();
        let splitted: string[] = fieldString.split(" ");
        return new Field(splitted[0], splitted[1]);
    }

    private static _buildRandomData(fields: Field[]): any {
        let data: any = {};
        for (var field of fields) {
            data[field.fieldName] = this._generateRandom(field);
        }
        return data;
    }

    private static _buildMultipleRandomData(fields: Field[], count: number): any {
        let data: any = [];
        for (let i = 0; i <= count - 1; i++) {
            var dataItem = this._buildRandomData(fields);
            data.add(dataItem);
        }
        return data;
    }

    static generateDate(): string {
        return this._generateDate();
    }

    static generateDateList(count: number): string[] {
        let data: string[] = [];
        if (count > 0) {
            for (let i = 0; i <= count - 1; i++) {
                data.push(this._generateDate());
            }
        } else {
            data.push(this._generateDate());
        }
        return data;
    }

    static generateAvatarURL(): string {
        return this._generateRandomAvatar();
    }

    static generateAvatarURLList(count: number): string[] {
        let data: string[] = [];
        if (count > 0) {
            for (let i = 0; i <= count - 1; i++) {
                data.push(this._generateRandomAvatar());
            }
        } else {
            data.push(this._generateRandomAvatar());
        }
        return data;
    }

    static generateRandomImageURL(): string {
        return this._generateRandomImage();
    }

    static generateDouble(): number {
        return this._randomDoubleGenerator();
    }

    static generateDoubleList(count: number): number[] {
        let numbers: number[] = [];
        for (let i = 0; i <= count - 1; i++) {
            numbers.push(this._randomDoubleGenerator());
        }
        return numbers;
    }

    static generateImageURLList(count: number): string[] {
        let data: string[] = [];
        if (count > 0) {
            for (let i = 0; i <= count - 1; i++) {
                data.push(this._generateRandomImage());
            }
        } else {
            data.push(this._generateRandomImage());
        }
        return data;
    }

    static generateImageURL(): string {
        return (this._generateRandomImage());
    }

    static generateInt(): number {
        return this._randomIntGenerator(500);
    }

    static generateIntList(count: number): number[] {
        let data: number[] = [];
        if (count > 0) {
            for (let i = 0; i <= count - 1; i++) {
                data.push(this._randomIntGenerator(500));
            }
        } else {
            data.push(this._randomIntGenerator(50));
        }
        return data;
    }

    static generateTextList(
        textlength: number, count: number): string[] {
        let texts: string[] = [];
        for (let i = 0; i <= count - 1; i++) {
            texts.push(this.generateText(textlength));
        }
        return texts;
    }

    static generateText(totalWords: number): string {
        let text: string = "";
        while (text.length < totalWords) {
            let index: number = this._randomIntGenerator(images.length - 1);
            text += words[index] + " ";
        }
        return text.substring(0, totalWords);
    }

    static async generateData(
        fieldSchema: string,
        delayInSec: number = 1,
        count: number = 0
    ) {
        await sleep(delayInSec);
        fieldSchema = this._removeAllLargeSpaces(fieldSchema);
        if (this._validFieldsSchema(fieldSchema)) {
            let fieldList: Field[] = this._parseFieldStringToArray(fieldSchema);
            if (count > 1) {
                return this._buildMultipleRandomData(fieldList, count);
            } else {
                return this._buildRandomData(fieldList);
            }
        } else {
            throw new Error("Invalid Field Schema,Please check the documentation");
        }
    }
}
