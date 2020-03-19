<template>
  <div>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          item-text="caseName"
          item-value="caseNum"
          v-model="selectCase"
          :items="caseItmes"
          label="案件選擇"
        ></v-select>
      </v-col>
      <v-col>
        {{ selectCase }}
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          item-text="棟名稱"
          return-object
          v-model="selecSideBuilding"
          :items="sidebuildingItmes"
          label="分棟選擇"
        ></v-select>
      </v-col>
      <v-col>
        {{ selecSideBuilding }}
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          item-text="樓層名稱"
          item-value="樓層編號"
          v-model="selectedFloor"
          :items="RESfloorITEMS"
          label="樓層選擇"
        ></v-select>
      </v-col>
      <v-col>
        {{ selectedFloor }}
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          item-text="名稱"
          return-object
          v-model="selectedSpace"
          :items="spaceItems"
          label="空間選擇"
        ></v-select>
      </v-col>
      <v-col>
        {{ selectedSpace }}
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          item-text="設備名稱"
          return-object
          v-model="selectedEq"
          :items="eqItems"
          label="設備選擇"
        ></v-select>
      </v-col>
      <v-col>
        {{ selectedEq }}
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          item-text="設備名稱"
          return-object
          v-model="selectedEqMep"
          :items="eqmepItems"
          label="設備資訊(機電、樓層)"
        ></v-select>
      </v-col>
      <v-col>
        {{ selectedEqMep }}
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          item-text="屬性名稱"
          return-object
          v-model="selectedEqAttr"
          :items="eqqtattrItems"
          label="設備屬性資訊"
        ></v-select>
      </v-col>
      <v-col>
        {{ selectedEqAttr }}
      </v-col>
    </v-row>
    <div class="d-flex pa-2 flex-column">
      <div class="d-flex">Building {{ bulidingName }}</div>
      <v-card>
        {{ Building }}
      </v-card>
    </div>
    <div class="d-flex pa-2 flex-column">
      <div class="d-flex">Building2</div>
      <v-card>
        {{ Building2 }}
      </v-card>
    </div>
    <div class="d-flex pa-2 flex-column">
      <div class="d-flex">Space</div>
      <v-card>
        {{ Space }}
      </v-card>
    </div>
    <div class="d-flex pa-2 flex-column">
      <div class="d-flex">EqptLocation</div>
      <v-card>
        {{ EqptLocation }}
      </v-card>
    </div>
    <div class="d-flex pa-2 flex-column">
      <div class="d-flex">EqptMEP</div>
      <v-card>
        {{ EqptMEP }}
      </v-card>
    </div>
    <div class="d-flex pa-2 flex-column">
      <div class="d-flex">EqptAttr</div>
      <v-card>
        {{ EqptAttr }}
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  @Prop({ default: () => false }) public isReadonly!: boolean;
  public test = null as any;
  public Building = null as any;
  public Building2 = null as any;
  public Space = null as any;
  public EqptLocation = [] as any;
  public EqptMEP = null as any;
  public EqptAttr = null as any;
  public casetNum = 1;
  public buildNum = 1;
  public selectBuild = 0;
  public floorNum = 4;

  public bulidingName = "";
  public caseItmes = [];
  public RESfloorITEMS = [];
  public sidebuildingItmes = [];
  public spaceItems = [];
  public eqItems = [];
  public eqmepItems = [];
  public eqqtattrItems = [];

  public selectCase = "";
  public selecSideBuilding = {} as any;
  public selectedFloor = "";
  public selectedSpace = {} as any;
  public selectedEq = {} as any;
  public selectedEqMep = {} as any;
  public selectedEqAttr = {} as any;

  public async created() {
    const { data } = await this.$http.bimService.post("Case/kase");
    this.test = data;
    this.caseItmes = this.test.map((obj: any) => {
      return {
        caseNum: obj.案件編號,
        caseName: obj.案件名稱
      };
    });
  }

  async getBuildingPost() {
    await this.$http.bimService
      .post(`Building/${this.selectCase}/${this.selecSideBuilding.棟編號}`)
      .then(res => {
        this.RESfloorITEMS = res.data[0].樓層;
      });
  }
  @Watch("selectCase", { deep: true })
  oncaseChange() {
    this.selecSideBuilding = null;
    if (this.selectCase) {
      this.sidebuildingItmes = this.test!.find(
        (obj: any) => obj.案件編號 == this.selectCase
      )!.分棟參數;
    }
    this.checkLength(this.sidebuildingItmes) && (this.selecSideBuilding = "");
  }
  @Watch("selecSideBuilding", { deep: true })
  onbsChange() {
    this.selectedFloor = "";
    this.getBuildingPost();
    this.checkLength(this.RESfloorITEMS) && (this.selectedFloor = "");
  }
  @Watch("selectedFloor")
  async onfloorChange() {
    this.selectedSpace = null;
    if (!this.selectedFloor) return;
    const spaceres = await this.$http.bimService.post(
      `Space/${this.selectCase}/${this.selecSideBuilding.棟編號}/${this.selectedFloor}`
    );
    this.spaceItems = spaceres.data;
    this.checkLength(this.spaceItems) && (this.selectedSpace = null);
  }
  @Watch("selectedSpace")
  async onSpaceChange() {
    this.selectedEq = null;
    if (!this.selectedSpace) return;
    const Eqres = await this.$http.bimService.post(
      `EqptLocation/${this.selectCase}/${this.selecSideBuilding.棟編號}/${this.selectedFloor}/${this.selectedSpace.GlobalID}`
    );
    this.eqItems = Eqres.data;
    this.checkLength(this.eqItems) && (this.selectedEq = null);
  }
  @Watch("selectedEq")
  async onEqptChange() {
    this.selectedEqMep = null;
    if (!this.selectedEq) return;
    const EqMepres = await this.$http.bimService.post(
      `EqptMEP/${this.selectCase}/${this.selecSideBuilding.棟編號}/${this.selectedEq.機電代碼}/${this.selectedFloor}`
    );
    this.eqmepItems = EqMepres.data;
    this.checkLength(this.eqmepItems) && (this.selectedEqMep = null);
  }
  @Watch("selectedEqMep")
  async onEqMepChange() {
    this.selectedEqAttr = null;
    if (!this.selectedEqMep) return;
    const EqAttrres = await this.$http.bimService.post(
      `EqptMEP/${this.selectCase}/${this.selecSideBuilding.棟編號}/${this.selectedEq.機電代碼}/${this.selectedEqMep.GlobalID}`
    );
    this.eqqtattrItems = EqAttrres.data;
    this.checkLength(this.eqmepItems) && (this.selectedEqAttr = null);
  }
  public checkLength(obj: any) {
    if (obj.length < 1) {
      return true;
    } else {
      return false;
    }
  }

  // @Watch("test")
  // async testChange() {
  //   const caseno = this.test[this.casetNum].案件編號;
  //   const bno = this.test[this.casetNum].分棟參數[0];
  //   this.bulidingName = this.test[this.casetNum].案件名稱;
  //   const pass = bno.圖台憑證;
  //   const { data } = await this.$http.bimService.post(`Building/${caseno}`);
  //   const res = await this.$http.bimService.post(
  //     `Building/${caseno}/${bno.棟編號}`
  //   );
  //   this.Building = data;
  //   this.Building2 = res.data;
  //   const floor = this.Building[this.selectBuild].樓層[this.floorNum].樓層編號;
  //   // 當 回傳為 204時 應該是沒有資料的
  //   const spaceres = await this.$http.bimService.post(
  //     `Space/${caseno}/${bno.棟編號}/${floor}`
  //   );
  //   this.Space = spaceres.data;

  //   this.Space.forEach(async (obj: any) => {
  //     const EqLocationres = await this.$http.bimService.post(
  //       `EqptLocation/${caseno}/${bno.棟編號}/${floor}/${obj.GlobalID}`
  //     );
  //     this.EqptLocation.push(EqLocationres.data);
  //   });
  // }
}
</script>

<style></style>
