export function convertCode(text) {
    while(true) {
        let idx = text.indexOf("`");
        if(idx == -1) break;
        text.replace("`", "<code>");
        text.replace("`", "</code>");
    }
    return text;
}