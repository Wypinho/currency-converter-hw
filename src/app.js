import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      exchangeRates: {},
      amountInEuros: null,
      selectedRate: {},
      // conversionRate: null,
      conversionResult: null
    },
    mounted() {
      this.getRates()
    },
    methods: {
      getRates: function() {
        fetch('https://api.exchangeratesapi.io/latest')
          .then(response => response.json())
          .then(dataObject => this.exchangeRates = dataObject.rates)
      },
      convert: function() {
        this.conversionResult = this.amountInEuros * this.selectedRate
        this.conversionResult = this.conversionResult.toFixed(2)
      }
    }
  });
});
