import { colors } from "./colors";

export const TOKEN = "TOKEN";
export const USER_INFO = "USER_INFO";

// multiple language
export const LIST_LANGUAGES = ['vi', 'en', 'fr'];
export const LANGUAGE = {
    vi: "vi",
    en: "en",
    ja: "ja",
};
export const DEFAULT_LANGUAGE = LANGUAGE.en;
export const DEFAULT_NS = "Common";

// styles
export const menuWidth = 278;
export const HOVER_ICON_COLOR = colors?.white;
export const DEFAULT_BORDER_COLOR = colors?.black;

export const ASC = "asc";
export const DESC = "desc";

export const DEFAULT_TABLE_CELL_ALIGN = "left";
export const DEFAULT_SORT = ASC;
export const DEFAULT_SORT_FIELD = "createdAt";
export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 50;
export const DEFAULT_SELECT_LIMIT = 10;

export const INITIAL_PAGINATION = {
    page: DEFAULT_PAGE,
    limit: DEFAULT_LIMIT,
    search: "",
};
export const DEFAULT_LIMIT_OPTIONS = [
    // { label: 'components:limit1', value: 1 },
    { label: "components:limit50", value: 50 },
    { label: "components:limit100", value: 100 },
    { label: "components:limit200", value: 200 },
];
// date
export const CALENDAR_POSITION = "bottom-center";

export const DEFAULT_FORMAT_TIME = "HH:mm:ss";
export const DEFAULT_FORMAT_DATE = "YYYY-MM-DD";
export const DEFAULT_FORMAT_MONTH = "YYYY-MM";
export const DEFAULT_FORMAT_DATE_TIME = "YYYY-MM-DD HH:mm:ss";

export const DEFAULT_FORMAT_DISPLAY_TIME = "HH:mm:ss";
export const DEFAULT_DISPLAY_FORMAT_DATE = "YYYY/MM/DD";
export const DEFAULT_DISPLAY_FORMAT_MONTH = "YYYY/MM";
export const DEFAULT_DISPLAY_FORMAT_DATE_TIME = "YYYY/MM/DD HH:mm";

export const DEFAULT_MAX_DATE = new Date("2099-12-31");
export const DEFAULT_MIN_DATE = new Date("1900-01-01");

export const DEFAULT_STATUS = {
    100: "Active",
    200: "Inactive",
};

export const SALT_WORK_FACTOR = 10;
