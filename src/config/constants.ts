import { routes } from "./routes";
// import cart from "../../public/logo/cartier-logo.png"
const API = {
  baseURL: "https://test.luravpn.com",
  timeout: 60000,
};

const CONFIG_TEXTS = {
  aborted: "ECONNABORTED",
  embarassing: "Oops!. This is embarassing.",
  error: "An error occurred",
  networkError: "Network Error",
  noNetwork: "Please check your internet connection and try again",
  refreshError: "Error refreshing access token",
  requestTimeout: "Request timed out",
  somethingWentWrong:
    "Something went wrong from our end. You can report this error to us or try again later.",
  validationError: "Validation error",
};
const ENVIRONMENT = {
  development: process.env.NEXT_PUBLIC_ENVIRONMENT === "development",
  production: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
  staging: process.env.NEXT_PUBLIC_ENVIRONMENT === "staging",
};

const COUNTRY_LIST = [
  // {
  //     code: 'AC',
  //     emoji: '🇦🇨',
  //     image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg',
  //     name: 'Ascension Island',
  //     unicode: 'U+1F1E6 U+1F1E8',
  // },
  {
    code: "AD",
    emoji: "🇦🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
    name: "Andorra",
    unicode: "U+1F1E6 U+1F1E9",
  },
  {
    code: "AE",
    emoji: "🇦🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
    name: "United Arab Emirates",
    unicode: "U+1F1E6 U+1F1EA",
  },
  // {
  //     code: 'AF',
  //     emoji: '🇦🇫',
  //     image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg',
  //     name: 'Afghanistan',
  //     unicode: 'U+1F1E6 U+1F1EB',
  // },
  {
    code: "AG",
    emoji: "🇦🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
    name: "Antigua & Barbuda",
    unicode: "U+1F1E6 U+1F1EC",
  },
  {
    code: "AI",
    emoji: "🇦🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
    name: "Anguilla",
    unicode: "U+1F1E6 U+1F1EE",
  },
  {
    code: "AL",
    emoji: "🇦🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
    name: "Albania",
    unicode: "U+1F1E6 U+1F1F1",
  },
  {
    code: "AM",
    emoji: "🇦🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
    name: "Armenia",
    unicode: "U+1F1E6 U+1F1F2",
  },
  {
    code: "AO",
    emoji: "🇦🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
    name: "Angola",
    unicode: "U+1F1E6 U+1F1F4",
  },
  {
    code: "AQ",
    emoji: "🇦🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg",
    name: "Antarctica",
    unicode: "U+1F1E6 U+1F1F6",
  },
  {
    code: "AR",
    emoji: "🇦🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
    name: "Argentina",
    unicode: "U+1F1E6 U+1F1F7",
  },
  {
    code: "AS",
    emoji: "🇦🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg",
    name: "American Samoa",
    unicode: "U+1F1E6 U+1F1F8",
  },
  {
    code: "AT",
    emoji: "🇦🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
    name: "Austria",
    unicode: "U+1F1E6 U+1F1F9",
  },
  {
    code: "AU",
    emoji: "🇦🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
    name: "Australia",
    unicode: "U+1F1E6 U+1F1FA",
  },
  {
    code: "AW",
    emoji: "🇦🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg",
    name: "Aruba",
    unicode: "U+1F1E6 U+1F1FC",
  },
  {
    code: "AX",
    emoji: "🇦🇽",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg",
    name: "Åland Islands",
    unicode: "U+1F1E6 U+1F1FD",
  },
  {
    code: "AZ",
    emoji: "🇦🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
    name: "Azerbaijan",
    unicode: "U+1F1E6 U+1F1FF",
  },
  {
    code: "BA",
    emoji: "🇧🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg",
    name: "Bosnia & Herzegovina",
    unicode: "U+1F1E7 U+1F1E6",
  },
  {
    code: "BB",
    emoji: "🇧🇧",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg",
    name: "Barbados",
    unicode: "U+1F1E7 U+1F1E7",
  },
  {
    code: "BD",
    emoji: "🇧🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
    name: "Bangladesh",
    unicode: "U+1F1E7 U+1F1E9",
  },
  {
    code: "BE",
    emoji: "🇧🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
    name: "Belgium",
    unicode: "U+1F1E7 U+1F1EA",
  },
  {
    code: "BF",
    emoji: "🇧🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg",
    name: "Burkina Faso",
    unicode: "U+1F1E7 U+1F1EB",
  },
  {
    code: "BG",
    emoji: "🇧🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
    name: "Bulgaria",
    unicode: "U+1F1E7 U+1F1EC",
  },
  {
    code: "BH",
    emoji: "🇧🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg",
    name: "Bahrain",
    unicode: "U+1F1E7 U+1F1ED",
  },
  {
    code: "BI",
    emoji: "🇧🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg",
    name: "Burundi",
    unicode: "U+1F1E7 U+1F1EE",
  },
  {
    code: "BJ",
    emoji: "🇧🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg",
    name: "Benin",
    unicode: "U+1F1E7 U+1F1EF",
  },
  {
    code: "BL",
    emoji: "🇧🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg",
    name: "St. Barthélemy",
    unicode: "U+1F1E7 U+1F1F1",
  },
  {
    code: "BM",
    emoji: "🇧🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg",
    name: "Bermuda",
    unicode: "U+1F1E7 U+1F1F2",
  },
  {
    code: "BN",
    emoji: "🇧🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg",
    name: "Brunei",
    unicode: "U+1F1E7 U+1F1F3",
  },
  {
    code: "BO",
    emoji: "🇧🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg",
    name: "Bolivia",
    unicode: "U+1F1E7 U+1F1F4",
  },
  {
    code: "BQ",
    emoji: "🇧🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg",
    name: "Caribbean Netherlands",
    unicode: "U+1F1E7 U+1F1F6",
  },
  {
    code: "BR",
    emoji: "🇧🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
    name: "Brazil",
    unicode: "U+1F1E7 U+1F1F7",
  },
  {
    code: "BS",
    emoji: "🇧🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg",
    name: "Bahamas",
    unicode: "U+1F1E7 U+1F1F8",
  },
  {
    code: "BT",
    emoji: "🇧🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg",
    name: "Bhutan",
    unicode: "U+1F1E7 U+1F1F9",
  },
  {
    code: "BV",
    emoji: "🇧🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg",
    name: "Bouvet Island",
    unicode: "U+1F1E7 U+1F1FB",
  },
  {
    code: "BW",
    emoji: "🇧🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg",
    name: "Botswana",
    unicode: "U+1F1E7 U+1F1FC",
  },
  {
    code: "BY",
    emoji: "🇧🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
    name: "Belarus",
    unicode: "U+1F1E7 U+1F1FE",
  },
  {
    code: "BZ",
    emoji: "🇧🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg",
    name: "Belize",
    unicode: "U+1F1E7 U+1F1FF",
  },
  {
    code: "CA",
    emoji: "🇨🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
    name: "Canada",
    unicode: "U+1F1E8 U+1F1E6",
  },
  {
    code: "CC",
    emoji: "🇨🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg",
    name: "Cocos (Keeling) Islands",
    unicode: "U+1F1E8 U+1F1E8",
  },
  {
    code: "CD",
    emoji: "🇨🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg",
    name: "Congo - Kinshasa",
    unicode: "U+1F1E8 U+1F1E9",
  },
  {
    code: "CF",
    emoji: "🇨🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg",
    name: "Central African Republic",
    unicode: "U+1F1E8 U+1F1EB",
  },
  {
    code: "CG",
    emoji: "🇨🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg",
    name: "Congo - Brazzaville",
    unicode: "U+1F1E8 U+1F1EC",
  },
  {
    code: "CH",
    emoji: "🇨🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
    name: "Switzerland",
    unicode: "U+1F1E8 U+1F1ED",
  },
  {
    code: "CI",
    emoji: "🇨🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg",
    name: "Côte d’Ivoire",
    unicode: "U+1F1E8 U+1F1EE",
  },
  {
    code: "CK",
    emoji: "🇨🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg",
    name: "Cook Islands",
    unicode: "U+1F1E8 U+1F1F0",
  },
  {
    code: "CL",
    emoji: "🇨🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg",
    name: "Chile",
    unicode: "U+1F1E8 U+1F1F1",
  },
  {
    code: "CM",
    emoji: "🇨🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg",
    name: "Cameroon",
    unicode: "U+1F1E8 U+1F1F2",
  },
  {
    code: "CN",
    emoji: "🇨🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
    name: "China",
    unicode: "U+1F1E8 U+1F1F3",
  },
  {
    code: "CO",
    emoji: "🇨🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg",
    name: "Colombia",
    unicode: "U+1F1E8 U+1F1F4",
  },
  // {
  //     code: 'CP',
  //     emoji: '🇨🇵',
  //     image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg',
  //     name: 'Clipperton Island',
  //     unicode: 'U+1F1E8 U+1F1F5',
  // },
  {
    code: "CR",
    emoji: "🇨🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg",
    name: "Costa Rica",
    unicode: "U+1F1E8 U+1F1F7",
  },
  {
    code: "CU",
    emoji: "🇨🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg",
    name: "Cuba",
    unicode: "U+1F1E8 U+1F1FA",
  },
  {
    code: "CV",
    emoji: "🇨🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg",
    name: "Cape Verde",
    unicode: "U+1F1E8 U+1F1FB",
  },
  {
    code: "CW",
    emoji: "🇨🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg",
    name: "Curaçao",
    unicode: "U+1F1E8 U+1F1FC",
  },
  {
    code: "CX",
    emoji: "🇨🇽",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg",
    name: "Christmas Island",
    unicode: "U+1F1E8 U+1F1FD",
  },
  {
    code: "CY",
    emoji: "🇨🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
    name: "Cyprus",
    unicode: "U+1F1E8 U+1F1FE",
  },
  {
    code: "CZ",
    emoji: "🇨🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg",
    name: "Czechia",
    unicode: "U+1F1E8 U+1F1FF",
  },
  {
    code: "DE",
    emoji: "🇩🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
    name: "Germany",
    unicode: "U+1F1E9 U+1F1EA",
  },
  // {
  //     code: 'DG',
  //     emoji: '🇩🇬',
  //     image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg',
  //     name: 'Diego Garcia',
  //     unicode: 'U+1F1E9 U+1F1EC',
  // },
  {
    code: "DJ",
    emoji: "🇩🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg",
    name: "Djibouti",
    unicode: "U+1F1E9 U+1F1EF",
  },
  {
    code: "DK",
    emoji: "🇩🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
    name: "Denmark",
    unicode: "U+1F1E9 U+1F1F0",
  },
  {
    code: "DM",
    emoji: "🇩🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg",
    name: "Dominica",
    unicode: "U+1F1E9 U+1F1F2",
  },
  {
    code: "DO",
    emoji: "🇩🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg",
    name: "Dominican Republic",
    unicode: "U+1F1E9 U+1F1F4",
  },
  {
    code: "DZ",
    emoji: "🇩🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
    name: "Algeria",
    unicode: "U+1F1E9 U+1F1FF",
  },
  // {
  //     code: 'EA',
  //     emoji: '🇪🇦',
  //     image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg',
  //     name: 'Ceuta & Melilla',
  //     unicode: 'U+1F1EA U+1F1E6',
  // },
  {
    code: "EC",
    emoji: "🇪🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg",
    name: "Ecuador",
    unicode: "U+1F1EA U+1F1E8",
  },
  {
    code: "EE",
    emoji: "🇪🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
    name: "Estonia",
    unicode: "U+1F1EA U+1F1EA",
  },
  {
    code: "EG",
    emoji: "🇪🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
    name: "Egypt",
    unicode: "U+1F1EA U+1F1EC",
  },
  {
    code: "EH",
    emoji: "🇪🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg",
    name: "Western Sahara",
    unicode: "U+1F1EA U+1F1ED",
  },
  {
    code: "ER",
    emoji: "🇪🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg",
    name: "Eritrea",
    unicode: "U+1F1EA U+1F1F7",
  },
  {
    code: "ES",
    emoji: "🇪🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
    name: "Spain",
    unicode: "U+1F1EA U+1F1F8",
  },
  {
    code: "ET",
    emoji: "🇪🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
    name: "Ethiopia",
    unicode: "U+1F1EA U+1F1F9",
  },
  {
    code: "EU",
    emoji: "🇪🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg",
    name: "European Union",
    unicode: "U+1F1EA U+1F1FA",
  },
  {
    code: "FI",
    emoji: "🇫🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
    name: "Finland",
    unicode: "U+1F1EB U+1F1EE",
  },
  {
    code: "FJ",
    emoji: "🇫🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg",
    name: "Fiji",
    unicode: "U+1F1EB U+1F1EF",
  },
  {
    code: "FK",
    emoji: "🇫🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg",
    name: "Falkland Islands",
    unicode: "U+1F1EB U+1F1F0",
  },
  {
    code: "FM",
    emoji: "🇫🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg",
    name: "Micronesia",
    unicode: "U+1F1EB U+1F1F2",
  },
  {
    code: "FO",
    emoji: "🇫🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg",
    name: "Faroe Islands",
    unicode: "U+1F1EB U+1F1F4",
  },
  {
    code: "FR",
    emoji: "🇫🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
    name: "France",
    unicode: "U+1F1EB U+1F1F7",
  },
  {
    code: "GA",
    emoji: "🇬🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg",
    name: "Gabon",
    unicode: "U+1F1EC U+1F1E6",
  },
  {
    code: "GB",
    emoji: "🇬🇧",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
    name: "United Kingdom",
    unicode: "U+1F1EC U+1F1E7",
  },
  {
    code: "GD",
    emoji: "🇬🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg",
    name: "Grenada",
    unicode: "U+1F1EC U+1F1E9",
  },
  {
    code: "GE",
    emoji: "🇬🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
    name: "Georgia",
    unicode: "U+1F1EC U+1F1EA",
  },
  {
    code: "GF",
    emoji: "🇬🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg",
    name: "French Guiana",
    unicode: "U+1F1EC U+1F1EB",
  },
  {
    code: "GG",
    emoji: "🇬🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg",
    name: "Guernsey",
    unicode: "U+1F1EC U+1F1EC",
  },
  {
    code: "GH",
    emoji: "🇬🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg",
    name: "Ghana",
    unicode: "U+1F1EC U+1F1ED",
  },
  {
    code: "GI",
    emoji: "🇬🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg",
    name: "Gibraltar",
    unicode: "U+1F1EC U+1F1EE",
  },
  {
    code: "GL",
    emoji: "🇬🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg",
    name: "Greenland",
    unicode: "U+1F1EC U+1F1F1",
  },
  {
    code: "GM",
    emoji: "🇬🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg",
    name: "Gambia",
    unicode: "U+1F1EC U+1F1F2",
  },
  {
    code: "GN",
    emoji: "🇬🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg",
    name: "Guinea",
    unicode: "U+1F1EC U+1F1F3",
  },
  {
    code: "GP",
    emoji: "🇬🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg",
    name: "Guadeloupe",
    unicode: "U+1F1EC U+1F1F5",
  },
  {
    code: "GQ",
    emoji: "🇬🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg",
    name: "Equatorial Guinea",
    unicode: "U+1F1EC U+1F1F6",
  },
  {
    code: "GR",
    emoji: "🇬🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
    name: "Greece",
    unicode: "U+1F1EC U+1F1F7",
  },
  {
    code: "GS",
    emoji: "🇬🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg",
    name: "South Georgia & South Sandwich Islands",
    unicode: "U+1F1EC U+1F1F8",
  },
  {
    code: "GT",
    emoji: "🇬🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg",
    name: "Guatemala",
    unicode: "U+1F1EC U+1F1F9",
  },
  {
    code: "GU",
    emoji: "🇬🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg",
    name: "Guam",
    unicode: "U+1F1EC U+1F1FA",
  },
  {
    code: "GW",
    emoji: "🇬🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg",
    name: "Guinea-Bissau",
    unicode: "U+1F1EC U+1F1FC",
  },
  {
    code: "GY",
    emoji: "🇬🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg",
    name: "Guyana",
    unicode: "U+1F1EC U+1F1FE",
  },
  {
    code: "HK",
    emoji: "🇭🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg",
    name: "Hong Kong SAR China",
    unicode: "U+1F1ED U+1F1F0",
  },
  {
    code: "HM",
    emoji: "🇭🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg",
    name: "Heard & McDonald Islands",
    unicode: "U+1F1ED U+1F1F2",
  },
  {
    code: "HN",
    emoji: "🇭🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg",
    name: "Honduras",
    unicode: "U+1F1ED U+1F1F3",
  },
  {
    code: "HR",
    emoji: "🇭🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
    name: "Croatia",
    unicode: "U+1F1ED U+1F1F7",
  },
  {
    code: "HT",
    emoji: "🇭🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg",
    name: "Haiti",
    unicode: "U+1F1ED U+1F1F9",
  },
  {
    code: "HU",
    emoji: "🇭🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
    name: "Hungary",
    unicode: "U+1F1ED U+1F1FA",
  },
  // {
  //     code: 'IC',
  //     emoji: '🇮🇨',
  //     image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg',
  //     name: 'Canary Islands',
  //     unicode: 'U+1F1EE U+1F1E8',
  // },
  {
    code: "ID",
    emoji: "🇮🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
    name: "Indonesia",
    unicode: "U+1F1EE U+1F1E9",
  },
  {
    code: "IE",
    emoji: "🇮🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
    name: "Ireland",
    unicode: "U+1F1EE U+1F1EA",
  },
  {
    code: "IL",
    emoji: "🇮🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
    name: "Israel",
    unicode: "U+1F1EE U+1F1F1",
  },
  {
    code: "IM",
    emoji: "🇮🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg",
    name: "Isle of Man",
    unicode: "U+1F1EE U+1F1F2",
  },
  {
    code: "IN",
    emoji: "🇮🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
    name: "India",
    unicode: "U+1F1EE U+1F1F3",
  },
  {
    code: "IO",
    emoji: "🇮🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg",
    name: "British Indian Ocean Territory",
    unicode: "U+1F1EE U+1F1F4",
  },
  {
    code: "IQ",
    emoji: "🇮🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg",
    name: "Iraq",
    unicode: "U+1F1EE U+1F1F6",
  },
  {
    code: "IR",
    emoji: "🇮🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg",
    name: "Iran",
    unicode: "U+1F1EE U+1F1F7",
  },
  {
    code: "IS",
    emoji: "🇮🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
    name: "Iceland",
    unicode: "U+1F1EE U+1F1F8",
  },
  {
    code: "IT",
    emoji: "🇮🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
    name: "Italy",
    unicode: "U+1F1EE U+1F1F9",
  },
  {
    code: "JE",
    emoji: "🇯🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg",
    name: "Jersey",
    unicode: "U+1F1EF U+1F1EA",
  },
  {
    code: "JM",
    emoji: "🇯🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
    name: "Jamaica",
    unicode: "U+1F1EF U+1F1F2",
  },
  {
    code: "JO",
    emoji: "🇯🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg",
    name: "Jordan",
    unicode: "U+1F1EF U+1F1F4",
  },
  {
    code: "JP",
    emoji: "🇯🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
    name: "Japan",
    unicode: "U+1F1EF U+1F1F5",
  },
  {
    code: "KE",
    emoji: "🇰🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
    name: "Kenya",
    unicode: "U+1F1F0 U+1F1EA",
  },
  {
    code: "KG",
    emoji: "🇰🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg",
    name: "Kyrgyzstan",
    unicode: "U+1F1F0 U+1F1EC",
  },
  {
    code: "KH",
    emoji: "🇰🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
    name: "Cambodia",
    unicode: "U+1F1F0 U+1F1ED",
  },
  {
    code: "KI",
    emoji: "🇰🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg",
    name: "Kiribati",
    unicode: "U+1F1F0 U+1F1EE",
  },
  {
    code: "KM",
    emoji: "🇰🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg",
    name: "Comoros",
    unicode: "U+1F1F0 U+1F1F2",
  },
  {
    code: "KN",
    emoji: "🇰🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg",
    name: "St. Kitts & Nevis",
    unicode: "U+1F1F0 U+1F1F3",
  },
  {
    code: "KP",
    emoji: "🇰🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg",
    name: "North Korea",
    unicode: "U+1F1F0 U+1F1F5",
  },
  {
    code: "KR",
    emoji: "🇰🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg",
    name: "South Korea",
    unicode: "U+1F1F0 U+1F1F7",
  },
  {
    code: "KW",
    emoji: "🇰🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg",
    name: "Kuwait",
    unicode: "U+1F1F0 U+1F1FC",
  },
  {
    code: "KY",
    emoji: "🇰🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg",
    name: "Cayman Islands",
    unicode: "U+1F1F0 U+1F1FE",
  },
  {
    code: "KZ",
    emoji: "🇰🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
    name: "Kazakhstan",
    unicode: "U+1F1F0 U+1F1FF",
  },
  {
    code: "LA",
    emoji: "🇱🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
    name: "Laos",
    unicode: "U+1F1F1 U+1F1E6",
  },
  {
    code: "LB",
    emoji: "🇱🇧",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg",
    name: "Lebanon",
    unicode: "U+1F1F1 U+1F1E7",
  },
  {
    code: "LC",
    emoji: "🇱🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg",
    name: "St. Lucia",
    unicode: "U+1F1F1 U+1F1E8",
  },
  {
    code: "LI",
    emoji: "🇱🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
    name: "Liechtenstein",
    unicode: "U+1F1F1 U+1F1EE",
  },
  {
    code: "LK",
    emoji: "🇱🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
    name: "Sri Lanka",
    unicode: "U+1F1F1 U+1F1F0",
  },
  {
    code: "LR",
    emoji: "🇱🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg",
    name: "Liberia",
    unicode: "U+1F1F1 U+1F1F7",
  },
  {
    code: "LS",
    emoji: "🇱🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg",
    name: "Lesotho",
    unicode: "U+1F1F1 U+1F1F8",
  },
  {
    code: "LT",
    emoji: "🇱🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
    name: "Lithuania",
    unicode: "U+1F1F1 U+1F1F9",
  },
  {
    code: "LU",
    emoji: "🇱🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
    name: "Luxembourg",
    unicode: "U+1F1F1 U+1F1FA",
  },
  {
    code: "LV",
    emoji: "🇱🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
    name: "Latvia",
    unicode: "U+1F1F1 U+1F1FB",
  },
  {
    code: "LY",
    emoji: "🇱🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg",
    name: "Libya",
    unicode: "U+1F1F1 U+1F1FE",
  },
  {
    code: "MA",
    emoji: "🇲🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
    name: "Morocco",
    unicode: "U+1F1F2 U+1F1E6",
  },
  {
    code: "MC",
    emoji: "🇲🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg",
    name: "Monaco",
    unicode: "U+1F1F2 U+1F1E8",
  },
  {
    code: "MD",
    emoji: "🇲🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg",
    name: "Moldova",
    unicode: "U+1F1F2 U+1F1E9",
  },
  {
    code: "ME",
    emoji: "🇲🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg",
    name: "Montenegro",
    unicode: "U+1F1F2 U+1F1EA",
  },
  {
    code: "MF",
    emoji: "🇲🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg",
    name: "St. Martin",
    unicode: "U+1F1F2 U+1F1EB",
  },
  {
    code: "MG",
    emoji: "🇲🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg",
    name: "Madagascar",
    unicode: "U+1F1F2 U+1F1EC",
  },
  {
    code: "MH",
    emoji: "🇲🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg",
    name: "Marshall Islands",
    unicode: "U+1F1F2 U+1F1ED",
  },
  {
    code: "MK",
    emoji: "🇲🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg",
    name: "North Macedonia",
    unicode: "U+1F1F2 U+1F1F0",
  },
  {
    code: "ML",
    emoji: "🇲🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg",
    name: "Mali",
    unicode: "U+1F1F2 U+1F1F1",
  },
  {
    code: "MM",
    emoji: "🇲🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg",
    name: "Myanmar (Burma)",
    unicode: "U+1F1F2 U+1F1F2",
  },
  {
    code: "MN",
    emoji: "🇲🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg",
    name: "Mongolia",
    unicode: "U+1F1F2 U+1F1F3",
  },
  {
    code: "MO",
    emoji: "🇲🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg",
    name: "Macao SAR China",
    unicode: "U+1F1F2 U+1F1F4",
  },
  {
    code: "MP",
    emoji: "🇲🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg",
    name: "Northern Mariana Islands",
    unicode: "U+1F1F2 U+1F1F5",
  },
  {
    code: "MQ",
    emoji: "🇲🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg",
    name: "Martinique",
    unicode: "U+1F1F2 U+1F1F6",
  },
  {
    code: "MR",
    emoji: "🇲🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg",
    name: "Mauritania",
    unicode: "U+1F1F2 U+1F1F7",
  },
  {
    code: "MS",
    emoji: "🇲🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg",
    name: "Montserrat",
    unicode: "U+1F1F2 U+1F1F8",
  },
  {
    code: "MT",
    emoji: "🇲🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
    name: "Malta",
    unicode: "U+1F1F2 U+1F1F9",
  },
  {
    code: "MU",
    emoji: "🇲🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg",
    name: "Mauritius",
    unicode: "U+1F1F2 U+1F1FA",
  },
  {
    code: "MV",
    emoji: "🇲🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg",
    name: "Maldives",
    unicode: "U+1F1F2 U+1F1FB",
  },
  {
    code: "MW",
    emoji: "🇲🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg",
    name: "Malawi",
    unicode: "U+1F1F2 U+1F1FC",
  },
  {
    code: "MX",
    emoji: "🇲🇽",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
    name: "Mexico",
    unicode: "U+1F1F2 U+1F1FD",
  },
  {
    code: "MY",
    emoji: "🇲🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg",
    name: "Malaysia",
    unicode: "U+1F1F2 U+1F1FE",
  },
  {
    code: "MZ",
    emoji: "🇲🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg",
    name: "Mozambique",
    unicode: "U+1F1F2 U+1F1FF",
  },
  {
    code: "NA",
    emoji: "🇳🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg",
    name: "Namibia",
    unicode: "U+1F1F3 U+1F1E6",
  },
  {
    code: "NC",
    emoji: "🇳🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg",
    name: "New Caledonia",
    unicode: "U+1F1F3 U+1F1E8",
  },
  {
    code: "NE",
    emoji: "🇳🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg",
    name: "Niger",
    unicode: "U+1F1F3 U+1F1EA",
  },
  {
    code: "NF",
    emoji: "🇳🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg",
    name: "Norfolk Island",
    unicode: "U+1F1F3 U+1F1EB",
  },
  {
    code: "NG",
    emoji: "🇳🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
    name: "Nigeria",
    unicode: "U+1F1F3 U+1F1EC",
  },
  {
    code: "NI",
    emoji: "🇳🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg",
    name: "Nicaragua",
    unicode: "U+1F1F3 U+1F1EE",
  },
  {
    code: "NL",
    emoji: "🇳🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
    name: "Netherlands",
    unicode: "U+1F1F3 U+1F1F1",
  },
  {
    code: "NO",
    emoji: "🇳🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
    name: "Norway",
    unicode: "U+1F1F3 U+1F1F4",
  },
  {
    code: "NP",
    emoji: "🇳🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
    name: "Nepal",
    unicode: "U+1F1F3 U+1F1F5",
  },
  {
    code: "NR",
    emoji: "🇳🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg",
    name: "Nauru",
    unicode: "U+1F1F3 U+1F1F7",
  },
  {
    code: "NU",
    emoji: "🇳🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg",
    name: "Niue",
    unicode: "U+1F1F3 U+1F1FA",
  },
  {
    code: "NZ",
    emoji: "🇳🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg",
    name: "New Zealand",
    unicode: "U+1F1F3 U+1F1FF",
  },
  {
    code: "OM",
    emoji: "🇴🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg",
    name: "Oman",
    unicode: "U+1F1F4 U+1F1F2",
  },
  {
    code: "PA",
    emoji: "🇵🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg",
    name: "Panama",
    unicode: "U+1F1F5 U+1F1E6",
  },
  {
    code: "PE",
    emoji: "🇵🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg",
    name: "Peru",
    unicode: "U+1F1F5 U+1F1EA",
  },
  {
    code: "PF",
    emoji: "🇵🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg",
    name: "French Polynesia",
    unicode: "U+1F1F5 U+1F1EB",
  },
  {
    code: "PG",
    emoji: "🇵🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg",
    name: "Papua New Guinea",
    unicode: "U+1F1F5 U+1F1EC",
  },
  {
    code: "PH",
    emoji: "🇵🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg",
    name: "Philippines",
    unicode: "U+1F1F5 U+1F1ED",
  },
  {
    code: "PK",
    emoji: "🇵🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
    name: "Pakistan",
    unicode: "U+1F1F5 U+1F1F0",
  },
  {
    code: "PL",
    emoji: "🇵🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
    name: "Poland",
    unicode: "U+1F1F5 U+1F1F1",
  },
  {
    code: "PM",
    emoji: "🇵🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg",
    name: "St. Pierre & Miquelon",
    unicode: "U+1F1F5 U+1F1F2",
  },
  {
    code: "PN",
    emoji: "🇵🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg",
    name: "Pitcairn Islands",
    unicode: "U+1F1F5 U+1F1F3",
  },
  {
    code: "PR",
    emoji: "🇵🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg",
    name: "Puerto Rico",
    unicode: "U+1F1F5 U+1F1F7",
  },
  {
    code: "PS",
    emoji: "🇵🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg",
    name: "Palestinian Territories",
    unicode: "U+1F1F5 U+1F1F8",
  },
  {
    code: "PT",
    emoji: "🇵🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
    name: "Portugal",
    unicode: "U+1F1F5 U+1F1F9",
  },
  {
    code: "PW",
    emoji: "🇵🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg",
    name: "Palau",
    unicode: "U+1F1F5 U+1F1FC",
  },
  {
    code: "PY",
    emoji: "🇵🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg",
    name: "Paraguay",
    unicode: "U+1F1F5 U+1F1FE",
  },
  {
    code: "QA",
    emoji: "🇶🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg",
    name: "Qatar",
    unicode: "U+1F1F6 U+1F1E6",
  },
  {
    code: "RE",
    emoji: "🇷🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg",
    name: "Réunion",
    unicode: "U+1F1F7 U+1F1EA",
  },
  {
    code: "RO",
    emoji: "🇷🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
    name: "Romania",
    unicode: "U+1F1F7 U+1F1F4",
  },
  {
    code: "RS",
    emoji: "🇷🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
    name: "Serbia",
    unicode: "U+1F1F7 U+1F1F8",
  },
  {
    code: "RU",
    emoji: "🇷🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
    name: "Russia",
    unicode: "U+1F1F7 U+1F1FA",
  },
  {
    code: "RW",
    emoji: "🇷🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg",
    name: "Rwanda",
    unicode: "U+1F1F7 U+1F1FC",
  },
  {
    code: "SA",
    emoji: "🇸🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg",
    name: "Saudi Arabia",
    unicode: "U+1F1F8 U+1F1E6",
  },
  {
    code: "SB",
    emoji: "🇸🇧",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg",
    name: "Solomon Islands",
    unicode: "U+1F1F8 U+1F1E7",
  },
  {
    code: "SC",
    emoji: "🇸🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg",
    name: "Seychelles",
    unicode: "U+1F1F8 U+1F1E8",
  },
  {
    code: "SD",
    emoji: "🇸🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg",
    name: "Sudan",
    unicode: "U+1F1F8 U+1F1E9",
  },
  {
    code: "SE",
    emoji: "🇸🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
    name: "Sweden",
    unicode: "U+1F1F8 U+1F1EA",
  },
  {
    code: "SG",
    emoji: "🇸🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg",
    name: "Singapore",
    unicode: "U+1F1F8 U+1F1EC",
  },
  {
    code: "SH",
    emoji: "🇸🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg",
    name: "St. Helena",
    unicode: "U+1F1F8 U+1F1ED",
  },
  {
    code: "SI",
    emoji: "🇸🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
    name: "Slovenia",
    unicode: "U+1F1F8 U+1F1EE",
  },
  {
    code: "SJ",
    emoji: "🇸🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg",
    name: "Svalbard & Jan Mayen",
    unicode: "U+1F1F8 U+1F1EF",
  },
  {
    code: "SK",
    emoji: "🇸🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
    name: "Slovakia",
    unicode: "U+1F1F8 U+1F1F0",
  },
  {
    code: "SL",
    emoji: "🇸🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg",
    name: "Sierra Leone",
    unicode: "U+1F1F8 U+1F1F1",
  },
  {
    code: "SM",
    emoji: "🇸🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg",
    name: "San Marino",
    unicode: "U+1F1F8 U+1F1F2",
  },
  {
    code: "SN",
    emoji: "🇸🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg",
    name: "Senegal",
    unicode: "U+1F1F8 U+1F1F3",
  },
  {
    code: "SO",
    emoji: "🇸🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg",
    name: "Somalia",
    unicode: "U+1F1F8 U+1F1F4",
  },
  {
    code: "SR",
    emoji: "🇸🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg",
    name: "Suriname",
    unicode: "U+1F1F8 U+1F1F7",
  },
  {
    code: "SS",
    emoji: "🇸🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg",
    name: "South Sudan",
    unicode: "U+1F1F8 U+1F1F8",
  },
  {
    code: "ST",
    emoji: "🇸🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg",
    name: "São Tomé & Príncipe",
    unicode: "U+1F1F8 U+1F1F9",
  },
  {
    code: "SV",
    emoji: "🇸🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg",
    name: "El Salvador",
    unicode: "U+1F1F8 U+1F1FB",
  },
  {
    code: "SX",
    emoji: "🇸🇽",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg",
    name: "Sint Maarten",
    unicode: "U+1F1F8 U+1F1FD",
  },
  {
    code: "SY",
    emoji: "🇸🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg",
    name: "Syria",
    unicode: "U+1F1F8 U+1F1FE",
  },
  {
    code: "SZ",
    emoji: "🇸🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg",
    name: "Eswatini",
    unicode: "U+1F1F8 U+1F1FF",
  },
  {
    code: "TA",
    emoji: "🇹🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg",
    name: "Tristan da Cunha",
    unicode: "U+1F1F9 U+1F1E6",
  },
  {
    code: "TC",
    emoji: "🇹🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg",
    name: "Turks & Caicos Islands",
    unicode: "U+1F1F9 U+1F1E8",
  },
  {
    code: "TD",
    emoji: "🇹🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg",
    name: "Chad",
    unicode: "U+1F1F9 U+1F1E9",
  },
  {
    code: "TF",
    emoji: "🇹🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg",
    name: "French Southern Territories",
    unicode: "U+1F1F9 U+1F1EB",
  },
  {
    code: "TG",
    emoji: "🇹🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg",
    name: "Togo",
    unicode: "U+1F1F9 U+1F1EC",
  },
  {
    code: "TH",
    emoji: "🇹🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
    name: "Thailand",
    unicode: "U+1F1F9 U+1F1ED",
  },
  {
    code: "TJ",
    emoji: "🇹🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg",
    name: "Tajikistan",
    unicode: "U+1F1F9 U+1F1EF",
  },
  {
    code: "TK",
    emoji: "🇹🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg",
    name: "Tokelau",
    unicode: "U+1F1F9 U+1F1F0",
  },
  {
    code: "TL",
    emoji: "🇹🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg",
    name: "Timor-Leste",
    unicode: "U+1F1F9 U+1F1F1",
  },
  {
    code: "TM",
    emoji: "🇹🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg",
    name: "Turkmenistan",
    unicode: "U+1F1F9 U+1F1F2",
  },
  {
    code: "TN",
    emoji: "🇹🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
    name: "Tunisia",
    unicode: "U+1F1F9 U+1F1F3",
  },
  {
    code: "TO",
    emoji: "🇹🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg",
    name: "Tonga",
    unicode: "U+1F1F9 U+1F1F4",
  },
  {
    code: "TR",
    emoji: "🇹🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
    name: "Turkey",
    unicode: "U+1F1F9 U+1F1F7",
  },
  {
    code: "TT",
    emoji: "🇹🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg",
    name: "Trinidad & Tobago",
    unicode: "U+1F1F9 U+1F1F9",
  },
  {
    code: "TV",
    emoji: "🇹🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg",
    name: "Tuvalu",
    unicode: "U+1F1F9 U+1F1FB",
  },
  {
    code: "TW",
    emoji: "🇹🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg",
    name: "Taiwan",
    unicode: "U+1F1F9 U+1F1FC",
  },
  {
    code: "TZ",
    emoji: "🇹🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg",
    name: "Tanzania",
    unicode: "U+1F1F9 U+1F1FF",
  },
  {
    code: "UA",
    emoji: "🇺🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
    name: "Ukraine",
    unicode: "U+1F1FA U+1F1E6",
  },
  {
    code: "UG",
    emoji: "🇺🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg",
    name: "Uganda",
    unicode: "U+1F1FA U+1F1EC",
  },
  {
    code: "UM",
    emoji: "🇺🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg",
    name: "U.S. Outlying Islands",
    unicode: "U+1F1FA U+1F1F2",
  },
  {
    code: "UN",
    emoji: "🇺🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg",
    name: "United Nations",
    unicode: "U+1F1FA U+1F1F3",
  },
  {
    code: "US",
    emoji: "🇺🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
    name: "United States",
    unicode: "U+1F1FA U+1F1F8",
  },
  {
    code: "UY",
    emoji: "🇺🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg",
    name: "Uruguay",
    unicode: "U+1F1FA U+1F1FE",
  },
  {
    code: "UZ",
    emoji: "🇺🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
    name: "Uzbekistan",
    unicode: "U+1F1FA U+1F1FF",
  },
  {
    code: "VA",
    emoji: "🇻🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg",
    name: "Vatican City",
    unicode: "U+1F1FB U+1F1E6",
  },
  {
    code: "VC",
    emoji: "🇻🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg",
    name: "St. Vincent & Grenadines",
    unicode: "U+1F1FB U+1F1E8",
  },
  {
    code: "VE",
    emoji: "🇻🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg",
    name: "Venezuela",
    unicode: "U+1F1FB U+1F1EA",
  },
  {
    code: "VG",
    emoji: "🇻🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg",
    name: "British Virgin Islands",
    unicode: "U+1F1FB U+1F1EC",
  },
  {
    code: "VI",
    emoji: "🇻🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg",
    name: "U.S. Virgin Islands",
    unicode: "U+1F1FB U+1F1EE",
  },
  {
    code: "VN",
    emoji: "🇻🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
    name: "Vietnam",
    unicode: "U+1F1FB U+1F1F3",
  },
  {
    code: "VU",
    emoji: "🇻🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg",
    name: "Vanuatu",
    unicode: "U+1F1FB U+1F1FA",
  },
  {
    code: "WF",
    emoji: "🇼🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg",
    name: "Wallis & Futuna",
    unicode: "U+1F1FC U+1F1EB",
  },
  {
    code: "WS",
    emoji: "🇼🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg",
    name: "Samoa",
    unicode: "U+1F1FC U+1F1F8",
  },
  {
    code: "XK",
    emoji: "🇽🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg",
    name: "Kosovo",
    unicode: "U+1F1FD U+1F1F0",
  },
  {
    code: "YE",
    emoji: "🇾🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg",
    name: "Yemen",
    unicode: "U+1F1FE U+1F1EA",
  },
  {
    code: "YT",
    emoji: "🇾🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg",
    name: "Mayotte",
    unicode: "U+1F1FE U+1F1F9",
  },
  {
    code: "ZA",
    emoji: "🇿🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
    name: "South Africa",
    unicode: "U+1F1FF U+1F1E6",
  },
  {
    code: "ZM",
    emoji: "🇿🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg",
    name: "Zambia",
    unicode: "U+1F1FF U+1F1F2",
  },
  {
    code: "ZW",
    emoji: "🇿🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg",
    name: "Zimbabwe",
    unicode: "U+1F1FF U+1F1FC",
  },
  {
    code: "gb-eng",
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
    name: "England",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F",
  },
  {
    code: "gb-sct",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg",
    name: "Scotland",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F",
  },
  {
    code: "gb-wls",
    emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg",
    name: "Wales",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F",
  },
];

