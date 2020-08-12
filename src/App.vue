<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">Unofficial BNI Growth calculator</div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/dampee/Bni-Growth-Calculator" target="_blank" text>
        <span class="mr-2">Source code</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Top10Traits />
      <hr />
      <GrowthCalculator />
    </v-content>

    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>
        &copy; {{ new Date().getFullYear() }}
        <a href="http://umbrace.be">Umbrace</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import GrowthCalculator from "./components/GrowthCalculator";
import Top10Traits from "./components/Top10Traits";

export default {
  name: "App",

  components: {
    Top10Traits,
    GrowthCalculator
  },

  data: () => ({
    //
  })
};
</script>
