<template>
  <div>
    <CRow>
      <CCol lg="6">
        <CTableWrapper :items="$store.state.auth.values">
          <template #header>
            <CIcon name="cil-grid" /> Values
            <div class="card-header-actions">
              <CHeaderNavLink to="/values/add" exact> Add </CHeaderNavLink>
            </div>
          </template>
        </CTableWrapper>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from "./base/Table.vue";
import { apiMethods } from "../state/helpers";

export default {
  name: "Values",
  components: { CTableWrapper },
  created() {
    this.fetchDate();
  },

  methods: {
    ...apiMethods,
    fetchDate() {
      this.isLoading = true;
      this.error = null;
      return this.getValues()
        .then(() => {
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = error;
        });
    },
  },
};
</script>
