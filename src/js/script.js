$(function () {

    $('.filter-style').styler(); // Стилизация инпутов, чекбоксов, селектов ...

    $('.datepicker-here').datepicker();

    @@include('tabs.js')

    @@include('input.js')

    @@include('rate.js')

    @@include('add-point-btn.js')

    @@include('dropdown.js')

    @@include('../blocks/modules/header/header.js')

    @@include('../blocks/modules/questions/questions.js')

    @@include('../blocks/modules/order-process/order-process.js')

    @@include('../blocks/modules/profile/profile.js')

    // ===================== POPUPS =======================//

    @@include('../blocks/modules/popups/popups.js')
    
    @@include('../blocks/modules/popups/map-popup.js')
    
    // ===================== SLIDERS ========================/

    @@include('../blocks/modules/clients/clients.js')

    @@include('../blocks/modules/start/start.js')

    @@include('../blocks/modules/logos/logos.js')


    //=====================VALIDATION==================//

    @@include('validate.js')

    @@include('phone-select.js')


    //=================CHECK-IMG====================//

    @@include('../blocks/modules/my-transport/transport.js')

    //================ASIDE======================//

    @@include('aside.js')

    @@include('../blocks/modules/search-results/search-results.js')
});