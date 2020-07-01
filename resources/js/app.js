require('./bootstrap');

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';

($ => {
    $(() => {
        const word1 = {
            word: "gráfico",
            syllables: [
                'grá',
                'fi',
                'co'
            ],
            type: "ECP"
        };





        $(document).on('click', '#submitExercise', function (e) {
            e.preventDefault();

            let word1Input = $('#input-one').val();
            let word1Type = $('#type-one').val();

            let word1ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: Gráfico</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: grá-fi-co</p>
                        <p class="pt-2">
                           ${(word1Input === word1.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                        ${ (word1Type === word1.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="result">
                    
                    </div>
                </li>
            </ul>
            `;


            $('.results-wrapper').html(word1ResultTemplate)
            $('html, body').animate({ scrollTop: 800 }, 450);
        });
    });
})(jQuery);
