/*!
 * OncoTraQ - Web Application Functions
 */

(function($) { "use strict";

/* Menu - Toggle */
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});

/* Advanced Search */
$(".navbar-form").submit(function(e){
    e.preventDefault();
});
$( ".advanced-search-input" ).focus(function() {
  $("div").find(".sub-navbar").addClass("active");
  $(window).scrollTop(0);
});
$( ".advanced-search-btn" ).click(function() {
  $("div").find(".sub-navbar").toggleClass("active");
  $(window).scrollTop(0);
});
$( ".close-subnav" ).focus(function() {
  $("div").find(".dropdown.bootstrap-select.bs3").removeClass("open");
  $("div").find(".sub-navbar").removeClass("active");
});

/* Sidebar Nav */
$(".nav-sidebar .collapse").on("hide.bs.collapse", function() {
    $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
});
$('.nav-sidebar .collapse').on("show.bs.collapse", function() {
    $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
});

/* Holder - Theme */
Holder.addTheme("primary", {
  bg: "#22a1bf", fg: "white", size: 12, font: "Open Sans", fontweight: "600"
});
Holder.addTheme("info", {
  bg: "#007078", fg: "white", size: 12, font: "Open Sans", fontweight: "600"
});
Holder.addTheme("success", {
  bg: "#6b8f00", fg: "white", size: 12, font: "Open Sans", fontweight: "600"
});
Holder.addTheme("warning", {
  bg: "#c97a00", fg: "white", size: 12, font: "Open Sans", fontweight: "600"
});
Holder.addTheme("danger", {
  bg: "#d2451e", fg: "white", size: 12, font: "Open Sans", fontweight: "600"
});
Holder.addTheme("custom", {
  bg: "#784e90", fg: "white", size: 12, font: "Open Sans", fontweight: "600"
});

/* Panel Options */
$(".panel-option").click(function () {
  $(this).closest(".panel").find(".panel-settings").slideToggle(200);
});

/* Widget Options */
$('#widget-options').click(function () {
  $('.fixed-table-toolbar').slideToggle(200);
  });
  $('#widget-options').click(function () {
  $(this).toggleClass("act");
});

/* Panel Filters  */
$('#reportType').change(function() {
if ($(this).val() === 'reportData') {
  $(this).closest(".panel-table").find(".fa-bar-chart").toggleClass('fa-bar-chart fa-file-text-o');
  $(this).closest(".panel-table").find("td a:contains('My Visual Report')").text("My Data Report");
}
});
$('#reportType').change(function() {
if ($(this).val() === 'reportVisual') {
    $(this).closest(".panel-table").find(".fa-file-text-o").toggleClass('fa-file-text-o fa-bar-chart');
    $(this).closest(".panel-table").find("td a:contains('My Data Report')").text("My Visual Report");
}
});
$('#reportType').selectpicker('val', 'reportData');

$('#searchType').change(function() {
if ($(this).val() === 'searchFavorite') {
  $(this).closest(".panel-table").find(".fa-refresh").toggleClass('fa-refresh fa-star-o');
  $(this).closest(".panel-table").find("td a:contains('My Recent Search')").text("My Favorite Search");
}
});
$('#searchType').change(function() {
if ($(this).val() === 'searchRecent') {
    $(this).closest(".panel-table").find(".fa-star-o").toggleClass('fa-star-o fa-refresh');
    $(this).closest(".panel-table").find("td a:contains('My Favorite Search')").text("My Recent Search");
}
});
$('#searchType').selectpicker('val', 'searchFavorite');

$('#databaseType').change(function() {
if ($(this).val() === 'databaseClinical') {
    $(this).closest(".panel-table").find("td a:contains('Commercial Database')").text("Clinical Database");
}
});
$('#databaseType').change(function() {
if ($(this).val() === 'databaseCommercial') {
    $(this).closest(".panel-table").find("td a:contains('Clinical Database')").text("Commercial Database");
}
});
$('#databaseType').selectpicker('val', 'databaseClinical');

$('#profileType').change(function() {
if ($(this).val() === 'profileCompany') {
    $(this).closest(".panel-table").find("td a:contains('Product Profile')").text("Company Profile");
}
});
$('#profileType').change(function() {
if ($(this).val() === 'profileProduct') {
    $(this).closest(".panel-table").find("td a:contains('Company Profile')").text("Product Profile");
}
});
$('#profileType').selectpicker('val', 'profileCompany');

/* Bootstrap-Select */
$('.selectpicker').selectpicker();
$('.reset').on("click", function(){
  $(".advanced-search .selectpicker").selectpicker('deselectAll');
  $(".advanced-search .selectpicker").val('default');
  $(".advanced-search .selectpicker").selectpicker("refresh");
});


$('document').ready(function() {

  /* News-Ticker */
  $(".news-ticker").bootstrapNews({
    newsPerPage: 4,
    navigation: true,
    autoplay: true,
    direction:'up', // up or down
    animationSpeed: 'normal',
    newsTickerInterval: 4000, //4 secs
    pauseOnHover: true,
    onStop: null,
    onPause: null,
    onReset: null,
    onPrev: null,
    onNext: null,
    onToDo: null
  });

  /* Popover */
  $('[data-toggle="popover"]').popover({
        //trigger: 'focus',
    trigger: 'hover',
        html: true,
        content: function () {
      return '<img class="img-fluid" src="'+$(this).data('img') + '" />';
        },
        title: 'Toolbox'
  });

  /* Tooltip */
  $('[data-toggle="tooltip"]').tooltip();

  /* Modals */
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });

  $('#saveReportModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var report = button.data('report-name') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Save to My Reports')
    modal.find('.modal-body input').val(report)
    $('#report-name').focus();
  });

  /* News Ticker */
  $('.newsticker').newsTicker({
      row_height: 24,
      max_rows: 1,
      speed: 600,
      direction: 'up',
      duration: 4000,
      autostart: 1,
      pauseOnHover: 0,
      prevButton:  $('#prev-button'),
      nextButton:  $('#next-button'),
      stopButton:  $('#stop-button'),
      startButton: $('#start-button')
  });

});

/* Login */
$(document).ready(function() {
    $('#username').focus();
    $('#submit').click(function() {
      event.preventDefault(); // prevent PageReLoad
      var ValidUser = $('#admin').val() === 'admin'; // User validate
      var ValidPassword = $('#password').val() === 'password'; // Password validate
      if (ValidUser === true && ValidPassword === true) { // if ValidEmail & ValidPassword
          $('.valid').css('display', 'block');
          window.openURL("dashboard.html"); // go to home.html
      }
      else {
          $('.error').css('display', 'block'); // show error msg
      }
    });
});

})(jQuery);
