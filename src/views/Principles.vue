<template>
  <div>
    <CRow>
      <CCol lg="6">
        <CTableWrapper :items="$store.state.auth.principles">
          <template #header>
            <CIcon name="cil-grid" /> Principles
            <div class="card-header-actions">
              <div class="card-header-actions">
                <CHeaderNavLink to="/principles/add" exact>
                  Add
                </CHeaderNavLink>
              </div>
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
  name: "Principles",
  components: { CTableWrapper },
  created() {
    this.fetchDate();
  },

  methods: {
    ...apiMethods,
    fetchDate() {
      this.isLoading = true;
      this.error = null;
      return this.getPrinciples()
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
