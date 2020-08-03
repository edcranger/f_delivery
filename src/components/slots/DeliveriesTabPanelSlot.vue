<template>
  <div class="col-12 q-my-xs">
    <div class="row">
      <div class="col noGrow">
        <q-icon
          size="xs"
          :color="icon.color"
          class="q-mr-xs "
          :name="icon.type"
        />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
