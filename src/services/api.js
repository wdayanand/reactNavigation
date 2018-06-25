
export function getCategory() {
    return fetch('https://facebook.github.io/react-native/movies.json');
}

export function getSongs()
{
    return fetch('http://www.feedyourmusic.com/api/v1/editors_pick');
}

