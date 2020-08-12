<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h3 class="display-2 font-weight-bold mb-3">Top 10 eigenschappen van een Master netwerker</h3>
        <p>
          eigenschappen van master netwerkers?
          <br />Hoofdstuk 7 uit het boek
          <a
            href="https://ivanmisner.com/29-solution-book-10-years-old/"
            target="_blank"
          >29% solution</a> van dr Ivan Misner.
        </p>
      </v-col>

      <v-col cols="12">
        <thead>
          <tr>
            <th></th>
            <th>Eigenschap</th>
            <th>Nooit</th>
            <th>Zelden</th>
            <th>Soms</th>
            <th>Meestal</th>
            <th>Altijd</th>
          </tr>
        </thead>
        <table>
          <tr>
            <td>1.</td>
            <td>Ik volg op</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait1" v-model="trait1" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait1" v-model="trait1" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait1" v-model="trait1" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait1" v-model="trait1" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait1" v-model="trait1" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ik heb een positieve attitude</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait2" v-model="trait2" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait2" v-model="trait2" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait2" v-model="trait2" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait2" v-model="trait2" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait2" v-model="trait2" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ik ben enthousiast en gemotiveerd</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait3" v-model="trait3" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait3" v-model="trait3" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait3" v-model="trait3" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait3" v-model="trait3" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait3" v-model="trait3" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ik ben betrouwbaar</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait4" v-model="trait4" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait4" v-model="trait4" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait4" v-model="trait4" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait4" v-model="trait4" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait4" v-model="trait4" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ik luister goed</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait5" v-model="trait5" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait5" v-model="trait5" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait5" v-model="trait5" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait5" v-model="trait5" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait5" v-model="trait5" />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Ik heb 24/7 toewwijding</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait6" v-model="trait6" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait6" v-model="trait6" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait6" v-model="trait6" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait6" v-model="trait6" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait6" v-model="trait6" />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Ik bedank mensen</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait7" v-model="trait7" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait7" v-model="trait7" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait7" v-model="trait7" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait7" v-model="trait7" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait7" v-model="trait7" />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Ik geniet er van om mensen te helpen</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait8" v-model="trait8" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait8" v-model="trait8" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait8" v-model="trait8" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait8" v-model="trait8" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait8" v-model="trait8" />
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Ik ben oprecht</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait9" v-model="trait9" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait9" v-model="trait9" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait9" v-model="trait9" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait9" v-model="trait9" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait9" v-model="trait9" />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Ik werk aan mijn netwerk</td>
            <td>
              <input type="radio" class="radio-button" :value="1" :name="trait10" v-model="trait10" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="2" :name="trait10" v-model="trait10" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="3" :name="trait10" v-model="trait10" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="4" :name="trait10" v-model="trait10" />
            </td>
            <td>
              <input type="radio" class="radio-button" :value="5" :name="trait10" v-model="trait10" />
            </td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-show="score>=10">
        <h2 class="result">Totale score: {{ score.toFixed(2) }} / 50</h2>
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
