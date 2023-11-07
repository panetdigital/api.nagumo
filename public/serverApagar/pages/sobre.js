exports.ids = [20];
exports.modules = {

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sobre.vue?vue&type=template&id=f1f85074&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<h1>Exemplo de Requisição com Axios</h1> <button>Buscar Dados</button> " + (_vm.data ? "<div><h2>" + _vm._ssrEscape(_vm._s(_vm.data.coditem)) + "</h2> <p>" + _vm._ssrEscape(_vm._s(_vm.data.nome)) + "</p></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/sobre.vue?vue&type=template&id=f1f85074&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sobre.vue?vue&type=script&lang=js&
/* harmony default export */ var sobrevue_type_script_lang_js_ = ({
  data() {
    return {
      data: null
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.get('http://15.228.47.247:3333/api/v1/produtos-hortifruti/201');
        this.data = response.data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/sobre.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_sobrevue_type_script_lang_js_ = (sobrevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/sobre.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sobrevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6fb7aa49"
  
)

/* harmony default export */ var sobre = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sobre.js.map