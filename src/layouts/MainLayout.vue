<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-1">
    <q-header elevated class=" bg-white text-dark">
      <div class="row justify-center">
        <q-toolbar class="col-xs-12 col-md-10">
          <q-toolbar-title>
            <h6 class="col-4 q-ma-none">
              <span class="text-h6 text-weight-bolder">F</span>
              -Rider
            </h6>
          </q-toolbar-title>

          <q-btn-dropdown
            color="dark"
            flat
            icon="account_circle"
            :label="firstName"
          >
            <q-list>
              <q-item clickable v-ripple @click="logOut()">
                <q-item-section>
                  <q-item-label v-html="`Logout`" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </div>
    </q-header>

    <div class="row justify-center bg-grey-3">
      <div class="col-xs-12 col-md-10">
        <div class="row">
          <div class="power col-xs-12 col-sm-3 ">
            <q-list>
              <q-item
                clickable
                :to="nav.route"
                v-ripple
                active-class="text-orange"
                v-for="(nav, index) in navigations"
                :key="index"
              >
                <q-item-section avatar style="min-width:30px;">
                  <q-icon :name="nav.icon" />
                </q-item-section>

                <q-item-section class="text-subtitle2" v-html="nav.name" />
              </q-item>
            </q-list>
          </div>
          <div class="col-xs-12 col-sm-9 ">
            <q-page-container>
              <router-view />
            </q-page-container>
          </div>
        </div>
      </div>
    </div>

    <q-footer elevated class="bg-white text-dark">
      <div class="row justify-center">
        <div class="col-xs-12 ">
          <div class="row text-center  ">
            <q-item
              active-class="text-orange"
              class="col "
              v-for="(nav, index) in navigations"
              :key="index"
              :to="nav.route"
            >
              <q-btn size="sm" flat stack :icon="nav.icon" :label="nav.name" />
            </q-item>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Cookies } from "quasar";
export default {
  preFetch({ store }) {
    return store.dispatch("auth/getRiderInfo");
  },
  data() {
    return {
      navigations: [
        {
          name: "Dashboard",
          icon: "dashboard",
          route: "/dashboard"
        },
        {
          name: "Deliveries",
          icon: "fas fa-biking",
          route: "/deliveries"
        },
        {
          name: "Inventory",
          icon: "inbox",
          route: "/inventory"
        },
        {
          name: "Account",
          icon: "fas fa-user",
          route: "/account"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("auth", ["getRider"]),
    firstName() {
      let user = null;
      if (this.getRider.name) {
        user = this.getRider.name.split(" ")[0];
      }
      return user;
    }
  },
  methods: {
    ...mapActions("auth", ["logoutRider"]),
    logOut() {
      this.logoutRider().then(res => {
        Cookies.remove("riderToken");
        Cookies.remove("riderCsrf_id");
        this.$router.go("/login");
      });
    }
  }
};
</script>

<style>
.power {
  margin-top: 4rem;
}
@media screen and (min-width: 599px) {
  .q-footer {
    display: none;
  }
}

@media screen and (max-width: 599px) {
  .power {
    display: none;
  }
}
</style>
