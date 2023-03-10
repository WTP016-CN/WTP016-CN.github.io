<script lang="ts" setup>
import YunFooter from "valaxy-theme-yun/components/YunFooter.vue";
</script>

<template>
  <YunFooter>
    <!--<NetdunLogo />-->
    <VCLiveTime start-time="2023-01-30">
      <template #live-time-before>
        <span>风雨交加，已经在网络的海洋上航行了</span>
      </template>
      <template #live-time-after>
        <span>(●'◡'●)</span>
      </template>
    </VCLiveTime>
    <a href="https://icp.gov.moe/?keyword=20230286" target="_blank"
      >萌 ICP 备 20230286 号</a
    >
  </YunFooter>
</template>
