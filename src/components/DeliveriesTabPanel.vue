<template>
  <q-table
    :data="deliveriesComp"
    :columns="columns"
    row-key="id"
    grid
    class="bg-grey-3 "
  >
    <template v-slot:item="props">
      <q-list
        class="col-xs-12 shadow-1 grid-style-transition q-my-xs q-pa-xs bg-white"
      >
        <q-item class="q-pa-sm " clickable to="/delivery-profile">
          <q-item-section>
            <div class="row">
              <DeliveriesTabPanelSlot
                :icon="{ type: 'account_circle', color: 'red-4' }"
              >
                <div class="col text-weight-bold">
                  {{ props.row.package.user.name }}
                </div>
              </DeliveriesTabPanelSlot>

              <!-- <DeliveriesTabPanelSlot
                :icon="{ type: 'fas fa-dollar-sign', color: 'green-8' }"
              >
                <div class="col text-weight-bold text-green-8">
                  
                </div>
              </DeliveriesTabPanelSlot> -->

              <DeliveriesTabPanelSlot
                :icon="{ type: 'fas fa-box', color: 'blue' }"
              >
                {{ props.row.package._id.toUpperCase() }}
              </DeliveriesTabPanelSlot>

              <DeliveriesTabPanelSlot
                :icon="{ type: 'location_on', color: 'red' }"
              >
                <div class="col">
                  {{ props.row.package.shippingAddress.region }}
                  {{ props.row.package.shippingAddress.province }}
                  {{ props.row.package.shippingAddress.barangay }}
                  {{ props.row.package.shippingAddress.cityMun }}
                </div>
              </DeliveriesTabPanelSlot>
            </div>
          </q-item-section>

          <q-item-section top side class="relative">
            <q-btn
              round
              size="md"
              :color="iconComp.color"
              :icon="iconComp.name"
            ></q-btn>
            <!-- ₱  -->
          </q-item-section>
        </q-item>
      </q-list>
    </template>
  </q-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      columns: [
        {
          name: "name",
          label: "Name",
          field: "name",
          sortable: true,
          align: "left"
        },
        {
          name: "location",
          label: "Location",
          field: "location",
          sortable: true,
          align: "left"
        },

        {
          name: "packageNum",
          label: "Package #",
          field: "packageNum",
          align: "left"
        },
        { name: "price", label: "Price", field: "price", align: "left" }
      ]
    };
  },
  props: {
    deliveryType: {
      type: String,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    }
  },
  computed: {
    deliveriesComp() {
      return this.tableData.filter(
        delivery => delivery.deliveryStatus === this.deliveryType
      );
    },
    iconComp() {
      const icon = {
        "in-progress": {
          name: "directions_bike",
          color: "green"
        },
        pending: {
          name: "av_timer",
          color: "orange"
        },
        completed: {
          name: "check",
          color: "blue"
        }
      };

      return icon[this.deliveryType];
    }
  },
  components: {
    DeliveriesTabPanelSlot: () =>
      import("components/slots/DeliveriesTabPanelSlot")
  }
};
</script>

<style>
.noGrow {
  flex: 0 0 30px;
}
</style>
