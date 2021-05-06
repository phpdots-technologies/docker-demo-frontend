<template>
  <div class="container-fluid">
    <b-row>
      <b-col cols="12" md="4" sm="4" lg="4" xl="4">
        <h4>Personal Information</h4>
        <h6>Use a permanent address whre you receive a mail</h6>
      </b-col>
      <b-col cols="12" md="8" sm="8" lg="8" xl="8">
        <b-overlay :show="showLoader" rounded="sm">
          <b-form
            class="shadow rounded form-section"
            @submit.prevent="submitData"
          >
            <b-row>
              <b-col cols="12" md="6" sm="6" lg="6" xl="6">
                <b-form-group label="First Name" label-align="left">
                  <b-form-input
                    v-model="form.firstname"
                    v-validate="'required'"
                    type="text"
                    name="first name"
                    :class="{ 'is-invalid': errors.has('first name') }"
                  />
                  <div v-if="errors.has('first name')" class="invalid-feedback">
                    {{ errors.first('first name') }}
                  </div>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6" sm="6" lg="6" xl="6">
                <b-form-group label="Last Name" label-align="left">
                  <b-form-input
                    v-model="form.lastname"
                    v-validate="'required'"
                    type="text"
                    name="last name"
                    :class="{ 'is-invalid': errors.has('last name') }"
                  />
                  <div v-if="errors.has('last name')" class="invalid-feedback">
                    {{ errors.first('last name') }}
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="8" sm="8" lg="8" xl="8">
                <b-form-group label="Email address" label-align="left">
                  <b-form-input
                    v-model="form.email"
                    v-validate="'required|email'"
                    type="email"
                    name="email"
                    :class="{ 'is-invalid': errors.has('email') }"
                  />
                  <div v-if="errors.has('email')" class="invalid-feedback">
                    {{ errors.first('email') }}
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6" sm="6" lg="6" xl="6">
                <b-form-group label="Country / Region" label-align="left">
                  <b-form-select
                    v-model="form.country_id"
                    v-validate="'required'"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    value-field="id"
                    text-field="title"
                    :options="countries"
                    name="country"
                    :class="{ 'is-invalid': errors.has('country') }"
                  ></b-form-select>
                  <div v-if="errors.has('country')" class="invalid-feedback">
                    {{ errors.first('country') }}
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <b-form-group label="Street address" label-align="left">
                  <b-form-input
                    v-model="form.address"
                    v-validate="'required'"
                    type="text"
                    name="street address"
                    :class="{ 'is-invalid': errors.has('street address') }"
                  />
                  <div
                    v-if="errors.has('street address')"
                    class="invalid-feedback"
                  >
                    {{ errors.first('street address') }}
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="4" sm="4" lg="4" xl="4">
                <b-form-group label="City" label-align="left">
                  <b-form-input
                    v-model="form.city"
                    v-validate="'required'"
                    type="text"
                    name="city"
                    :class="{ 'is-invalid': errors.has('city') }"
                  />
                  <div v-if="errors.has('city')" class="invalid-feedback">
                    {{ errors.first('city') }}
                  </div>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="4" sm="4" lg="4" xl="4">
                <b-form-group label="State/Province" label-align="left">
                  <b-form-input
                    v-model="form.state"
                    v-validate="'required'"
                    type="text"
                    name="state"
                    :class="{ 'is-invalid': errors.has('state') }"
                  />
                  <div v-if="errors.has('state')" class="invalid-feedback">
                    {{ errors.first('state') }}
                  </div>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="4" sm="4" lg="4" xl="4">
                <b-form-group label="ZIP/ Postal Code" label-align="left">
                  <b-form-input
                    v-model="form.zipcode"
                    v-validate="'required'"
                    type="text"
                    name="ZIP code"
                    :class="{ 'is-invalid': errors.has('ZIP code') }"
                  />
                  <div v-if="errors.has('ZIP code')" class="invalid-feedback">
                    {{ errors.first('ZIP code') }}
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col
                v-if="hasMessage"
                cols="12"
                sm="12"
                md="12"
                lg="12"
                xl="12"
              >
                <b-alert
                  v-model="hasMessage"
                  :variant="messageClass"
                  dismissible
                >
                  <template v-if="typeof message === 'object'">
                    <ul>
                      <li
                        v-for="(e_message, index) in message"
                        :key="'err_' + index"
                      >
                        {{ e_message }}
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    {{ message }}
                  </template>
                </b-alert>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12 mb-3">
                <b-button
                  v-if="showLoader"
                  variant="primary"
                  class="float-right"
                  disabled
                >
                  <b-spinner small type="grow" class="mr-3" />
                  Loading...
                </b-button>
                <b-button
                  v-else
                  variant="primary"
                  class="float-right"
                  type="submit"
                  >Save</b-button
                >
              </b-col>
            </b-row>
          </b-form>
        </b-overlay>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoader: true,
      hasMessage: false,
      messageClass: 'info',
      message: '',

      form: {
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        country_id: null,
        city: '',
        state: '',
        zipcode: '',
      },
      countries: [],
    }
  },

  mounted() {
    this.getUserData()
  },

  methods: {
    async getUserData() {
      const RepsonseCountryList = await this.$axios.$get('/country-list')
      this.countries = this.__addDummySelectText(
        RepsonseCountryList.data,
        'id',
        'title',
        'Select Country'
      )

      const userID = 1
      const RepsonseUserData = await this.$axios.$get(`/user/${userID}`)
      this.form = RepsonseUserData.data

      this.showLoader = false
    },

    async submitData() {
      await this.$validator.validateAll().then(async (result) => {
        this.showLoader = true
        this.hasMessage = true
        if (result) {
          this.message = 'Requesting to server...\n\r please wait a moment.'
          this.messageClass = 'info'
          delete this.form.id
          const userID = 1
          await this.$axios.$post(`/user/${userID}`, this.form).then((res) => {
            if (res.status === 1) {
              this.messageClass = 'success'
              this.message = res.message
            } else if (res.status === 2) {
              this.messageClass = 'danger'
              const ErrorMessage = this.__generateMessageStringFromError(
                res.message
              )
              this.message = ErrorMessage
              this.messageClass = 'danger'
            }
          })
        } else {
          this.message = 'Please fill all required field with valid data.'
          this.messageClass = 'danger'
        }
        this.showLoader = false
      })
    },
  },
}
</script>

<style>
body {
  background: #e5e5e5;
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
</style>
