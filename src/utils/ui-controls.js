import $ from 'jquery';
import { fetchShots } from '../actions/shots-actions';

export function handleScroll () {
  let lastScroll = 0;
  var pageInc = 1;
  $(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
    let docHeight = ($(document).height() - $(window).innerHeight()) - 500;

    if (scrollTop > lastScroll && scrollTop > docHeight) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        $.event.trigger({type: 'scrollEnd'});
      }, 100);
    }
    lastScroll = scrollTop;
  });

  $(window).on('scrollEnd', function () {
    fetchShots({page: ++pageInc});
  });
}
