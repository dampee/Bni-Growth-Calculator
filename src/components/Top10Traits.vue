<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h3 class="display-2 font-weight-bold mb-3">Top 10 eigenschappen van een Meester-netwerker</h3>
        <p>
          Eigenschappen van meester netwerkers? 
          <br />Hoofdstuk 7 uit het boek
          <a
            href="https://ivanmisner.com/29-solution-book-10-years-old/"
            target="_blank"
          >29% solution</a> van dr Ivan Misner gaat er verder op in. Reken hieronder uit hoe goed je scoort als netwerker.
        </p>
        <p>Je krijgt je resultaat onmiddellijk te zien na het invullen van alle vragen.</p>
      </v-col>

      <v-col cols="12">
        <table>
        <thead>
          <tr>
            <th></th>
            <th>Eigenschap</th>
            <th class="result-column">Nooit</th>
            <th class="result-column">Zelden</th>
            <th class="result-column">Soms</th>
            <th class="result-column">Meestal</th>
            <th class="result-column">Altijd</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Ik volg op</td>
             <td>
              <input type="radio" class="radio-button" :value="1" name="trait1" v-model="trait1" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait1" v-model="trait1" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait1" v-model="trait1" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait1" v-model="trait1" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait1" v-model="trait1" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ik heb een positieve attitude</td>
            <td>
              <input type="radio" class="radio-button" :value="1" name="trait2" v-model="trait2" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait2" v-model="trait2" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait2" v-model="trait2" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait2" v-model="trait2" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait2" v-model="trait2" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ik ben enthousiast en gemotiveerd</td>
            <td>
              <input type="radio" class="radio-button" :value="1" name="trait3" v-model="trait3" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait3" v-model="trait3" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait3" v-model="trait3" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait3" v-model="trait3" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait3" v-model="trait3" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ik ben betrouwbaar</td>
            <td>
              <input type="radio" class="radio-button" :value="1" name="trait4" v-model="trait4" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait4" v-model="trait4" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait4" v-model="trait4" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait4" v-model="trait4" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait4" v-model="trait4" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ik luister goed</td>
            <td>
              <input type="radio" class="radio-button" :value="1" name="trait5" v-model="trait5" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait5" v-model="trait5" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait5" v-model="trait5" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait5" v-model="trait5" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait5" v-model="trait5" />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Ik heb 24/7 toewijding</td>
            <td>
              <input type="radio" class="radio-button" :value="1" name="trait6" v-model="trait6" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait6" v-model="trait6" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait6" v-model="trait6" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait6" v-model="trait6" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait6" v-model="trait6" />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Ik bedank mensen</td>
            <td>
              <input type="radio" class="radio-button" :value="1" name="trait7" v-model="trait7" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait7" v-model="trait7" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait7" v-model="trait7" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait7" v-model="trait7" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait7" v-model="trait7" />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Ik geniet er van om mensen te helpen</td>
            <td>
              <input type="radio" class="radio-button" :value="1" name="trait8" v-model="trait8" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait8" v-model="trait8" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait8" v-model="trait8" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait8" v-model="trait8" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait8" v-model="trait8" />
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Ik ben oprecht</td>
            <td>
              <input type="radio" class="radio-button" :value="1" name="trait9" v-model="trait9" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait9" v-model="trait9" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait9" v-model="trait9" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait9" v-model="trait9" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait9" v-model="trait9" />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Ik werk aan mijn netwerk</td>
            <td>
              <input type="radio" class="radio-button" :value="1" name="trait10" v-model="trait10" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" name="trait10" v-model="trait10" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" name="trait10" v-model="trait10" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" name="trait10" v-model="trait10" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" name="trait10" v-model="trait10" />
            </td>
          </tr>
        </tbody>
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-show="showScore">
        <h2 class="result">Totale score: {{ score.toFixed(2) }} / 50</h2>
        <div>
          <strong>Resultaat bespreking</strong>
          <p v-show="score<=20">
            Je hebt nog wat werk voor de boeg om een echte goede netwerker te worden. 
            Of je bent wel heel streng voor jezelf. Maar schrik niet, iedereen kan met een beetje moeite een goede netwerker worden.
          </p>
          <p v-show="score>20 && score <=40">
            Knap zeg. Je mag jezelf tot de grote middenmoot rekenen. Je weet waar netwerken op aankomt, maar je kan hier en daar nog wel wat bijschaven.
          </p>
          <p v-show="score>40 && score <=45">
            Als je jezelf niet overschat, bent je een behoorlijk goede netwerker. Vraag feedback aan andere mensen in je netwerk hoe je jezelf kan verbeteren als netwerker.
          </p>
          <p v-show="score>45 ">
            Je bent een natuurtalent, of je hebt héél hard geoefend om een goede netwerker te worden. Dankzij jou wordt de wereld waarschijnlijk wel wat gelukkiger, doe zo voort!
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
td.result {
  font-weight: bold;
}
th.result-column {
  padding-left:20px;
}
</style>

<script>
export default {
  name: "Top10Traits",

  data: () => ({   
    trait1: 0,
    trait2: 0,
    trait3: 0,
    trait4: 0,
    trait5: 0,
    trait6: 0,
    trait7: 0,
    trait8: 0,
    trait9: 0,
    trait10: 0
  }),
  computed: {
    showScore : function() {
      return (
        this.trait1 >0 &&
        this.trait2 >0 &&
        this.trait3 >0 &&
        this.trait4 >0 &&
        this.trait5 >0 &&
        this.trait6 >0 &&
        this.trait7 >0 &&
        this.trait8 >0 &&
        this.trait9 >0 &&
        this.trait10>0
      );
    },
    score: function() {
      return (
        this.trait1 +
        this.trait2 +
        this.trait3 +
        this.trait4 +
        this.trait5 +
        this.trait6 +
        this.trait7 +
        this.trait8 +
        this.trait9 +
        this.trait10
      );
    }
  }
};
</script>
