<template>
    <!-- eslint-disable max-len -->
    <div class="container">
        <div class="row"> <!-- The contents of this div are only rendered if there are user images available -->
            <h2>Your Images</h2>
                 <router-link tag="p" to="/images/add">
                            <a class="btn btn-primary text-center float-right" href="/images/add">Upload an Image Now</a>
                        </router-link>
        </div>
        <!-- Success or failure message -->
        <div class="row" v-if="message">
            <div v-bind:class="type == 'alert alert-error' ? 'alert alert-danger' : 'alert alert-success'">
                {{ message }}
            </div>
        </div>
        <!-- The contents of this div are only rendered if there are user images available -->
        <div class="row">
            <!-- Bind images -->
            <div id="my-images" class="grid">
                <div class="grid-item user" v-for="image in usersImages" v-bind:key="image.id">
                    <picture v-bind:id="'image' + image.id">
                        <img
                        v-bind:src="'image' + image.path"
                        v-bind:name="image.name"
                        v-bind:class="image.filter"
                        v-bind:alt="image.description"
                        />
                    </picture>
                    <h5>{{ image.name }}</h5>
                    <p>{{ image.description }}</p>
                    <p><a v-bind:href="'/image?delete_image=' + image.id" class="btn btn-primary btn-sm">Delete</a></p>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'usersImages',
  methods: {
    fetchImages () {
      const endpoint = 'images'
      this.apiRequest.get(endpoint)
        .then((response) => {
          this.othersImages = response
          this.errors = ''
        })
        .catch((errors) => {
          this.errors = errors
        })
    }
  }
}
</script>
