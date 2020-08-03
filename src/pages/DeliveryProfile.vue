<template>
  <q-page>
    <div class="absolute full-width full-height column ">
      <div class="col-10 q-mb-lg">
        <div class="text-h6 bg-orange text-white q-pa-xs">
          <q-btn round flat class="q-ml-sm" icon="fas fa-angle-left" />

          <span class="q-ml-lg">Delivery Profile</span>
        </div>

        <q-scroll-area
          class="q-pa-sm q full-height full-width "
          :thumb-style="thumbStyle"
        >
          <q-img :src="imageSrc" spinner-color="white" />
          <div class="text-subtitle2 q-py-sm text-grey-8">Order Details</div>
          <q-list>
            <q-item class="bg-white ">
              <q-item-section avatar>
                <q-icon name="fas fa-box" color="blue" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold text-grey-7"
                  >Sample Delivery ID</q-item-label
                >
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="bg-white ">
              <q-item-section avatar>
                <q-icon name="fas fa-calendar-check" color="orange" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold text-grey-7"
                  >July 14, 1992</q-item-label
                >
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="bg-white ">
              <q-item-section avatar>
                <q-icon name="fas fa-dollar-sign" color="green-4" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold text-grey-7">1302</q-item-label>
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <div class="text-subtitle2 q-pt-md q-pb-xs text-grey-8">
            Customer Details
          </div>

          <q-list>
            <q-item class="bg-white ">
              <q-item-section avatar>
                <q-icon name="fas fa-user" color="red-4" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold text-grey-7"
                  >Edison Ocampo</q-item-label
                >
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="bg-white ">
              <q-item-section avatar>
                <q-icon name="phone" color="red-4" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold text-grey-7"
                  >09958402424</q-item-label
                >
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="bg-white ">
              <q-item-section avatar>
                <q-icon name="email" color="blue-4" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold text-grey-7"
                  >edisonocampo.eo@gmail.com</q-item-label
                >
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="bg-white ">
              <q-item-section avatar>
                <q-icon name="location_on" color="green" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold text-grey-7"
                  >Blk 22 Lot 12 Hibiscus Street Castle Spring Heights Camarin
                  Caloocan City 1422
                </q-item-label>
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </div>
      <div class="col q-pa-md  bg-white  ">
        <div class="q-gutter-md float-right row">
          <q-btn round icon="camera_alt" @click="captureImage" color="blue" />
          <q-btn color="red">Cancel</q-btn>
          <q-btn color="green">Accept</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Plugins, CameraResultType } from "@capacitor/core";

const { Camera } = Plugins;
export default {
  data() {
    return {
      imageSrc: "",
      thumbStyle: {
        width: "5px",
        opacity: 0
      }
    };
  },
  methods: {
    async captureImage() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      this.imageSrc = image.webPath;
    }
  }
};
</script>

<style></style>