const COUNTRY_CODE_LIST = [
  {
    code: "CA",
    dial_code: "1",
    emoji: "🇨🇦",
    name: "Canada",
  },
  {
    code: "US",
    dial_code: "1",
    emoji: "🇺🇸",
    name: "United States",
  },
  {
    code: "BS",
    dial_code: "1242",
    emoji: "🇧🇸",
    name: "Bahamas",
  },
  {
    code: "BB",
    dial_code: "1246",
    emoji: "🇧🇧",
    name: "Barbados",
  },
  {
    code: "AI",
    dial_code: "1264",
    emoji: "🇦🇮",
    name: "Anguilla",
  },
  {
    code: "AG",
    dial_code: "1268",
    emoji: "🇦🇬",
    name: "Antigua and Barbuda",
  },
  {
    code: "VG",
    dial_code: "1284",
    emoji: "🇻🇬",
    name: "Virgin Islands, British",
  },
  {
    code: "VI",
    dial_code: "1340",
    emoji: "🇻🇮",
    name: "Virgin Islands, U.S.",
  },
  {
    code: "BM",
    dial_code: "1441",
    emoji: "🇧🇲",
    name: "Bermuda",
  },
  {
    code: "GD",
    dial_code: "1473",
    emoji: "🇬🇩",
    name: "Grenada",
  },
  {
    code: "TC",
    dial_code: "1649",
    emoji: "🇹🇨",
    name: "Turks and Caicos Islands",
  },
  {
    code: "MS",
    dial_code: "1664",
    emoji: "🇲🇸",
    name: "Montserrat",
  },
  {
    code: "MP",
    dial_code: "1670",
    emoji: "🇲🇵",
    name: "Northern Mariana Islands",
  },
  {
    code: "GU",
    dial_code: "1671",
    emoji: "🇬🇺",
    name: "Guam",
  },
  {
    code: "AS",
    dial_code: "1684",
    emoji: "🇦🇸",
    name: "AmericanSamoa",
  },
  {
    code: "LC",
    dial_code: "1758",
    emoji: "🇱🇨",
    name: "Saint Lucia",
  },
  {
    code: "DM",
    dial_code: "1767",
    emoji: "🇩🇲",
    name: "Dominica",
  },
  {
    code: "VC",
    dial_code: "1784",
    emoji: "🇻🇨",
    name: "Saint Vincent and the Grenadines",
  },
  {
    code: "DO",
    dial_code: "1849",
    emoji: "🇩🇴",
    name: "Dominican Republic",
  },
  {
    code: "TT",
    dial_code: "1868",
    emoji: "🇹🇹",
    name: "Trinidad and Tobago",
  },
  {
    code: "KN",
    dial_code: "1869",
    emoji: "🇰🇳",
    name: "Saint Kitts and Nevis",
  },
  {
    code: "JM",
    dial_code: "1876",
    emoji: "🇯🇲",
    name: "Jamaica",
  },
  {
    code: "PR",
    dial_code: "1939",
    emoji: "🇵🇷",
    name: "Puerto Rico",
  },
  {
    code: "EG",
    dial_code: "20",
    emoji: "🇪🇬",
    name: "Egypt",
  },
  {
    code: "SS",
    dial_code: "211",
    emoji: "🇸🇸",
    name: "South Sudan",
  },
  {
    code: "MA",
    dial_code: "212",
    emoji: "🇲🇦",
    name: "Morocco",
  },
  {
    code: "DZ",
    dial_code: "213",
    emoji: "🇩🇿",
    name: "Algeria",
  },
  {
    code: "TN",
    dial_code: "216",
    emoji: "🇹🇳",
    name: "Tunisia",
  },
  {
    code: "LY",
    dial_code: "218",
    emoji: "🇱🇾",
    name: "Libyan Arab Jamahiriya",
  },
  {
    code: "GM",
    dial_code: "220",
    emoji: "🇬🇲",
    name: "Gambia",
  },
  {
    code: "SN",
    dial_code: "221",
    emoji: "🇸🇳",
    name: "Senegal",
  },
  {
    code: "MR",
    dial_code: "222",
    emoji: "🇲🇷",
    name: "Mauritania",
  },
  {
    code: "ML",
    dial_code: "223",
    emoji: "🇲🇱",
    name: "Mali",
  },
  {
    code: "GN",
    dial_code: "224",
    emoji: "🇬🇳",
    name: "Guinea",
  },
  {
    code: "CI",
    dial_code: "225",
    emoji: "🇨🇮",
    name: "Cote d'Ivoire",
  },
  {
    code: "BF",
    dial_code: "226",
    emoji: "🇧🇫",
    name: "Burkina Faso",
  },
  {
    code: "NE",
    dial_code: "227",
    emoji: "🇳🇪",
    name: "Niger",
  },
  {
    code: "TG",
    dial_code: "228",
    emoji: "🇹🇬",
    name: "Togo",
  },
  {
    code: "BJ",
    dial_code: "229",
    emoji: "🇧🇯",
    name: "Benin",
  },
  {
    code: "MU",
    dial_code: "230",
    emoji: "🇲🇺",
    name: "Mauritius",
  },
  {
    code: "LR",
    dial_code: "231",
    emoji: "🇱🇷",
    name: "Liberia",
  },
  {
    code: "SL",
    dial_code: "232",
    emoji: "🇸🇱",
    name: "Sierra Leone",
  },
  {
    code: "GH",
    dial_code: "233",
    emoji: "🇬🇭",
    name: "Ghana",
  },
  {
    code: "NG",
    dial_code: "234",
    emoji: "🇳🇬",
    name: "Nigeria",
  },
  {
    code: "TD",
    dial_code: "235",
    emoji: "🇹🇩",
    name: "Chad",
  },
  {
    code: "CF",
    dial_code: "236",
    emoji: "🇨🇫",
    name: "Central African Republic",
  },
  {
    code: "CM",
    dial_code: "237",
    emoji: "🇨🇲",
    name: "Cameroon",
  },
  {
    code: "CV",
    dial_code: "238",
    emoji: "🇨🇻",
    name: "Cape Verde",
  },
  {
    code: "ST",
    dial_code: "239",
    emoji: "🇸🇹",
    name: "Sao Tome and Principe",
  },
  {
    code: "GQ",
    dial_code: "240",
    emoji: "🇬🇶",
    name: "Equatorial Guinea",
  },
  {
    code: "GA",
    dial_code: "241",
    emoji: "🇬🇦",
    name: "Gabon",
  },
  {
    code: "CG",
    dial_code: "242",
    emoji: "🇨🇬",
    name: "Congo",
  },
  {
    code: "CD",
    dial_code: "243",
    emoji: "🇨🇩",
    name: "Congo, The Democratic Republic of the Congo",
  },
  {
    code: "AO",
    dial_code: "244",
    emoji: "🇦🇴",
    name: "Angola",
  },
  {
    code: "GW",
    dial_code: "245",
    emoji: "🇬🇼",
    name: "Guinea-Bissau",
  },
  {
    code: "IO",
    dial_code: "246",
    emoji: "🇮🇴",
    name: "British Indian Ocean Territory",
  },
  {
    code: "SC",
    dial_code: "248",
    emoji: "🇸🇨",
    name: "Seychelles",
  },
  {
    code: "SD",
    dial_code: "249",
    emoji: "🇸🇩",
    name: "Sudan",
  },
  {
    code: "RW",
    dial_code: "250",
    emoji: "🇷🇼",
    name: "Rwanda",
  },
  {
    code: "ET",
    dial_code: "251",
    emoji: "🇪🇹",
    name: "Ethiopia",
  },
  {
    code: "SO",
    dial_code: "252",
    emoji: "🇸🇴",
    name: "Somalia",
  },
  {
    code: "DJ",
    dial_code: "253",
    emoji: "🇩🇯",
    name: "Djibouti",
  },
  {
    code: "KE",
    dial_code: "254",
    emoji: "🇰🇪",
    name: "Kenya",
  },
  {
    code: "TZ",
    dial_code: "255",
    emoji: "🇹🇿",
    name: "Tanzania, United Republic of Tanzania",
  },
  {
    code: "UG",
    dial_code: "256",
    emoji: "🇺🇬",
    name: "Uganda",
  },
  {
    code: "BI",
    dial_code: "257",
    emoji: "🇧🇮",
    name: "Burundi",
  },
  {
    code: "MZ",
    dial_code: "258",
    emoji: "🇲🇿",
    name: "Mozambique",
  },
  {
    code: "ZM",
    dial_code: "260",
    emoji: "🇿🇲",
    name: "Zambia",
  },
  {
    code: "MG",
    dial_code: "261",
    emoji: "🇲🇬",
    name: "Madagascar",
  },
  {
    code: "YT",
    dial_code: "262",
    emoji: "🇾🇹",
    name: "Mayotte",
  },
  {
    code: "RE",
    dial_code: "262",
    emoji: "🇷🇪",
    name: "Reunion",
  },
  {
    code: "ZW",
    dial_code: "263",
    emoji: "🇿🇼",
    name: "Zimbabwe",
  },
  {
    code: "NA",
    dial_code: "264",
    emoji: "🇳🇦",
    name: "Namibia",
  },
  {
    code: "MW",
    dial_code: "265",
    emoji: "🇲🇼",
    name: "Malawi",
  },
  {
    code: "LS",
    dial_code: "266",
    emoji: "🇱🇸",
    name: "Lesotho",
  },
  {
    code: "BW",
    dial_code: "267",
    emoji: "🇧🇼",
    name: "Botswana",
  },
  {
    code: "SZ",
    dial_code: "268",
    emoji: "🇸🇿",
    name: "Swaziland",
  },
  {
    code: "KM",
    dial_code: "269",
    emoji: "🇰🇲",
    name: "Comoros",
  },
  {
    code: "ZA",
    dial_code: "27",
    emoji: "🇿🇦",
    name: "South Africa",
  },
  {
    code: "SH",
    dial_code: "290",
    emoji: "🇸🇭",
    name: "Saint Helena, Ascension and Tristan Da Cunha",
  },
  {
    code: "ER",
    dial_code: "291",
    emoji: "🇪🇷",
    name: "Eritrea",
  },
  {
    code: "AW",
    dial_code: "297",
    emoji: "🇦🇼",
    name: "Aruba",
  },
  {
    code: "FO",
    dial_code: "298",
    emoji: "🇫🇴",
    name: "Faroe Islands",
  },
  {
    code: "GL",
    dial_code: "299",
    emoji: "🇬🇱",
    name: "Greenland",
  },
  {
    code: "GR",
    dial_code: "30",
    emoji: "🇬🇷",
    name: "Greece",
  },
  {
    code: "NL",
    dial_code: "31",
    emoji: "🇳🇱",
    name: "Netherlands",
  },
  {
    code: "BE",
    dial_code: "32",
    emoji: "🇧🇪",
    name: "Belgium",
  },
  {
    code: "FR",
    dial_code: "33",
    emoji: "🇫🇷",
    name: "France",
  },
  {
    code: "ES",
    dial_code: "34",
    emoji: "🇪🇸",
    name: "Spain",
  },
  {
    code: "KY",
    dial_code: "345",
    emoji: "🇰🇾",
    name: "Cayman Islands",
  },
  {
    code: "GI",
    dial_code: "350",
    emoji: "🇬🇮",
    name: "Gibraltar",
  },
  {
    code: "PT",
    dial_code: "351",
    emoji: "🇵🇹",
    name: "Portugal",
  },
  {
    code: "LU",
    dial_code: "352",
    emoji: "🇱🇺",
    name: "Luxembourg",
  },
  {
    code: "IE",
    dial_code: "353",
    emoji: "🇮🇪",
    name: "Ireland",
  },
  {
    code: "IS",
    dial_code: "354",
    emoji: "🇮🇸",
    name: "Iceland",
  },
  {
    code: "AL",
    dial_code: "355",
    emoji: "🇦🇱",
    name: "Albania",
  },
  {
    code: "MT",
    dial_code: "356",
    emoji: "🇲🇹",
    name: "Malta",
  },
  {
    code: "CY",
    dial_code: "357",
    emoji: "🇨🇾",
    name: "Cyprus",
  },
  {
    code: "AX",
    dial_code: "358",
    emoji: "🇦🇽",
    name: "Aland Islands",
  },
  {
    code: "FI",
    dial_code: "358",
    emoji: "🇫🇮",
    name: "Finland",
  },
  {
    code: "BG",
    dial_code: "359",
    emoji: "🇧🇬",
    name: "Bulgaria",
  },
  {
    code: "HU",
    dial_code: "36",
    emoji: "🇭🇺",
    name: "Hungary",
  },
  {
    code: "LT",
    dial_code: "370",
    emoji: "🇱🇹",
    name: "Lithuania",
  },
  {
    code: "LV",
    dial_code: "371",
    emoji: "🇱🇻",
    name: "Latvia",
  },
  {
    code: "EE",
    dial_code: "372",
    emoji: "🇪🇪",
    name: "Estonia",
  },
  {
    code: "MD",
    dial_code: "373",
    emoji: "🇲🇩",
    name: "Moldova",
  },
  {
    code: "AM",
    dial_code: "374",
    emoji: "🇦🇲",
    name: "Armenia",
  },
  {
    code: "BY",
    dial_code: "375",
    emoji: "🇧🇾",
    name: "Belarus",
  },
  {
    code: "AD",
    dial_code: "376",
    emoji: "🇦🇩",
    name: "Andorra",
  },
  {
    code: "MC",
    dial_code: "377",
    emoji: "🇲🇨",
    name: "Monaco",
  },
  {
    code: "SM",
    dial_code: "378",
    emoji: "🇸🇲",
    name: "San Marino",
  },
  {
    code: "VA",
    dial_code: "379",
    emoji: "🇻🇦",
    name: "Holy See (Vatican City State)",
  },
  {
    code: "UA",
    dial_code: "380",
    emoji: "🇺🇦",
    name: "Ukraine",
  },
  {
    code: "RS",
    dial_code: "381",
    emoji: "🇷🇸",
    name: "Serbia",
  },
  {
    code: "ME",
    dial_code: "382",
    emoji: "🇲🇪",
    name: "Montenegro",
  },
  {
    code: "HR",
    dial_code: "385",
    emoji: "🇭🇷",
    name: "Croatia",
  },
  {
    code: "SI",
    dial_code: "386",
    emoji: "🇸🇮",
    name: "Slovenia",
  },
  {
    code: "BA",
    dial_code: "387",
    emoji: "🇧🇦",
    name: "Bosnia and Herzegovina",
  },
  {
    code: "MK",
    dial_code: "389",
    emoji: "🇲🇰",
    name: "Macedonia",
  },
  {
    code: "IT",
    dial_code: "39",
    emoji: "🇮🇹",
    name: "Italy",
  },
  {
    code: "RO",
    dial_code: "40",
    emoji: "🇷🇴",
    name: "Romania",
  },
  {
    code: "CH",
    dial_code: "41",
    emoji: "🇨🇭",
    name: "Switzerland",
  },
  {
    code: "CZ",
    dial_code: "420",
    emoji: "🇨🇿",
    name: "Czech Republic",
  },
  {
    code: "SK",
    dial_code: "421",
    emoji: "🇸🇰",
    name: "Slovakia",
  },
  {
    code: "LI",
    dial_code: "423",
    emoji: "🇱🇮",
    name: "Liechtenstein",
  },
  {
    code: "AT",
    dial_code: "43",
    emoji: "🇦🇹",
    name: "Austria",
  },
  {
    code: "GG",
    dial_code: "44",
    emoji: "🇬🇬",
    name: "Guernsey",
  },
  {
    code: "IM",
    dial_code: "44",
    emoji: "🇮🇲",
    name: "Isle of Man",
  },
  {
    code: "JE",
    dial_code: "44",
    emoji: "🇯🇪",
    name: "Jersey",
  },
  {
    code: "GB",
    dial_code: "44",
    emoji: "🇬🇧",
    name: "United Kingdom",
  },
  {
    code: "DK",
    dial_code: "45",
    emoji: "🇩🇰",
    name: "Denmark",
  },
  {
    code: "SE",
    dial_code: "46",
    emoji: "🇸🇪",
    name: "Sweden",
  },
  {
    code: "NO",
    dial_code: "47",
    emoji: "🇳🇴",
    name: "Norway",
  },
  {
    code: "SJ",
    dial_code: "47",
    emoji: "🇸🇯",
    name: "Svalbard and Jan Mayen",
  },
  {
    code: "PL",
    dial_code: "48",
    emoji: "🇵🇱",
    name: "Poland",
  },
  {
    code: "DE",
    dial_code: "49",
    emoji: "🇩🇪",
    name: "Germany",
  },
  {
    code: "FK",
    dial_code: "500",
    emoji: "🇫🇰",
    name: "Falkland Islands (Malvinas)",
  },
  {
    code: "GS",
    dial_code: "500",
    emoji: "🇬🇸",
    name: "South Georgia and the South Sandwich Islands",
  },
  {
    code: "BZ",
    dial_code: "501",
    emoji: "🇧🇿",
    name: "Belize",
  },
  {
    code: "GT",
    dial_code: "502",
    emoji: "🇬🇹",
    name: "Guatemala",
  },
  {
    code: "SV",
    dial_code: "503",
    emoji: "🇸🇻",
    name: "El Salvador",
  },
  {
    code: "HN",
    dial_code: "504",
    emoji: "🇭🇳",
    name: "Honduras",
  },
  {
    code: "NI",
    dial_code: "505",
    emoji: "🇳🇮",
    name: "Nicaragua",
  },
  {
    code: "CR",
    dial_code: "506",
    emoji: "🇨🇷",
    name: "Costa Rica",
  },
  {
    code: "PA",
    dial_code: "507",
    emoji: "🇵🇦",
    name: "Panama",
  },
  {
    code: "PM",
    dial_code: "508",
    emoji: "🇵🇲",
    name: "Saint Pierre and Miquelon",
  },
  {
    code: "HT",
    dial_code: "509",
    emoji: "🇭🇹",
    name: "Haiti",
  },
  {
    code: "PE",
    dial_code: "51",
    emoji: "🇵🇪",
    name: "Peru",
  },
  {
    code: "MX",
    dial_code: "52",
    emoji: "🇲🇽",
    name: "Mexico",
  },
  {
    code: "CU",
    dial_code: "53",
    emoji: "🇨🇺",
    name: "Cuba",
  },
  {
    code: "AR",
    dial_code: "54",
    emoji: "🇦🇷",
    name: "Argentina",
  },
  {
    code: "BR",
    dial_code: "55",
    emoji: "🇧🇷",
    name: "Brazil",
  },
  {
    code: "CL",
    dial_code: "56",
    emoji: "🇨🇱",
    name: "Chile",
  },
  {
    code: "CO",
    dial_code: "57",
    emoji: "🇨🇴",
    name: "Colombia",
  },
  {
    code: "VE",
    dial_code: "58",
    emoji: "🇻🇪",
    name: "Venezuela, Bolivarian Republic of Venezuela",
  },
  {
    code: "GP",
    dial_code: "590",
    emoji: "🇬🇵",
    name: "Guadeloupe",
  },
  {
    code: "BL",
    dial_code: "590",
    emoji: "🇧🇱",
    name: "Saint Barthelemy",
  },
  {
    code: "MF",
    dial_code: "590",
    emoji: "🇲🇫",
    name: "Saint Martin",
  },
  {
    code: "BO",
    dial_code: "591",
    emoji: "🇧🇴",
    name: "Bolivia, Plurinational State of",
  },
  {
    code: "EC",
    dial_code: "593",
    emoji: "🇪🇨",
    name: "Ecuador",
  },
  {
    code: "GF",
    dial_code: "594",
    emoji: "🇬🇫",
    name: "French Guiana",
  },
  {
    code: "GY",
    dial_code: "595",
    emoji: "🇬🇾",
    name: "Guyana",
  },
  {
    code: "PY",
    dial_code: "595",
    emoji: "🇵🇾",
    name: "Paraguay",
  },
  {
    code: "MQ",
    dial_code: "596",
    emoji: "🇲🇶",
    name: "Martinique",
  },
  {
    code: "SR",
    dial_code: "597",
    emoji: "🇸🇷",
    name: "Suriname",
  },
  {
    code: "UY",
    dial_code: "598",
    emoji: "🇺🇾",
    name: "Uruguay",
  },
  {
    code: "AN",
    dial_code: "599",
    emoji: "🇧🇶",
    name: "Netherlands Antilles",
  },
  {
    code: "MY",
    dial_code: "60",
    emoji: "🇲🇾",
    name: "Malaysia",
  },
  {
    code: "AU",
    dial_code: "61",
    emoji: "🇦🇺",
    name: "Australia",
  },
  {
    code: "CX",
    dial_code: "61",
    emoji: "🇨🇽",
    name: "Christmas Island",
  },
  {
    code: "CC",
    dial_code: "61",
    emoji: "🇨🇨",
    name: "Cocos (Keeling) Islands",
  },
  {
    code: "ID",
    dial_code: "62",
    emoji: "🇮🇩",
    name: "Indonesia",
  },
  {
    code: "PH",
    dial_code: "63",
    emoji: "🇵🇭",
    name: "Philippines",
  },
  {
    code: "NZ",
    dial_code: "64",
    emoji: "🇳🇿",
    name: "New Zealand",
  },
  {
    code: "SG",
    dial_code: "65",
    emoji: "🇸🇬",
    name: "Singapore",
  },
  {
    code: "TH",
    dial_code: "66",
    emoji: "🇹🇭",
    name: "Thailand",
  },
  {
    code: "TL",
    dial_code: "670",
    emoji: "🇹🇱",
    name: "Timor-Leste",
  },
  {
    code: "AQ",
    dial_code: "672",
    emoji: "🇦🇶",
    name: "Antarctica",
  },
  {
    code: "NF",
    dial_code: "672",
    emoji: "🇳🇫",
    name: "Norfolk Island",
  },
  {
    code: "BN",
    dial_code: "673",
    emoji: "🇧🇳",
    name: "Brunei Darussalam",
  },
  {
    code: "NR",
    dial_code: "674",
    emoji: "🇳🇷",
    name: "Nauru",
  },
  {
    code: "PG",
    dial_code: "675",
    emoji: "🇵🇬",
    name: "Papua New Guinea",
  },
  {
    code: "TO",
    dial_code: "676",
    emoji: "🇹🇴",
    name: "Tonga",
  },
  {
    code: "SB",
    dial_code: "677",
    emoji: "🇸🇧",
    name: "Solomon Islands",
  },
  {
    code: "VU",
    dial_code: "678",
    emoji: "🇻🇺",
    name: "Vanuatu",
  },
  {
    code: "FJ",
    dial_code: "679",
    emoji: "🇫🇯",
    name: "Fiji",
  },
  {
    code: "PW",
    dial_code: "680",
    emoji: "🇵🇼",
    name: "Palau",
  },
  {
    code: "WF",
    dial_code: "681",
    emoji: "🇼🇫",
    name: "Wallis and Futuna",
  },
  {
    code: "CK",
    dial_code: "682",
    emoji: "🇨🇰",
    name: "Cook Islands",
  },
  {
    code: "NU",
    dial_code: "683",
    emoji: "🇳🇺",
    name: "Niue",
  },
  {
    code: "WS",
    dial_code: "685",
    emoji: "🇼🇸",
    name: "Samoa",
  },
  {
    code: "KI",
    dial_code: "686",
    emoji: "🇰🇮",
    name: "Kiribati",
  },
  {
    code: "NC",
    dial_code: "687",
    emoji: "🇳🇨",
    name: "New Caledonia",
  },
  {
    code: "TV",
    dial_code: "688",
    emoji: "🇹🇻",
    name: "Tuvalu",
  },
  {
    code: "PF",
    dial_code: "689",
    emoji: "🇵🇫",
    name: "French Polynesia",
  },
  {
    code: "TK",
    dial_code: "690",
    emoji: "🇹🇰",
    name: "Tokelau",
  },
  {
    code: "FM",
    dial_code: "691",
    emoji: "🇫🇲",
    name: "Micronesia, Federated States of Micronesia",
  },
  {
    code: "MH",
    dial_code: "692",
    emoji: "🇲🇭",
    name: "Marshall Islands",
  },
  {
    code: "RU",
    dial_code: "7",
    emoji: "🇷🇺",
    name: "Russia",
  },
  {
    code: "KZ",
    dial_code: "77",
    emoji: "🇰🇿",
    name: "Kazakhstan",
  },
  {
    code: "JP",
    dial_code: "81",
    emoji: "🇯🇵",
    name: "Japan",
  },
  {
    code: "KR",
    dial_code: "82",
    emoji: "🇰🇷",
    name: "Korea, Republic of South Korea",
  },
  {
    code: "VN",
    dial_code: "84",
    emoji: "🇻🇳",
    name: "Vietnam",
  },
  {
    code: "KP",
    dial_code: "850",
    emoji: "🇰🇵",
    name: "Korea, Democratic People's Republic of Korea",
  },
  {
    code: "HK",
    dial_code: "852",
    emoji: "🇭🇰",
    name: "Hong Kong",
  },
  {
    code: "MO",
    dial_code: "853",
    emoji: "🇲🇴",
    name: "Macao",
  },
  {
    code: "KH",
    dial_code: "855",
    emoji: "🇰🇭",
    name: "Cambodia",
  },
  {
    code: "LA",
    dial_code: "856",
    emoji: "🇱🇦",
    name: "Laos",
  },
  {
    code: "CN",
    dial_code: "86",
    emoji: "🇨🇳",
    name: "China",
  },
  {
    code: "PN",
    dial_code: "872",
    emoji: "🇵🇳",
    name: "Pitcairn",
  },
  {
    code: "BD",
    dial_code: "880",
    emoji: "🇧🇩",
    name: "Bangladesh",
  },
  {
    code: "TW",
    dial_code: "886",
    emoji: "🇹🇼",
    name: "Taiwan",
  },
  {
    code: "TR",
    dial_code: "90",
    emoji: "🇹🇷",
    name: "Turkey",
  },
  {
    code: "IN",
    dial_code: "91",
    emoji: "🇮🇳",
    name: "India",
  },
  {
    code: "PK",
    dial_code: "92",
    emoji: "🇵🇰",
    name: "Pakistan",
  },
  {
    code: "AF",
    dial_code: "93",
    emoji: "🇦🇫",
    name: "Afghanistan",
  },
  {
    code: "LK",
    dial_code: "94",
    emoji: "🇱🇰",
    name: "Sri Lanka",
  },
  {
    code: "MM",
    dial_code: "95",
    emoji: "🇲🇲",
    name: "Myanmar",
  },
  {
    code: "MV",
    dial_code: "960",
    emoji: "🇲🇻",
    name: "Maldives",
  },
  {
    code: "LB",
    dial_code: "961",
    emoji: "🇱🇧",
    name: "Lebanon",
  },
  {
    code: "JO",
    dial_code: "962",
    emoji: "🇯🇴",
    name: "Jordan",
  },
  {
    code: "SY",
    dial_code: "963",
    emoji: "🇸🇾",
    name: "Syrian Arab Republic",
  },
  {
    code: "IQ",
    dial_code: "964",
    emoji: "🇮🇷",
    name: "Iraq",
  },
  {
    code: "KW",
    dial_code: "965",
    emoji: "🇰🇼",
    name: "Kuwait",
  },
  {
    code: "SA",
    dial_code: "966",
    emoji: "🇸🇦",
    name: "Saudi Arabia",
  },
  {
    code: "YE",
    dial_code: "967",
    emoji: "🇾🇪",
    name: "Yemen",
  },
  {
    code: "OM",
    dial_code: "968",
    emoji: "🇴🇲",
    name: "Oman",
  },
  {
    code: "PS",
    dial_code: "970",
    emoji: "🇵🇸",
    name: "Palestinian Territory, Occupied",
  },
  {
    code: "AE",
    dial_code: "971",
    emoji: "🇦🇪",
    name: "United Arab Emirates",
  },
  {
    code: "IL",
    dial_code: "972",
    emoji: "🇮🇱",
    name: "Israel",
  },
  {
    code: "BH",
    dial_code: "973",
    emoji: "🇧🇭",
    name: "Bahrain",
  },
  {
    code: "QA",
    dial_code: "974",
    emoji: "🇶🇦",
    name: "Qatar",
  },
  {
    code: "BT",
    dial_code: "975",
    emoji: "🇧🇹",
    name: "Bhutan",
  },
  {
    code: "MN",
    dial_code: "976",
    emoji: "🇲🇳",
    name: "Mongolia",
  },
  {
    code: "NP",
    dial_code: "977",
    emoji: "🇳🇵",
    name: "Nepal",
  },
  {
    code: "IR",
    dial_code: "98",
    emoji: "🇮🇷",
    name: "Iran, Islamic Republic of Persian Gulf",
  },
  {
    code: "TJ",
    dial_code: "992",
    emoji: "🇹🇯",
    name: "Tajikistan",
  },
  {
    code: "TM",
    dial_code: "993",
    emoji: "🇹🇲",
    name: "Turkmenistan",
  },
  {
    code: "AZ",
    dial_code: "994",
    emoji: "🇦🇿",
    name: "Azerbaijan",
  },
  {
    code: "GE",
    dial_code: "995",
    emoji: "🇬🇪",
    name: "Georgia",
  },
  {
    code: "KG",
    dial_code: "996",
    emoji: "🇰🇬",
    name: "Kyrgyzstan",
  },
  {
    code: "UZ",
    dial_code: "998",
    emoji: "🇺🇿",
    name: "Uzbekistan",
  },
];

