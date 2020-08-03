<template>
  <q-page padding>
    <q-banner class=" shadow-2 ">
      <template v-slot:avatar class="">
        <q-icon name="fas fa-head-side-mask" color="green" />
      </template>
      <p class="q-ma-none text-weight-bolder text-green">Safety Advisory</p>
      <p>
        Please always wear a mask for your own safety follow social distancing
        guidelines.
      </p>
      <template v-slot:action>
        <q-btn flat color="green" label="View more details" />
      </template>
    </q-banner>

    <div rounded class="text-dark q-mt-sm shadow-2">
      <h5 class="q-ma-none text-h5 q-pt-md q-px-md bg-white">
        Hi Edison let's get going!
      </h5>
      <p class="q-ma-none q-px-md bg-white">
        We have 3 delivery request today!
      </p>

      <div class="row text-center q-py-md bg-white">
        <q-item
          clickable
          class="col "
          v-for="(status, index) in deliveryStatusCount"
          :key="index"
        >
          <q-item-section>
            <div class="text-center">
              <q-avatar
                :color="status.color"
                text-color="white"
                size="lg"
                :icon="status.icon"
              >
              </q-avatar>
              <div>
                <span>{{ status.count }} </span>
                <span
                  class="text-body2 "
                  :style="
                    $q.screen.gt.sm ? 'font-size: 1.2em' : 'font-size: 0.7em'
                  "
                  v-text="status.name"
                />
              </div>
            </div>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.getRiderInventory();
  },
  computed: {
    ...mapGetters("deliveries", ["getInventory"]),
    deliveryStatusCount() {
      return [
        {
          name: " Request",
          icon: "fas fa-exclamation",
          color: "red",
          count: this.getInventory.filter(
            delivery => delivery.deliveryStatus === "pending"
          ).length,
          route: "/"
        },
        {
          name: "Pending",
          icon: "transfer_within_a_station",
          color: "orange",
          count: this.getInventory.filter(
            delivery => delivery.deliveryStatus === "pending"
          ).length,
          route: "/"
        },
        {
          name: "In Progress",
          icon: "fas fa-biking",
          color: "green",
          count: this.getInventory.filter(
            delivery => delivery.deliveryStatus === "in-progress"
          ).length,
          route: "/"
        }
      ];
    }
  },
  methods: {
    ...mapActions("deliveries", ["getRiderInventory"])
  }
};
</script>
