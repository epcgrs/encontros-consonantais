require('./bootstrap');

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';

($ => {
    $(() => {

        function slugify (str) {
            var map = {
                '' : ' ',
                '-' : '_',
                'a' : 'á|à|ã|â|À|Á|Ã|Â',
                'e' : 'é|è|ê|É|È|Ê',
                'i' : 'í|ì|î|Í|Ì|Î',
                'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
                'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
                'n' : 'ñ|Ñ'
            };

            str = str.toLowerCase();

            for (var pattern in map) {
                str = str.replace(new RegExp(map[pattern], 'g'), pattern);
            }

            return str;
        }

        function capitalize (s) {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }

        const word1 = {
            word: "gráfico",
            syllables: [
                'gra',
                'fi',
                'co'
            ],
            type: "ecp"
        };

        const word2 = {
            word: "gruta",
            syllables: [
                'gru',
                'ta',
            ],
            type: "ecp"
        };

        const word3 = {
            word: "castelo",
            syllables: [
                'cas',
                'te',
                'lo'
            ],
            type: "eci"
        };

        const word4 = {
            word: "planta",
            syllables: [
                'plan',
                'ta',
            ],
            type: "eci"
        };

        const word5 = {
            word: "ambiente",
            syllables: [
                'am',
                'bi',
                'en',
                'te'
            ],
            type: "eci"
        };

        const word6 = {
            word: "porco",
            syllables: [
                'por',
                'co',
            ],
            type: "eci"
        };

        const word7 = {
            word: "caderno",
            syllables: [
                'ca',
                'der',
                'no'
            ],
            type: "eci"
        };

        const word8 = {
            word: "almoço",
            syllables: [
                'al',
                'mo',
                'ço'
            ],
            type: "eci"
        };

        const word9 = {
            word: "almofada",
            syllables: [
                'al',
                'mo',
                'fa',
                'da'
            ],
            type: "eci"
        };

        const word10 = {
            word: "palavra",
            syllables: [
                'pa',
                'la',
                'vra',
            ],
            type: "ecp"
        };


        $(document).on('click', '#submitExercise', function (e) {
            e.preventDefault();

            if(!$('#exercisesForm').get(0).checkValidity()) {
               alert('Preencha todo o exercício antes de verificar!');
               return;
            }

            let word1Input = slugify($('#input-one').val().toLowerCase());
            let word1Type = slugify($('#type-one').val().toLowerCase());

            let word1ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word1.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word1.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word1Input}
                            <br>
                            ${(word1Input === word1.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word1Type}
                            <br>
                            ${ (word1Type === word1.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let word2Input = slugify($('#input-two').val().toLowerCase());
            let word2Type = slugify($('#type-two').val().toLowerCase());

            let word2ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word2.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word2.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word2Input}
                            <br>
                            ${(word2Input === word2.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word2Type}
                            <br>
                            ${ (word2Type === word2.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let word3Input = slugify($('#input-three').val().toLowerCase());
            let word3Type = slugify($('#type-three').val().toLowerCase());

            let word3ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word3.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word3.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word3Input}
                            <br>
                            ${(word3Input === word3.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word3Type}
                            <br>
                            ${ (word3Type === word3.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let word4Input = slugify($('#input-four').val().toLowerCase());
            let word4Type = slugify($('#type-four').val().toLowerCase());

            let word4ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word4.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word4.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word4Input}
                            <br>
                            ${(word4Input === word4.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word4Type}
                            <br>
                            ${ (word4Type === word4.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let word5Input = slugify($('#input-five').val().toLowerCase());
            let word5Type = slugify($('#type-five').val().toLowerCase());

            let word5ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word5.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word5.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word5Input}
                            <br>
                            ${(word5Input === word5.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word5Type}
                            <br>
                            ${ (word5Type === word5.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let word6Input = slugify($('#input-six').val().toLowerCase());
            let word6Type = slugify($('#type-six').val().toLowerCase());

            let word6ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word6.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word6.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word6Input}
                            <br>
                            ${(word6Input === word6.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word6Type}
                            <br>
                            ${ (word6Type === word6.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let word7Input = slugify($('#input-seven').val().toLowerCase());
            let word7Type = slugify($('#type-seven').val().toLowerCase());

            let word7ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word7.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word7.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word7Input}
                            <br>
                            ${(word7Input === word7.syllables.join('-')) ? 'Parabéns! &#x1F604;'  : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word7Type}
                            <br>
                            ${ (word7Type === word7.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let word8Input = slugify($('#input-eight').val().toLowerCase());
            let word8Type = slugify($('#type-eight').val().toLowerCase());

            let word8ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word8.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word8.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word8Input}
                            <br>
                            ${(word8Input === word8.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word8Type}
                            <br>
                            ${ (word8Type === word8.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let word9Input = slugify($('#input-nine').val().toLowerCase());
            let word9Type = slugify($('#type-nine').val().toLowerCase());

            let word9ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word9.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word9.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word9Input}
                            <br>
                            ${(word9Input === word9.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word9Type}
                            <br>
                            ${ (word9Type === word9.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let word10Input = slugify($('#input-ten').val().toLowerCase());
            let word10Type = slugify($('#type-ten').val().toLowerCase());

            let word10ResultTemplate = `
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="h4 mb-3">Palavra: ${capitalize(word10.word)}</p>
                    <div class="form-group">
                        <p class="h5">Sílabas: ${word10.syllables.join('-')}</p>
                        <p class="pt-2">
                            sua resposta: ${word10Input}
                            <br>
                            ${(word10Input === word10.syllables.join('-')) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                    <div class="form-group">
                        <p class="h5">Tipo: ECP</p>
                        <p class="pt-2">
                            sua resposta: ${word10Type}
                            <br>
                            ${ (word10Type === word10.type) ? 'Parabéns! &#x1F604;' : 'Que pena! &#x1F615;' }
                        </p>
                    </div>
                </li>
            </ul>
            `;

            let pontuacao = 0;

            if ( word1Input === word1.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word1Type === word1.type ) {
                pontuacao += 1;
            }
            if ( word2Input === word2.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word2Type === word2.type ) {
                pontuacao += 1;
            }
            if ( word3Input === word3.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word3Type === word3.type ) {
                pontuacao += 1;
            }
            if ( word4Input === word4.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word4Type === word4.type ) {
                pontuacao += 1;
            }
            if ( word5Input === word5.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word5Type === word5.type ) {
                pontuacao += 1;
            }
            if ( word6Input === word6.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word6Type === word6.type ) {
                pontuacao += 1;
            }
            if ( word7Input === word7.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word7Type === word7.type ) {
                pontuacao += 1;
            }
            if ( word8Input === word8.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word8Type === word8.type ) {
                pontuacao += 1;
            }
            if ( word9Input === word9.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word9Type === word9.type ) {
                pontuacao += 1;
            }
            if ( word10Input === word10.syllables.join('-') ) {
                pontuacao += 1;
            }
            if ( word10Type === word10.type ) {
                pontuacao += 1;
            }
            let resultTemplate = `
                <div class="pt-3 pb-4">
                    <p class="h3 text-center font-weight-bold">Pontuação: ${ (pontuacao/2) }</p>
                </div>
            `;

            $('.results-wrapper').html(
                word1ResultTemplate +
                word2ResultTemplate +
                word3ResultTemplate +
                word4ResultTemplate +
                word5ResultTemplate +
                word6ResultTemplate +
                word7ResultTemplate +
                word8ResultTemplate +
                word9ResultTemplate +
                word10ResultTemplate +
                resultTemplate
            );

            $('html, body').animate({ scrollTop: 2800 }, 450);
            $(this).attr('disabled', 'true');
            $(this).addClass('disabled');
        });
    });
})(jQuery);