export const STORES = [
  {
    name: "dior",
    link: routes.stores.dior,
    disabled: false,
    image: "/logo/dior-logo.png",
  },
  {
    name: "gucci",
    link: routes.stores.gucci,
    disabled: false,
    image: "/logo/gucci-logo.png",
  },
  {
    name: "louis vuitton",
    link: routes.stores.louis_vitton,
    disabled: false,
    image: "/logo/lv-logo.png",
  },
  {
    name: "versace",
    link: routes.stores.versace,
    disabled: false,
    image: "/logo/versace-logo.png",
  },
  {
    name: "cartier",
    link: routes.stores.cartier,
    disabled: false,
    image: "/logo/cartier-logo.png",
  },
  {
    name: "hermes",
    link: routes.stores.hermes,
    disabled: false,
    image: "/logo/hermes-logo.png",
  },
];

const STORE_FILTERS = [
  {
    name: "price",
    options: ["10,000 - 100,000", "10,000 - 100,000"],
    disabled: false,
  },
  {
    name: "collections",
    options: ["earrings", "necklace", "bracelets"],
    disabled: false,
  },
  {
    name: "insert ",
    options: ["yellow", "gold", "silver"],
    disabled: false,
  },
  {
    name: "insert color",
    options: ["yellow", "gold", "silver"],
    disabled: false,
  },
  {
    name: "metal",
    options: ["yellow", "gold", "silver"],
    disabled: false,
  },
  {
    name: "metal color",
    options: ["yellow", "gold", "silver"],
    disabled: false,
  },
  {
    name: "category",
    options: ["fine earrings", "fashion earings", "silver earrings"],
    disabled: false,
  },
  {
    name: "size",
    options: ["8", "10", "12"],
    disabled: false,
  },
];

