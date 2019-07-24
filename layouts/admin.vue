<template>
  <div class="admin-layout-wrap">
    <el-container :style="{height: '100%'}">
      <el-aside :style="{width: isCollapse?'65px':'250px'}">
        <app-aside 
          :isCollapse="isCollapse"
        />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppAside from "@/components/admin/Aside";

export default {
  components: { AppAside },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    console.log('FROM ADMIN PAGE');
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 1000) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    }
  },
  watch: {
    error(value) {
      this.$message.error(value.response.data.message);
    }
  }
};
</script>

<style lang="scss" scoped>
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>


