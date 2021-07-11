export default function useLocalStorage() {
    function setValue(name, value) {
        if (localStorage.getItem(name) !== undefined) {
            return localStorage.setItem(name, JSON.stringify(value));
        }
    }

    function getValue(name) {
        return JSON.parse(localStorage.getItem(name));
    }

    return {
        setValue,
        getValue,
    };
}
