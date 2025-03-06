<template>
  <div class="customer-list" v-if="customers?.length">
    <div class="customer-item" v-for="customer in customers" :key="customer.id">
      <div class="initials-column">
        <div class="customer-avatar">
          {{ getInitials(customer.name) }}
          <span class="verified-badge" v-if="customer.verified">
            <img src="../assets/ok_icon.png" alt="Verified" width="12" height="12" />
          </span>
        </div>
      </div>

      <div class="customer-info-column">
        <p class="customer-id-name">
          <span class="customer-id">{{ customer.id }}</span>
          <span class="customer-name truncate">{{ customer.parentName }}</span>
        </p>
        <p class="customer-name-secondary truncate">
          {{ customer.name }}
          <span v-if="customer.name2"> • {{ customer.name2 }}</span>
        </p>
      </div>

      <div class="customer-city-column">
        <p class="customer-city truncate">{{ customer.city }}</p>
      </div>

      <div class="start-return-column">
        <button 
          class="start-return" 
          aria-label="Start return for customer"
          @click="$emit('start-return', customer)"
        >Start return →</button>
      </div>
    </div>
  </div>
  <p v-else class="no-results">No customers found</p>
</template>
  
<script>
export default {
  props: ["customers"],
  methods: {
    getInitials(name) {
      if (!name) return '';
      return name
        .split(" ")
        .map((n) => n[0]?.toUpperCase() || '')
        .slice(0, 2)
        .join("");
    },
  },
};
</script>
  
<style scoped lang="scss">
@import "../styles/variables.scss";

.no-results {
  text-align: center;
}

.customer-list {
  border-top: 1px solid #c7c6c6;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-height: calc(100vh - 270px); 
  overflow-y: auto;
  padding-top: 1px; 
}

.customer-item {
  display: grid;
  grid-template-columns: 50px minmax(0, 2fr) minmax(0, 1fr) auto;
  gap: 24px;
  align-items: center;
  background-color: #ffffff;
  transition: background-color 0.2s ease;
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
  border-radius: 8px;

  &:hover {
    background-color: #f5f5f5;
  }
}

.initials-column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.initials {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.customer-info-column {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.customer-id-name {
  padding-left: 10px;
  margin-bottom: 0px;

  color: #333;
  display: flex;
  align-items: center;
}

.customer-avatar {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(
    133.53deg,
    #00ffa3 2.44%,
    rgba(0, 194, 255, 0.17) 100%
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.verified-badge {
  position: absolute;
  bottom: -4px;
  background-color: #2dc579;
  right: -4px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 12px;
  border: 3px solid white;
}
.customer-name {
  font-weight: $font-medium;
  font-size: 14px;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.customer-id {
  margin-right: 5px;
  border-radius: 24px;
  background-color: $grey-background-light;
  padding: 5px;
  display: inline-block;
  color: $primary-color;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: $font-semibold;
  font-size: 10px;
}

.customer-name-secondary {
  margin-top: 5px;
  padding-left: 20px;
  font-weight: $font-medium;
  font-size: 14px;
}

.customer-city-column {
  font-weight: $font-medium;
  font-size: 14px;
  overflow: hidden;
}

.start-return-column {
  text-align: right;
}

.start-return {
  background-color: $grey-background-light;
  color: $primary-color-light;
  border: none;
  padding: 8px 15px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: $font-medium;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: darken($grey-background-light, 5%);
  }
}

span,
p {
  color: black;
}
</style>
  