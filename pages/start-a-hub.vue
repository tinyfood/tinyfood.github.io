<template>
  <main class="capsule">
    <div class="saleimg">
      <app-mastheadtoo2 img="banner-ppl_knowledgebase" title="Tiny Food hyper-local food production, transportation and distribution Knowledgebase by SCD Hub" bkcolor="#fff"/>
    </div>
    <div class="contain">
      <transition-group name="items" tag="section" class="content">
        <app-kbitem
          v-for="(item, index) in mStartahubitems"
          key="item"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AppMastheadtoo2 from './../components/AppMastheadtoo2.vue';
import AppStartahubitem from './../components/AppStartahubitem.vue';
export default {
  components: {
    AppMastheadtoo2,
    AppStartahubitem
  },
  computed: {
    mStartahubitems() {
      return this.$store.getters.startahub;
    }
  }
};
</script>
<style>
.saleimg .ppl-banner {
  height: 105%;
}
.Startahubcontent {
  /*no grid support*/
  float: right;
  width: 92%;
  /* grid */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}
</style>
