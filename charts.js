Vue.use(VueCharts);
      var app = new Vue({
        el: '#app',
        data: function data() {
          return {
            dataentry: null,
            datalabel: null,
            labels: ['React', 'Vanilla JS', 'JQuery', 'VueJS'],
            dataset: [5, 10, 15, 25] // change it with the cart dataset
          };
        },

        methods: {
          addData: function addData() {
            this.dataset.push(this.dataentry);
            this.labels.push(this.datalabel);
            this.datalabel = '';
            this.dataentry = '';
          }
        }
      });

/* HTML code to display the vue template
<div id="app">
      <section class="container">	
	  <div class="columns">
	    <div class="column">
	      <chartjs-pie :labels="labels" :data="dataset" :bind="true"></chartjs-pie>
	    </div>	    
	  </div>    
	</section>
    </div>
*/