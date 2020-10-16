<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
       <h3 class="display-2 font-weight-bold mb-3">Chapter groei</h3>      
       <p>Hoeveel bezoekers heb je nodig als je je chapter wil laten groeien? <br/>
       We hebben dit van <a href="https://www.linkedin.com/in/phberg/" target="_blank">Phil Berg</a> geleerd in oktober 2019.</p>
      </v-col>

      <v-col cols="12">
      <table>
        <tr><td>Aantal maanden</td><td></td><td><v-text-field
                  v-model="months"
                  label="maanden"
                  type="number"
                  required
                ></v-text-field></td></tr>
        <tr><td>Huidig aantal leden</td><td></td><td><v-text-field
                  v-model="currentmembers"
                  label="Huidig aantal leden"
                  type="number"
                  required
                ></v-text-field></td></tr>
      <tr><td>Doelstelling aantal leden</td><td></td><td> <v-text-field
                  v-model="targetmembers"
                  label="Gewenst aantal leden"
                  type="number"
                  required
                ></v-text-field></td></tr>
      <tr><td>Aantal nieuwe leden</td><td></td><td class="result">{{ expectedmembergrowth }}</td></tr>
      <tr><td>Aantal leden dat blijft</td> <td> <v-text-field
                  v-model="renewalpercentage"
                  label="Verlengingspercentage"
                  type="number"
                  required
                ></v-text-field></td><td class="result">{{ renewalmembers }}</td></tr>
      <tr><td>Totaal nieuwe leden nodig</td><td></td><td class="result">{{ newmembersneeded }}</td></tr>
      <tr><td>Aantal bezoekers nodig</td> <td>
        <v-text-field
                  v-model="conversionpercentage"
                  label="Conversieratio"
                  type="number"
                  required
                ></v-text-field></td><td class="result">{{ visitorsneeded.toFixed(2) }}</td></tr>
      <tr><td>Aantal bezoekers per lid</td> <td></td><td class="result">{{ visitorspermember.toFixed(2) }}</td></tr>
      <tr><td>Minimaal bezoekers per lid per maand</td><td></td><td class="result">{{ visitorspermonthpermember.toFixed(2) }}</td></tr>
      </table>
</v-col>
    </v-row>

  </v-container>
</template>

<style>
td.result {
  font-weight: bold;
}
</style>

<script>
  export default {
    name: 'GrowthCalculator',

    data: () => ({
      currentmembers : 25,
      targetmembers : 30,
      renewalpercentage : 0.70,
      conversionpercentage : 0.20,
      months : 6,
    }),
    computed: {
          expectedmembergrowth: function() {
            return this.targetmembers - this.currentmembers;
          },
          renewalmembers :  function() {
            return Math.ceil(this.currentmembers - (this.currentmembers * this.renewalpercentage));
          },
          newmembersneeded :  function() {
            return this.expectedmembergrowth + this.renewalmembers;
          },
          visitorsneeded :  function() {
            return this.newmembersneeded / this.conversionpercentage;
          },
          visitorspermember : function() {
            return this.visitorsneeded / this.currentmembers;
          },
          visitorspermonthpermember : function() {
            return this.visitorspermember / this.months;
          }
        },
  }
</script>
