

// function FakeSelect() {
//     jQuery('select').each(function(){
//         if(jQuery(this).closest('.fake-select').length === 0) {
//             var text = jQuery(this).find('option:selected').text();
//             var fake = jQuery('<div class="fake-select">');
//             var label = jQuery('<span class="fake-select__label">').text(text);
//             var cssClass = jQuery(this).attr('class').split(' ');

//             cssClass.forEach((item) => {
//                 if(item !== '') {
//                     fake.addClass(item);
//                 }
//             })

//             fake.prepend(label);
//             jQuery(this).after(fake);
//             fake.append(this);

//             jQuery(this).change(() => { label.text(jQuery(this).find('option:selected').text()) });
//         }
//     });
// }

// FakeSelect();

// document.addEventListener('FAKESELECT', () => { FakeSelect() }, false);