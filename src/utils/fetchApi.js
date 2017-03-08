import $ from 'jquery';

export function fetch (query) {
  const url = `https://api.dribbble.com/v1/${query}&access_token=1a556a2c3586c9617af18338ce160d80131bcbfceb9949ed37a29bbbac784813`
  return $.get(url);
}
