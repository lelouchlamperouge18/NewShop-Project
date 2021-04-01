import React from 'react';
import './Backtotop.css';
import $ from 'jquery'
  
export function Backtotop() {
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    return (
        <div className="Backtotop">
            <a id="button"></a>
            <p>.</p>
        </div>
    )
}