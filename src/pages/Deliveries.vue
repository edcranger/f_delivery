<template>
  <q-page padding>
    <q-tabs
      v-model="tab"
      class="tabNav text-grey-7 shadow-1 bg-white"
      active-color="orange"
      indicator-color="orange"
      align="justify"
    >
      <q-tab name="in-progress" label="In Progress" />
      <q-tab name="pending" label="Pending" />
      <q-tab name="completed" label="Completed" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class=" text-dark q-pa-none">
      <q-tab-panel name="in-progress" class="q-pa-none">
        <DeliveriesTabPanel :deliveryType="tab" :tableData="getInventory" />
      </q-tab-panel>

      <q-tab-panel name="pending" class="q-pa-none">
        <DeliveriesTabPanel :deliveryType="tab" :tableData="getInventory" />
      </q-tab-panel>

      <q-tab-panel name="completed" class="q-pa-none">
        <DeliveriesTabPanel :deliveryType="tab" :tableData="getInventory" />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      tab: "in-progress"
    };
  },
  beforeCreate() {
    this.$store.dispatch("deliveries/getRiderInventory");
  },
  computed: {
    ...mapGetters("deliveries", ["getInventory"])
  },
  components: {
    DeliveriesTabPanel: () => import("components/DeliveriesTabPanel")
  }
};
</script>

<style>
.tabNav {
  margin-bottom: 1px;
}
</style>
