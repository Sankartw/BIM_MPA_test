<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
@Component
export default class Test extends Vue {
  @Prop({ default: () => false }) public isReadonly!: boolean;
  public test = null as unknown;
  public test2 = null as unknown;
  public async created() {
    this.test = await this.$http.bimService.post("Case/kase");
  }
}
</script>

<style></style>
