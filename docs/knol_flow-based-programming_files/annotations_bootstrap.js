
(function(){
window['google'] = window['google'] || {};
window['google']['annotations'] = window['google']['annotations'] || {};
if (!window['google']['annotations']['loaded']) {
window['google']['annotations']['loaded'] = true;
window['google']['annotations']['callback'] = function() {
google.annotations.setAbsoluteUriPrefix("http://knol.google.com/");
};
document.write('<script type="text/javascript" src="http://knol.google.com/apps/reviews/js/120127/annotations_production.js"></script>');
}
})()
