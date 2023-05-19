<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    console.log(this.$route.params)
    const seed = this.$route.params.id
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res)
    })
  }
}
</script>
