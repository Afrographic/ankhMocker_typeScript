"use strict";
// ignore_for_file: unused_element
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AnkhMocker = void 0;
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
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
var Field = /** @class */ (function () {
    function Field(fieldType, fieldName) {
        this.fieldType = fieldType;
        this.fieldName = fieldName;
    }
    return Field;
}());
var avatars = [
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
var images = [
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
var words = [
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
var months = [
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
var AnkhMocker = /** @class */ (function () {
    function AnkhMocker() {
    }
    AnkhMocker._randomIntGenerator = function (max) {
        return Math.floor(Math.random() * max);
    };
    AnkhMocker._randomDoubleGenerator = function () {
        return parseFloat((Math.random() * 1000).toFixed(2));
    };
    AnkhMocker._randomBoolGenerator = function () {
        var date = new Date();
        return date.getSeconds() % 2 == 0;
    };
    AnkhMocker._validTextField = function (fieldName) {
        return /.*len.+/.test(fieldName);
    };
    AnkhMocker._stringGeneratorPicker = function (fieldName) {
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
        if (this._randomBoolGenerator())
            return "Sekhmet";
        return this._randomStringGenerator();
    };
    AnkhMocker._generateDate = function () {
        var monthIndex = this._randomIntGenerator(months.length - 1);
        var date = new Date();
        var year = date.getFullYear();
        return "".concat(this._randomIntGenerator(28), " ").concat(months[monthIndex], ". ").concat(year);
    };
    AnkhMocker._generateRandomText = function (fieldName) {
        var splittedString = fieldName.split("len");
        var textLeng = parseInt(splittedString[1]);
        return this.generateText(textLeng);
    };
    AnkhMocker._randomStringGenerator = function () {
        var chars = ["Ankh", "Maat", "Amon", "Afro"];
        var suffix = "";
        suffix += chars[this._randomIntGenerator(chars.length - 1)];
        return "Sekhmet-" + suffix;
    };
    AnkhMocker._generateRandomAvatar = function () {
        var index = this._randomIntGenerator(avatars.length - 1);
        return avatars[index];
    };
    AnkhMocker._generateRandomImage = function () {
        var index = this._randomIntGenerator(images.length - 1);
        return images[index];
    };
    AnkhMocker._removeAllLargeSpaces = function (fieldSchema) {
        fieldSchema = fieldSchema.trim();
        fieldSchema = fieldSchema.replaceAll(/\s+/g, " ");
        return fieldSchema;
    };
    AnkhMocker._validFieldsSchema = function (fieldSchema) {
        return /\s*((int|bool|String|double)\??\s+\S+\s*;\s+)+\s*/.test(fieldSchema);
    };
    AnkhMocker._generateRandom = function (field) {
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
    };
    AnkhMocker._parseFieldStringToArray = function (fieldsString) {
        fieldsString = fieldsString.trim();
        var fields = [];
        fieldsString = fieldsString.substring(0, fieldsString.length - 1);
        var fieldsStringArray = fieldsString.split(";");
        for (var fieldString in fieldsStringArray) {
            fields.push(this._buildField(fieldString));
        }
        return fields;
    };
    AnkhMocker._buildField = function (fieldString) {
        fieldString = fieldString.trim();
        var splitted = fieldString.split(" ");
        return new Field(splitted[0], splitted[1]);
    };
    AnkhMocker._buildRandomData = function (fields) {
        var data = {};
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            data[field.fieldName] = this._generateRandom(field);
        }
        return data;
    };
    AnkhMocker._buildMultipleRandomData = function (fields, count) {
        var data = [];
        for (var i = 0; i <= count - 1; i++) {
            var dataItem = this._buildRandomData(fields);
            data.add(dataItem);
        }
        return data;
    };
    AnkhMocker.generateDate = function () {
        return this._generateDate();
    };
    AnkhMocker.generateDateList = function (count) {
        var data = [];
        if (count > 0) {
            for (var i = 0; i <= count - 1; i++) {
                data.push(this._generateDate());
            }
        }
        else {
            data.push(this._generateDate());
        }
        return data;
    };
    AnkhMocker.generateAvatarURL = function () {
        return this._generateRandomAvatar();
    };
    AnkhMocker.generateAvatarURLList = function (count) {
        var data = [];
        if (count > 0) {
            for (var i = 0; i <= count - 1; i++) {
                data.push(this._generateRandomAvatar());
            }
        }
        else {
            data.push(this._generateRandomAvatar());
        }
        return data;
    };
    AnkhMocker.generateRandomImageURL = function () {
        return this._generateRandomImage();
    };
    AnkhMocker.generateDouble = function () {
        return this._randomDoubleGenerator();
    };
    AnkhMocker.generateDoubleList = function (count) {
        var numbers = [];
        for (var i = 0; i <= count - 1; i++) {
            numbers.push(this._randomDoubleGenerator());
        }
        return numbers;
    };
    AnkhMocker.generateImageURLList = function (count) {
        var data = [];
        if (count > 0) {
            for (var i = 0; i <= count - 1; i++) {
                data.push(this._generateRandomImage());
            }
        }
        else {
            data.push(this._generateRandomImage());
        }
        return data;
    };
    AnkhMocker.generateImageURL = function () {
        return (this._generateRandomImage());
    };
    AnkhMocker.generateInt = function () {
        return this._randomIntGenerator(500);
    };
    AnkhMocker.generateIntList = function (count) {
        var data = [];
        if (count > 0) {
            for (var i = 0; i <= count - 1; i++) {
                data.push(this._randomIntGenerator(500));
            }
        }
        else {
            data.push(this._randomIntGenerator(50));
        }
        return data;
    };
    AnkhMocker.generateTextList = function (textlength, count) {
        var texts = [];
        for (var i = 0; i <= count - 1; i++) {
            texts.push(this.generateText(textlength));
        }
        return texts;
    };
    AnkhMocker.generateText = function (totalWords) {
        var text = "";
        while (text.length < totalWords) {
            var index = this._randomIntGenerator(images.length - 1);
            text += words[index] + " ";
        }
        return text.substring(0, totalWords);
    };
    AnkhMocker.generateData = function (fieldSchema, delayInSec, count) {
        if (delayInSec === void 0) { delayInSec = 1; }
        if (count === void 0) { count = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var fieldList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sleep(delayInSec)];
                    case 1:
                        _a.sent();
                        fieldSchema = this._removeAllLargeSpaces(fieldSchema);
                        if (this._validFieldsSchema(fieldSchema)) {
                            fieldList = this._parseFieldStringToArray(fieldSchema);
                            if (count > 1) {
                                return [2 /*return*/, this._buildMultipleRandomData(fieldList, count)];
                            }
                            else {
                                return [2 /*return*/, this._buildRandomData(fieldList)];
                            }
                        }
                        else {
                            throw new Error("Invalid Field Schema,Please check the documentation");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return AnkhMocker;
}());
exports.AnkhMocker = AnkhMocker;
var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.email = "";
        this.age = 0;
    }
    User.ankh_init = "\n        String name;\n        String email;\n        int age;\n    ";
    return User;
}());
function get_users() {
    return __awaiter(this, void 0, void 0, function () {
        var users_json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, AnkhMocker.generateData(User.ankh_init, 1, 40)];
                case 1:
                    users_json = _a.sent();
                    console.log(users_json);
                    return [2 /*return*/];
            }
        });
    });
}
get_users();
