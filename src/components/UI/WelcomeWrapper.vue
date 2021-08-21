<template>
  <div class="wp">
    <div class="wp-split left"></div>
    <div class="wp-split right">
      <div class="logo-container">
        <img
          class="logo"
          :src="require(`@/assets/images/Assets/Littledata_Logo.svg`)"
          alt="logo"
        />
      </div>
      <slot></slot>
    </div>
  </div>
</template>
