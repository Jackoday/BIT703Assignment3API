<template>
  <!-- eslint-disable max-len -->
  <div class="container">
    <!-- Handle errors -->
    <div class="row" v-if="message">
      <div class="type == 'alert alert-error' ? 'alert alert-danger' : 'alert alert-success'">
        {{ message }}
      </div>
    </div>
    <div class="row">
        <form
        id="addImageForm"
        data-request="addImage"
        method="post"
        action="images"
        accept-charset="UTF8"
        class="col col-sm-8 col-md-8"
        enctype="multipart/form-data"
        @submit.prevent="addImage"
        >
        <!-- Form fields -->
        <div class="form-group">
          <label>Name:</label>
          <input type="text" name="title" class="form-control" v-model="apiRequest.name" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" name="description" class="form-control" v-model="apiRequest.description" />
        </div>
        <div class="form-group">
          <label>Tags - add a comma after each tag.</label>
          <input type="text" name="tags" class="form-control" v-model="apiRequest.tag" />
        </div>
        <div class="form-group">
          <label>Filter</label>
          <select name="filter" class="custom-select" v-model="apiRequest.filter" >
            <option value="_1977">1977</option>
            <option value="aden">Aden</option>
            <option value="brannan">Brannan</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="clarendon">Clarendon</option>
            <option value="earlybird">Earlybird</option>
            <option value="gingham">Gingham</option>
            <option value="hudson">Hudson</option>
            <option value="inkwell">Inkwell</option>
            <option value="kelvin">Kelvin</option>
            <option value="lark">Lark</option>
            <option value="lofi">Lo-Fi</option>
            <option value="maven">Maven</option>
            <option value="mayfair">Mayfair</option>
            <option value="moon">Moon</option>
            <option value="nashville">Nashville</option>
            <option value="perpetua">Perpetua</option>
            <option value="reyes">Reyes</option>
            <option value="rise">Rise</option>
            <option value="slumber">Slumber</option>
            <option value="stinson">Stinson</option>
            <option value="toaster">Toaster</option>
            <option value="valencia">Valencia</option>
            <option value="walden">Walden</option>
            <option value="willow">Willow</option>
            <option value="xpro2">X-pro II</option>
          </select>
        </div>
        <div id="image-upload" class="form-group">
          <label>Image</label>
          <input type="file" class="form-control-file" name="file" />
        </div>

        <input
          type="submit"
          class="btn btn-primary"
          name="submit"
          value="submit"
        />
        <input type="hidden" name="_handler" value="addImage" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddImage',
  data () {
    return {
      apiRequest: new this.$request({
        name: '',
        description: '',
        tag: '',
        filter: ''
      }),
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    addImage () {
      this.apiRequest.addStore(this.$store)
      this.apiRequest.addAuth()
      this.apiRequest.post('image/add')
        .then((response) => {
          this.successMessage = response
          this.errorMessage = ''
        })
        .catch((errors) => {
          this.errorMessage = errors
          this.successMessage = ''
        })
    }
  }
}
</script>
