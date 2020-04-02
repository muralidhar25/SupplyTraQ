values = {};

values['us'] = '5';
values['gb'] = '5';
values['es'] = '5';
values['de'] = '37';
values['in'] = '83';
values['fr'] = '47';
values['it'] = '8';
values['jp'] = '3';
values['hu'] = '20';

$('#vmap-facility-map').vectorMap({
  map: 'world_en',
  backgroundColor: '#ffffff',
  borderColor: '#ffffff',
  borderOpacity: 0.25,
  borderWidth: 1,
  color: '#eeeeee',
  hoverOpacity: 0.7,
  selectedColor: '#007078',
  enableZoom: false,
  showTooltip: true,
  values: values,
  scaleColors: ['#007078', '#008892'],
  normalizeFunction: 'polynomial'
});

/*
function escapeXml(string) {
return string.replace(/[<>]/g, function (c) {
  switch (c) {
    case '<': return '\u003c';
    case '>': return '\u003e';
  }
});
}

var pins = {
  us: escapeXml('<div class="map-pin red"><span>US</span></div>'),
  ca: escapeXml('<div class="map-pin blue"><span>CA</span></div>'),
  gl: escapeXml('<div class="map-pin purple"><span>GL</span></div>')
};

jQuery('#vmap').vectorMap({
  map: 'world_en',
  backgroundColor: '#ffffff',
  borderColor: '#ffffff',
  borderOpacity: 0.25,
  borderWidth: 1,
  color: '#eeeeee',
  hoverOpacity: 0.7,
  selectedColor: '#007078',
  enableZoom: false,
  showTooltip: true,
  values: sample_data,
  scaleColors: ['#007078', '#008892'],
  normalizeFunction: 'polynomial',
  pinMode: 'content',
  pins: pins,
  selectedRegions: ['US', 'CA', 'GL'],
});

*/

$('#vmap-world').vectorMap({
  map: 'world_en',
  backgroundColor: '#ffffff',
  color: '#eeeeee',
  hoverOpacity: 0.7,
  selectedColor: '#007078',
  enableZoom: false,
  showTooltip: true,
});

$('#vmap-asia').vectorMap({
  map: 'asia_en',
  backgroundColor: '#ffffff',
  color: '#eeeeee',
  hoverOpacity: 0.7,
  selectedColor: '#007078',
  enableZoom: false,
  showTooltip: true,
  values: sample_data,
  scaleColors: ['#007078', '#008892'],
  normalizeFunction: 'polynomial'
});


$('#continent').change(function() {
  if ($(this).val() === 'Asia') {
  $('.vmap').remove();
  $('.map-holder').append('<div id="vmap-asia" class="vmap"></div>');
  $('#vmap-asia').vectorMap({
    map: 'asia_en',
    backgroundColor: '#ffffff',
    color: '#eeeeee',
    hoverOpacity: 0.7,
    selectedColor: '#007078',
    enableZoom: false,
    showTooltip: true,
    values: sample_data,
    scaleColors: ['#007078', '#008892'],
    normalizeFunction: 'polynomial'
  });
  }
  else if ($(this).val() === 'NorthAmerica') {
  $('.vmap').remove();
  $('.map-holder').append('<div id="vmap-northamerica" class="vmap"></div>');
  $('#vmap-northamerica').vectorMap({
    map: 'north-america_en',
    backgroundColor: '#ffffff',
    color: '#ffffff',
    hoverOpacity: 0.7,
    selectedColor: '#007078',
    enableZoom: false,
    showTooltip: true,
    values: sample_data,
    scaleColors: ['#007078', '#008892'],
    normalizeFunction: 'polynomial'
  });
  }
  else if ($(this).val() === 'SouthAmerica') {
  $('.vmap').remove();
  $('.map-holder').append('<div id="vmap-southamerica" class="vmap"></div>');
  $('#vmap-southamerica').vectorMap({
    map: 'south-america_en',
    backgroundColor: '#ffffff',
    color: '#ffffff',
    hoverOpacity: 0.7,
    selectedColor: '#007078',
    enableZoom: false,
    showTooltip: true,
    values: sample_data,
    scaleColors: ['#007078', '#008892'],
    normalizeFunction: 'polynomial'
  });
  }
  else if ($(this).val() === 'WorldMap') {
  $('.vmap').remove();
  $('.map-holder').append('<div id="vmap-world" class="vmap"></div>');
  $('#vmap-world').vectorMap({
    map: 'world_en',
    backgroundColor: '#ffffff',
    color: '#eeeeee',
    hoverOpacity: 0.7,
    selectedColor: '#007078',
    enableZoom: false,
    showTooltip: true,
  });
  $('#vmap-world').vectorMap('set', 'colors', { us: '#007078', ca: '#007078', gl: '#007078'});
  $('#vmap-world').vectorMap('set', 'colors', { ve: '#007078', ar: '#007078', bo: '#007078', pe: '#007078', br: '#007078', cl: '#007078', co: '#007078', uy: '#007078', ec: '#007078', gy: '#007078', gf: '#007078', py: '#007078', sr: '#007078'});
  $('#vmap-world').vectorMap('set', 'colors', { cn: '#007078', tw: '#007078', jp: '#007078', mn: '#007078', kp: '#007078', kr: '#007078', ru: '#007078', bn: '#007078', au: '#007078', id: '#007078', nz: '#007078', in: '#007078', pf: '#007078', ph: '#007078', np: '#007078', th: '#007078', my: '#007078', vn: '#007078', bd: '#007078', mm: '#007078', la: '#007078', pg: '#007078', sb: '#007078'});
  }
});

$('#vmap-world').vectorMap('set', 'colors', { us: '#007078', ca: '#007078', gl: '#007078'});
$('#vmap-world').vectorMap('set', 'colors', { ve: '#007078', ar: '#007078', bo: '#007078', pe: '#007078', br: '#007078', cl: '#007078', co: '#007078', uy: '#007078', ec: '#007078', gy: '#007078', gf: '#007078', py: '#007078', sr: '#007078'});
$('#vmap-world').vectorMap('set', 'colors', { cn: '#007078', tw: '#007078', jp: '#007078', mn: '#007078', kp: '#007078', kr: '#007078', ru: '#007078', bn: '#007078', au: '#007078', id: '#007078', nz: '#007078', in: '#007078', pf: '#007078', ph: '#007078', np: '#007078', th: '#007078', my: '#007078', vn: '#007078', bd: '#007078', mm: '#007078', la: '#007078', pg: '#007078', sb: '#007078'});
