<template>
  <div class="container-fluid">
    <b-row>
      <b-col cols="12" md="4" sm="4" lg="4" xl="4">
        <h4>Personal Information</h4>
        <h6>Use a permanent address whre you receive a mail</h6>
      </b-col>
      <b-col cols="12" md="8" sm="8" lg="8" xl="8">
        <b-form class="shadow rounded form-section">
          <b-row>
            <b-col cols="12" md="6" sm="6" lg="6" xl="6">
              <b-form-group label="First Name" label-align="left">
                <b-form-input v-model="form.firstName" type="text" />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6" sm="6" lg="6" xl="6">
              <b-form-group label="Last Name" label-align="left">
                <b-form-input v-model="form.lastName" type="text" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="8" sm="8" lg="8" xl="8">
              <b-form-group label="Email address" label-align="left">
                <b-form-input v-model="form.emailAddress" type="text" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6" sm="6" lg="6" xl="6">
              <b-form-group label="Country / Region" label-align="left">
                <b-form-select
                  id="inline-form-custom-select-pref"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :options="[
                    { text: 'Choose...', value: null },
                    'One',
                    'Two',
                    'Three',
                  ]"
                  :value="null"
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-form-group label="Street address" label-align="left">
                <b-form-input v-model="form.streetAddress" type="text" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="4" sm="4" lg="4" xl="4">
              <b-form-group label="City" label-align="left">
                <b-form-input v-model="form.city" type="text" />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="4" sm="4" lg="4" xl="4">
              <b-form-group label="State/Province" label-align="left">
                <b-form-input v-model="form.state" type="text" />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="4" sm="4" lg="4" xl="4">
              <b-form-group label="ZIP/ Postal Code" label-align="left">
                <b-form-input v-model="form.zip" type="text" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="submit-row">
            <b-col cols="12">
              <b-button variant="primary" class="float-right">Save</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
      },
    }
  },
}
</script>

<style>
body {
  background: #f3f4f6;
  color: #000;
}
.container-fluid {
  margin-top: 3.5rem;
}
.form-section {
  background: #fff;
  padding: 1.2rem;
  padding-bottom: 0;
}
.submit-row {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 0.6rem;
}
</style>
