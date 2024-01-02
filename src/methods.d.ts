export type tSurroundLanguage = 'javascript' | 'html';
export type tSurroundHTMLAttr = boolean;
export type tSurroundSafeString = boolean;
export type tSurroundApply = (string:string) => string;
export type tSurroundOptions = {
	language?: tSurroundLanguage;
	htmlAttr?: tSurroundHTMLAttr;
	safeString?: tSurroundSafeString;
};
