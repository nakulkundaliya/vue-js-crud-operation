<template>
  <div>
    <CRow>
      <CCol sm="6">
        <CCard>
          <CForm @submit.prevent="add">
            <CCardHeader>
              <strong>Add Principles </strong><small>Form</small>
            </CCardHeader>
            <CCardBody>
              <CTextarea
                v-model="principle"
                label="Name"
                placeholder="Enter your Principles "
              />
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"
                ><CIcon name="cil-check-circle" /> Save</CButton
              >
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { apiMethods } from "../state/helpers";
export default {
  name: "AddPrinciples",
  methods: {
    ...apiMethods,
    add() {
      this.isLoading = true;
      // Reset the authError if it existed.
      this.error = null;
      return this.addPrinciple({
        principle: this.principle,
      })
        .then(() => {
          this.isLoading = false;
          // Redirect to the originally requested page, or to the home page
          this.$router.back();
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = error;
        });
    },
    validator(val) {
      return val ? val.length >= 4 : false;
    },
  },
};
</script>
