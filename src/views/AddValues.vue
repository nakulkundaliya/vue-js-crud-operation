<template>
  <div>
    <CRow>
      <CCol sm="6">
        <CCard>
          <CForm @submit.prevent="add">
            <CCardHeader>
              <strong>Add Values </strong><small>Form</small>
            </CCardHeader>
            <CCardBody>
              <CTextarea
                label="Name"
                placeholder="Enter your values "
                v-model="value"
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
  name: "AddValues",
  methods: {
    ...apiMethods,
    add() {
      this.isLoading = true;
      // Reset the authError if it existed.
      this.error = null;
      return this.addValue({
        value: this.value,
      })
        .then(() => {
          this.isLoading = false;
          this.error;
          // this.$router.back();  // TODO Test case getting filed so Need to fixe this issue
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
