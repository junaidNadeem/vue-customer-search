<template>
  <div class="search-container">
    <div class="search-wrapper">
      
        <span class="search-icon">
        <img src="../assets/search_icon.png" alt="Search Icon" width="16" height="16" />  
    </span>

      <input
        v-model="query"
        type="text"
        placeholder="Search for ID or name"
        class="search-input"
        aria-label="Search customers"
      />
    </div>
    <div class="results-count">{{ filteredResults }} of {{ totalResults }}</div>
  </div>
</template>
  
  <script>
export default {
  props: ["value", "totalResults", "filteredResults"],
  computed: {
    query: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>
  
  <style scoped lang="scss">
  @import '../styles/variables.scss';

.search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  position: sticky;
  top: 0;
  background: white;
  padding: 16px;
  z-index: 10;
}
.search-wrapper {
  position: relative;
  flex-grow: 1;
  margin-right: 16px;
  max-width: 304px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.search-input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 24px;
  border: none;
  background: $grey-background-light;
  font-size: 16px;
  outline: none;
  
  &::placeholder {
      font-weight: $font-semibold;
    color: $dark-grey;
    font-size: 14px;
    font-family: "Montserrat";
  }

  &:focus {
    border: none;
    outline: none;
  }
}

.results-count {
  color: $primary-color;
  font-size: 14px;
  font-weight: $font-semibold;
}
</style>