const FAQ = [
  {
    question: "How can you offer such competitive prices?",
    answer:
      "We keep our prices low by operating primarily online, cutting out middlemen, and maintaining efficient operations. This allows us to pass the savings directly to our customers without compromising on quality.",
  },
  {
    question: "Is your jewelry real and authentic?",
    answer:
      "Absolutely! All our jewelry is 100% authentic and made with real materials as described. We provide certificates of authenticity for all precious stores and metals. We stand behind the quality of our products with our money-back guarantee.",
  },
  {
    question: "What if the jewelry doesn't meet my expectations?",
    answer:
      "We offer a 30-day return policy for any reason. If you're not completely satisfied, you can return the item for a full refund or exchange. We also provide free return shipping to ensure your complete satisfaction.",
  },
  {
    question: "How do i know i'm getting the right size?",
    answer:
      "We provide detailed sizing guides for all our jewelry. For rings, we offer a free ring sizer tool that we can mail to you. If you receive an item that doesn't fit, we offer free exchanges to get you the perfect size.",
  },
  {
    question: "Do you offer warranty on your jewelry?",
    answer:
      "Yes, we provide a one-year warranty on all our jewelry against manufacturing defects. Additionally, we offer affordable extended care plans for long-term protection and maintenance of your precious pieces.",
  },
];

export const constants = {
  API,
  ENVIRONMENT,
  CONFIG_TEXTS,
  COUNTRY_CODE_LIST,
  COUNTRY_LIST,
  STORE_FILTERS,
  FAQ,
};
